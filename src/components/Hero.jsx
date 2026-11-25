import { ArrowRight, HeartHandshake, MapPin } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <span className="eyebrow"><MapPin size={15} aria-hidden="true" /> Penedo, Alagoas</span>
        <h1>Cada pata merece um <span>lar cheio de amor.</span></h1>
        <p>
          Conheça cães e gatos que esperam por uma família. Adotar transforma
          uma vida — e a sua também.
        </p>
        <div className="hero__actions">
          <a href="#/adocao" className="button button--primary">Conheça os animais <ArrowRight size={17} /></a>
          <a href="#/ajudar" className="button button--quiet"><HeartHandshake size={17} /> Quero ajudar</a>
        </div>
        <div className="hero__note"><span className="hero__note-mark">♥</span><span>Um novo começo pode começar com você.</span></div>
      </div>
      <div className="hero__visual" role="img" aria-label="Ilustração de um cão e um gato juntos">
        <div className="hero__photo-frame">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1000&q=85"
            alt="Cão e gato acolhidos juntos"
          />
          <div className="hero__photo-caption"><span>🐾</span><span>Amor que encontra um lar</span></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
