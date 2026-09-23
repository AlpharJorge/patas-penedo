function AnimalCard({ animal }) {
  return (
    <article className="animal-card">
      <img className="animal-card__photo" src={animal.photo} alt={animal.name} />
      <div className="animal-card__body">
        <div className="animal-card__header">
          <h3>{animal.name}</h3>
          <span className="badge">{animal.status}</span>
        </div>
        <p className="animal-card__meta">
          {animal.species} · {animal.age} · Porte {animal.size}
        </p>
        <p className="animal-card__temperament">{animal.temperament}</p>
        <p className="animal-card__story">{animal.story}</p>
      </div>
    </article>
  );
}

export default AnimalCard;
