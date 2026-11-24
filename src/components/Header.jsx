import { Heart, House, Info, PawPrint, HandHeart, Mail } from "lucide-react";

const links = [
  { href: "#/", label: "Início", icon: House },
  { href: "#/sobre", label: "Sobre", icon: Info },
  { href: "#/adocao", label: "Adote", icon: PawPrint },
  { href: "#/campanhas", label: "Doe", icon: Heart },
  { href: "#/ajudar", label: "Como ajudar", icon: HandHeart },
  { href: "#/contato", label: "Contato", icon: Mail },
];

function Header({ activeRoute }) {
  return (
    <header className="header">
      <a className="header__brand" href="#/" aria-label="Patas de Penedo, início">
        <span className="header__mark"><PawPrint aria-hidden="true" /></span>
        <span className="header__title">Patas <span>de Penedo</span></span>
      </a>
      <nav className="header__nav" aria-label="Navegação principal">
        {links.map(({ href, label, icon: Icon }) => {
          const route = href.slice(1) || "/";
          return (
            <a key={href} href={href} aria-current={activeRoute === route ? "page" : undefined}>
              <Icon size={17} aria-hidden="true" />
              <span>{label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
