function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>Cada pata merece um lar.</h1>
        <p>
          Resgatamos, cuidamos e encontramos famílias para animais abandonados
          em Penedo. Conheça quem está esperando por você.
        </p>
        <a href="#catalogo" className="hero__cta">
          Ver animais disponíveis
        </a>
      </div>
      <img
        className="hero__image"
        src="https://observatorio3setor.org.br/wp-content/uploads/2021/07/AdobeStock_124563900.jpeg"
        alt="Cão resgatado pela ONG Patas de Alagoas"
      />
    </section>
  );
}

export default Hero;
