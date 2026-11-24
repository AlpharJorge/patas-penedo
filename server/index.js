import cors from "cors";
import express from "express";
import pool from "./db.js";

const app = express();
const port = Number(process.env.PORT || 3001);
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.disable("x-powered-by");
app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", async (_request, response) => {
  try {
    await pool.query("SELECT 1");
    response.json({ api: "online", database: "online" });
  } catch {
    response.status(503).json({ api: "online", database: "offline" });
  }
});

app.get("/api/animals", async (_request, response, next) => {
  try {
    const [animals] = await pool.execute(
      `SELECT id, name, species, age, size, temperament, status, story, photo
       FROM animals
       ORDER BY created_at DESC, id DESC`,
    );
    response.json(animals);
  } catch (error) {
    next(error);
  }
});

app.post("/api/adoption-requests", async (request, response, next) => {
  const { animal_id: animalId, animal_name: animalName, applicant_name: applicantName, email, phone, message = "" } = request.body ?? {};
  const parsedAnimalId = Number(animalId);

  if (!Number.isInteger(parsedAnimalId) || parsedAnimalId < 1) {
    return response.status(400).json({ error: "Animal inválido." });
  }
  if (typeof applicantName !== "string" || applicantName.trim().length < 2 || applicantName.length > 100) {
    return response.status(400).json({ error: "Informe um nome válido." });
  }
  if (typeof email !== "string" || email.length > 160 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return response.status(400).json({ error: "Informe um e-mail válido." });
  }
  if (typeof phone !== "string" || phone.replace(/\D/g, "").length < 8 || phone.length > 30) {
    return response.status(400).json({ error: "Informe um telefone válido." });
  }
  if (typeof message !== "string" || message.length > 600) {
    return response.status(400).json({ error: "A mensagem deve ter até 600 caracteres." });
  }

  try {
    const [animals] = await pool.execute(
      "SELECT name, status FROM animals WHERE id = ? LIMIT 1",
      [parsedAnimalId],
    );
    const animal = animals[0];
    if (!animal) return response.status(404).json({ error: "Animal não encontrado." });
    if (animal.status !== "Disponível") return response.status(409).json({ error: "Este animal não está disponível para adoção." });

    const [result] = await pool.execute(
      `INSERT INTO adoption_requests
        (animal_id, animal_name, applicant_name, email, phone, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [parsedAnimalId, animal.name || animalName, applicantName.trim(), email.trim(), phone.trim(), message.trim()],
    );
    response.status(201).json({ id: result.insertId, message: "Pedido registrado." });
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  console.error("Erro na API:", error.message);
  response.status(503).json({ error: "Não foi possível concluir a solicitação agora." });
});

app.listen(port, () => {
  console.log(`API Patas de Penedo disponível em http://localhost:${port}`);
});
