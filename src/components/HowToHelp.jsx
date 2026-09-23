const ways = [
  {
    icon: "🏠",
    title: "Seja um lar temporário",
    text: "Acolha um animal resgatado até que ele encontre uma família definitiva.",
  },
  {
    icon: "🙌",
    title: "Seja voluntário",
    text: "Ajude em resgates, divulgação, transporte ou eventos de adoção.",
  },
  {
    icon: "🥫",
    title: "Doe ração e insumos",
    text: "Ração, areia higiênica e produtos de limpeza fazem muita diferença.",
  },
  {
    icon: "📣",
    title: "Divulgue",
    text: "Compartilhe o site e as redes sociais para ampliar o alcance das adoções.",
  },
];

function HowToHelp() {
  return (
    <section id="ajudar" className="how-to-help">
      <h2>Como ajudar</h2>
      <div className="how-to-help__grid">
        {ways.map((w) => (
          <div className="help-item" key={w.title}>
            <span className="help-item__icon">{w.icon}</span>
            <h3>{w.title}</h3>
            <p>{w.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowToHelp;
