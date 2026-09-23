import CampaignCard from "./CampaignCard";
import campaigns from "../data/campaigns";

function Campaigns() {
  return (
    <section id="campanhas" className="campaigns">
      <h2>Campanhas de apadrinhamento e doação</h2>
      <p className="campaigns__intro">
        Nem todo mundo pode adotar, mas qualquer contribuição ajuda a manter o
        tratamento e o dia a dia dos animais resgatados.
      </p>
      <div className="campaigns__grid">
        {campaigns.map((c) => (
          <CampaignCard key={c.id} campaign={c} />
        ))}
      </div>
    </section>
  );
}

export default Campaigns;
