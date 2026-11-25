const adoptionStorageKey = "patas-penedo:adoption-requests";

export async function loadAnimals(fallbackAnimals) {
  try {
    const response = await fetch("/api/animals");
    if (!response.ok) throw new Error(`Servidor respondeu ${response.status}.`);
    return { animals: await response.json(), source: "database", warning: false };
  } catch (error) {
    console.error("Não foi possível carregar os animais do banco:", error);
    return { animals: fallbackAnimals, source: "fallback", warning: true };
  }
}

export async function saveAdoptionRequest(request) {
  try {
    const response = await fetch("/api/adoption-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    if (!response.ok) throw new Error(`Servidor respondeu ${response.status}.`);
    return "database";
  } catch (error) {
    console.error("Não foi possível salvar o pedido no banco:", error);
    const savedRequests = JSON.parse(localStorage.getItem(adoptionStorageKey) || "[]");
    savedRequests.push({ ...request, created_at: new Date().toISOString() });
    localStorage.setItem(adoptionStorageKey, JSON.stringify(savedRequests));
    return "local";
  }
}
