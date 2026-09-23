import AnimalCard from "./AnimalCard";
import animals from "../data/animals";

function AnimalCatalog() {
  return (
    <section id="catalogo" className="catalog">
      <h2>Animais para adoção</h2>
      <div className="catalog__grid">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
}

export default AnimalCatalog;
