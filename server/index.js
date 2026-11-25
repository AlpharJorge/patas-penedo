import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3001;

const database = mysql.createConnection({
  host: process.env.MYSQL_HOST || "127.0.0.1",
  port: Number(process.env.MYSQL_PORT) || 3306,
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || "patas_penedo",
  charset: "utf8mb4",
});

app.use(cors());
app.use(express.json());

database.connect((error) => {
  if (error) {
    console.error("Não foi possível conectar ao MySQL:", error.message);
    process.exit(1);
  }
  console.log(`Conectado ao MySQL (${process.env.MYSQL_DATABASE || "patas_penedo"}).`);
});

app.get("/api/animals", (request, response) => {
  database.query("SELECT * FROM animals ORDER BY created_at DESC, id ASC", (error, animals) => {
    if (error) {
      console.error("Erro ao buscar animais:", error.message);
      return response.status(500).json({ error: "Não foi possível buscar os animais." });
    }
    response.json(animals);
  });
});

app.post("/api/adoption-requests", (request, response) => {
  const { animal_id, animal_name, applicant_name, email, phone, message = "" } = request.body;
  const valid =
    Number.isInteger(Number(animal_id)) &&
    String(animal_name || "").trim().length > 0 &&
    String(applicant_name || "").trim().length >= 2 && String(applicant_name).length <= 100 &&
    String(email || "").trim().length >= 5 && String(email).length <= 160 &&
    String(phone || "").trim().length >= 8 && String(phone).length <= 30 &&
    String(message).length <= 600;

  if (!valid) {
    return response.status(400).json({ error: "Confira os dados do formulário." });
  }

  const values = [
    Number(animal_id),
    String(animal_name).trim(),
    String(applicant_name).trim(),
    String(email).trim(),
    String(phone).trim(),
    String(message).trim(),
  ];
  const sql = "INSERT INTO adoption_requests (animal_id, animal_name, applicant_name, email, phone, message) VALUES (?, ?, ?, ?, ?, ?)";

  database.query(sql, values, (error, result) => {
    if (error) {
      console.error("Erro ao salvar pedido de adoção:", error.message);
      return response.status(500).json({ error: "Não foi possível salvar o pedido." });
    }
    response.status(201).json({ id: result.insertId });
  });
});

app.listen(port, "127.0.0.1", () => {
  console.log(`API disponível em http://127.0.0.1:${port}`);
});
