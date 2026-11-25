import { ArrowRight, House, UsersRound } from "lucide-react";

function About() {
  return (
    <section id="sobre" className="about section-shell">
      <div className="about__visual" aria-hidden="true">
        <div className="about__shape"><span className="about__paw">🐾</span></div>
        <div className="about__caption"><strong>Cuidado de perto.</strong><span>Uma história de cada vez.</span></div>
      </div>
      <div className="about__text">
        <p className="eyebrow">Quem somos</p>
        <h2>Uma rede de cuidado, feita por pessoas.</h2>
        <p>
          A Patas de Penedo é um projeto de adoção responsável que aproxima
          animais resgatados de pessoas prontas para acolhê-los. Voluntários
          ajudam com lares temporários, cuidados e divulgação.
        </p>
        <p>
          Reunimos histórias, campanhas e formas de participar em um só lugar
          para que cada animal tenha mais chances de encontrar uma família.
        </p>
        <div className="about__values">
          <div><span><House size={19} /></span><strong>Acolhimento</strong><small>Lares temporários e seguros</small></div>
          <div><span><UsersRound size={19} /></span><strong>Comunidade</strong><small>Voluntários em rede</small></div>
        </div>
        <a className="text-link" href="#/ajudar">Descubra como participar <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}

export default About;
