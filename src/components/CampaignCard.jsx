function CampaignCard({ campaign }) {
  return (
    <article className="campaign-card">
      <img className="campaign-card__photo" src={campaign.photo} alt={campaign.title} />
      <div className="campaign-card__body">
        <h3>{campaign.title}</h3>
        <p>{campaign.description}</p>
        
        <a href={campaign.link} className="campaign-card__cta" target="_blank" rel="noopener noreferrer">
          Quero apadrinhar
        </a>
      </div>
    </article>
  );
}

export default CampaignCard;
