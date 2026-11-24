import { ArrowUpRight, Heart, MapPin } from "lucide-react";

function AnimalCard({ animal, onAdopt }) {
  const available = animal.status === "Disponível";

  return (
    <article className="animal-card">
      <div className="animal-card__image-wrap">
        <img className="animal-card__photo" src={animal.photo} alt={`Foto de ${animal.name}`} loading="lazy" />
        <span className={`badge${available ? " badge--available" : ""}`}>{animal.status}</span>
      </div>
      <div className="animal-card__body">
        <div className="animal-card__header"><div><h3>{animal.name}</h3><p className="animal-card__meta">{animal.species} <span>·</span> {animal.age} <span>·</span> Porte {animal.size}</p></div><span className="animal-card__heart" aria-hidden="true"><Heart size={18} /></span></div>
        <p className="animal-card__temperament">{animal.temperament}</p>
        <p className="animal-card__story">{animal.story}</p>
        <div className="animal-card__footer">
          <span className="animal-card__location"><MapPin size={14} /> Penedo, AL</span>
          {available ? <button className="animal-card__action" type="button" onClick={() => onAdopt(animal)}>Quero conhecer <ArrowUpRight size={16} /></button> : <span className="animal-card__unavailable">{animal.status === "Adotado" ? "Já encontrou um lar" : "Em boas mãos"}</span>}
        </div>
      </div>
    </article>
  );
}

export default AnimalCard;
