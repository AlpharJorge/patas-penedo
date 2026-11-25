import { ArrowUpRight, Camera, Heart, PawPrint } from "lucide-react";

function Footer({ contactPage = false }) {
  return (
    <footer id="contato" className={`footer${contactPage ? " footer--contact-page" : ""}`}>
      {contactPage && (
        <div className="contact-intro section-shell">
          <p className="eyebrow">Fale com a gente</p>
          <h1>Vamos conversar sobre uma nova história?</h1>
          <p>Quer saber sobre adoção, oferecer um lar temporário ou somar como voluntário? Entre em contato pelas nossas redes.</p>
          <a className="button button--primary" href="https://www.instagram.com/patasdepenedo/" target="_blank" rel="noreferrer">Falar pelo Instagram <ArrowUpRight size={17} /></a>
        </div>
      )}
      <div className="footer__inner">
        <div className="footer__brand"><span className="footer__logo"><PawPrint size={20} /></span><div><strong>Patas de Penedo</strong><span>Adoção responsável em Penedo, AL</span></div></div>
        <nav className="footer__nav" aria-label="Links do rodapé"><a href="#/sobre">Sobre</a><a href="#/adocao">Animais</a><a href="#/campanhas">Campanhas</a><a href="#/ajudar">Como ajudar</a></nav>
        
        
      </div>
    </footer>
  );
}

export default Footer;
