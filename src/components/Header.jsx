function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">🐾</span>
        <span className="header__title">Patas de Penedo</span>
      </div>
      <nav className="header__nav">
        <a href="#sobre">Sobre</a>
        <a href="#catalogo">Adote</a>
        <a href="#campanhas">Doe</a>
        <a href="#ajudar">Como ajudar</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
