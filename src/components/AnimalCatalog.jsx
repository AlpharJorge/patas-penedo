import { useEffect, useState } from "react";
import { ArrowRight, Check, Search, X } from "lucide-react";
import AnimalCard from "./AnimalCard";
import animalsData from "../data/animals";
import { loadAnimals, saveAdoptionRequest } from "../lib/dataStore";

const emptyForm = { name: "", email: "", phone: "", message: "" };

function AdoptionDialog({ animal, onClose }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitRequest = async (event) => {
    event.preventDefault();
    setStatus("saving");
    try {
      const savedTo = await saveAdoptionRequest({
        animal_id: animal.id,
        animal_name: animal.name,
        applicant_name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      });
      setStatus(savedTo);
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="adoption-dialog" role="dialog" aria-modal="true" aria-labelledby="adoption-title">
        <button className="icon-button adoption-dialog__close" type="button" onClick={onClose} aria-label="Fechar formulário"><X size={20} /></button>
        {status === "database" || status === "local" ? (
          <div className="form-success" role="status">
            <span className="form-success__icon"><Check size={25} /></span>
            <p className="eyebrow">Pedido registrado</p>
            <h2 id="adoption-title">Obrigado pelo interesse!</h2>
            <p>{status === "database" ? "Seu pedido foi salvo. A equipe poderá entrar em contato pelos dados informados." : "Seu pedido ficou salvo neste navegador. Para receber contatos da equipe, configure o banco de dados do projeto."}</p>
            <button className="button button--primary" type="button" onClick={onClose}>Concluir <ArrowRight size={17} /></button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Uma nova história começa aqui</p>
            <h2 id="adoption-title">Tenho interesse em {animal.name}</h2>
            <p className="adoption-dialog__intro">Conte como podemos falar com você. Este primeiro contato não confirma a adoção.</p>
            <form className="adoption-form" onSubmit={submitRequest}>
              <label>Seu nome<input name="name" autoComplete="name" value={form.name} onChange={updateField} required maxLength={100} /></label>
              <div className="adoption-form__row">
                <label>E-mail<input type="email" name="email" autoComplete="email" value={form.email} onChange={updateField} required maxLength={160} /></label>
                <label>WhatsApp<input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={updateField} required maxLength={30} /></label>
              </div>
              <label>Conte um pouco sobre seu lar<textarea name="message" value={form.message} onChange={updateField} rows="3" maxLength={600} placeholder="Rotina, espaço e experiência com animais…" /></label>
              {status === "error" && <p className="form-error" role="alert">Não foi possível salvar agora. Tente novamente.</p>}
              <button className="button button--primary" type="submit" disabled={status === "saving"}>{status === "saving" ? "Salvando…" : "Enviar pedido de contato"} <ArrowRight size={17} /></button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

function AnimalCatalog({ preview = false }) {
  const [animals, setAnimals] = useState(animalsData);
  const [query, setQuery] = useState("");
  const [species, setSpecies] = useState("Todos");
  const [status, setStatus] = useState("Disponível");
  const [dataWarning, setDataWarning] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    let active = true;
    loadAnimals(animalsData).then((result) => {
      if (active) {
        setAnimals(result.animals);
        setDataWarning(result.warning ?? false);
      }
    });
    return () => { active = false; };
  }, []);

  const visibleAnimals = animals.filter((animal) => {
    const matchesSpecies = species === "Todos" || animal.species === species;
    const matchesStatus = status === "Todos" || animal.status === status;
    const text = `${animal.name} ${animal.species} ${animal.temperament} ${animal.story}`.toLocaleLowerCase("pt-BR");
    return matchesSpecies && matchesStatus && text.includes(query.trim().toLocaleLowerCase("pt-BR"));
  });

  const shownAnimals = preview ? visibleAnimals.slice(0, 3) : visibleAnimals;

  return (
    <section className={`catalog section-shell${preview ? " catalog--preview" : ""}`}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Conheça nossos amigos</p>
          <h2>{preview ? "Esperando por um lar" : "Quem pode fazer parte da sua família?"}</h2>
          <p className="section-heading__copy">Cada animal tem seu jeito, sua história e muito carinho para oferecer.</p>
        </div>
        {preview && <a className="text-link" href="#/adocao">Ver todos os animais <ArrowRight size={16} /></a>}
      </div>
      {!preview && (
        <div className="catalog__filters" aria-label="Filtros do catálogo">
          <label className="search-field"><Search size={18} aria-hidden="true" /><span className="sr-only">Buscar animais</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por nome ou característica" /></label>
          <label className="select-field"><span>Espécie</span><select value={species} onChange={(event) => setSpecies(event.target.value)}><option>Todos</option><option>Cachorro</option><option>Gato</option></select></label>
          <label className="select-field"><span>Situação</span><select value={status} onChange={(event) => setStatus(event.target.value)}><option>Disponível</option><option>Todos</option><option>Em processo</option><option>Adotado</option></select></label>
        </div>
      )}
      {dataWarning && <p className="data-notice" role="status">Não foi possível acessar o banco. Exibindo os animais de demonstração.</p>}
      {shownAnimals.length ? (
        <div className="catalog__grid">
          {shownAnimals.map((animal) => <AnimalCard key={animal.id} animal={animal} onAdopt={setSelectedAnimal} />)}
        </div>
      ) : (
        <div className="empty-state"><span>🐾</span><h3>Nenhum animal encontrado</h3><p>Ajuste os filtros ou tente outro termo.</p><button className="button button--quiet" type="button" onClick={() => { setQuery(""); setSpecies("Todos"); setStatus("Todos"); }}>Limpar filtros</button></div>
      )}
      {selectedAnimal && <AdoptionDialog key={selectedAnimal.id} animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />}
    </section>
  );
}

export default AnimalCatalog;

