import { ArrowRight, House, Megaphone, PackageOpen, UsersRound } from "lucide-react";

const ways = [
  { icon: House, title: "Ofereça um lar temporário", text: "Acolha um animal resgatado enquanto ele espera por uma família definitiva." },
  { icon: UsersRound, title: "Seja voluntário", text: "Ajude em resgates, transporte, eventos ou no cuidado diário." },
  { icon: PackageOpen, title: "Doe itens essenciais", text: "Ração, areia higiênica e produtos de limpeza fazem diferença." },
  { icon: Megaphone, title: "Compartilhe", text: "Divulgue os animais e as campanhas para alcançar mais pessoas." },
];

function HowToHelp() {
  return (
    <section id="ajudar" className="how-to-help section-shell">
      <div className="section-heading section-heading--center">
        <p className="eyebrow">Faça parte da mudança</p>
        <h2>Existem muitas formas de ajudar.</h2>
        <p className="section-heading__copy">Cada gesto ajuda a criar um caminho mais seguro até um novo lar.</p>
      </div>
      <div className="how-to-help__grid">
        {ways.map(({ icon: Icon, title, text }, index) => (
          <article className="help-item" key={title}>
            <span className="help-item__number">0{index + 1}</span>
            <span className="help-item__icon"><Icon size={24} aria-hidden="true" /></span>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
      <a className="button button--primary" href="#/contato">Quero participar <ArrowRight size={17} /></a>
    </section>
  );
}

export default HowToHelp;
