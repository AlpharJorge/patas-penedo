import { HeartHandshake } from "lucide-react";
import CampaignCard from "./CampaignCard";
import campaigns from "../data/campaigns";

function Campaigns() {
  return (
    <section id="campanhas" className="campaigns section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Toda ajuda conta</p>
          <h2>Juntos, podemos cuidar de mais vidas.</h2>
          <p className="section-heading__copy">Apoie uma campanha e ajude a manter os cuidados dos animais resgatados.</p>
        </div>
        <span className="campaigns__stamp"><HeartHandshake size={24} /> Cuidado que<br />vira futuro</span>
      </div>
      <div className="campaigns__grid">
        {campaigns.map((campaign) => <CampaignCard key={campaign.id} campaign={campaign} />)}
      </div>
    </section>
  );
}

export default Campaigns;
