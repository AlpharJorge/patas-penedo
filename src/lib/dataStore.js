import api from "./api";

const adoptionStorageKey = "patas-penedo:adoption-requests";

export async function loadAnimals(fallbackAnimals) {
  try {
    const { data } = await api.get("/animals");
    return { animals: data, source: "mysql", warning: false };
  } catch (error) {
    console.error("Não foi possível carregar os animais da API MySQL:", error.message);
    return { animals: fallbackAnimals, source: "fallback", warning: true };
  }
}

export async function saveAdoptionRequest(request) {
  try {
    await api.post("/adoption-requests", request);
    return "api";
  } catch (error) {
    console.error("Não foi possível salvar o pedido na API MySQL:", error.message);
    const savedRequests = JSON.parse(localStorage.getItem(adoptionStorageKey) || "[]");
    savedRequests.push({ ...request, created_at: new Date().toISOString() });
    localStorage.setItem(adoptionStorageKey, JSON.stringify(savedRequests));
    return "local";
  }
}
