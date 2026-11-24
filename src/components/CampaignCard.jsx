import { ArrowUpRight, HeartHandshake } from "lucide-react";

function CampaignCard({ campaign }) {
  return (
    <article className="campaign-card">
      <div className="campaign-card__image-wrap">
        <img className="campaign-card__photo" src={campaign.photo} alt={`Imagem da campanha: ${campaign.title}`} loading="lazy" />
        <span className="campaign-card__icon"><HeartHandshake size={19} /></span>
      </div>
      <div className="campaign-card__body">
        <p className="eyebrow">Campanha solidária</p>
        <h3>{campaign.title}</h3>
        <p>{campaign.description}</p>
        <a href={campaign.link} className="campaign-card__cta" target="_blank" rel="noopener noreferrer">Apoiar campanha <ArrowUpRight size={16} /></a>
      </div>
    </article>
  );
}

export default CampaignCard;
