const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const hasDatabase = Boolean(supabaseUrl && supabaseKey);
const adoptionStorageKey = "patas-penedo:adoption-requests";

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Banco de dados respondeu ${response.status}.`);
  }

  if (response.status === 204 || options.headers?.Prefer === "return=minimal") return null;
  return response.json();
}

export async function loadAnimals(fallbackAnimals) {
  if (hasDatabase) {
    try {
      const animals = await supabaseRequest("animals?select=*&order=created_at.desc");
      return { animals, source: "database" };
    } catch (error) {
      console.error("Não foi possível carregar os animais do banco:", error);
      return { animals: fallbackAnimals, source: "fallback", warning: true };
    }
  }

  return { animals: fallbackAnimals, source: "demo", warning: false };
}

export async function saveAdoptionRequest(request) {
  if (hasDatabase) {
    try {
      await supabaseRequest("adoption_requests", {
        method: "POST",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify(request),
      });
      return "database";
    } catch (error) {
      console.error("Não foi possível salvar o pedido no banco:", error);
    }
  }

  const savedRequests = JSON.parse(localStorage.getItem(adoptionStorageKey) || "[]");
  savedRequests.push({ ...request, created_at: new Date().toISOString() });
  localStorage.setItem(adoptionStorageKey, JSON.stringify(savedRequests));
  return "local";
}

export function isDatabaseConfigured() {
  return hasDatabase;
}
