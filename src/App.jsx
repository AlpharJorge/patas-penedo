import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AnimalCatalog from "./components/AnimalCatalog";
import Campaigns from "./components/Campaigns";
import HowToHelp from "./components/HowToHelp";
import Footer from "./components/Footer";
import "./App.css";

function readRoute() {
  return window.location.hash.replace(/^#/, "") || "/";
}

function App() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(readRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  const page = {
    "/": (
      <>
        <Hero />
        <About />
      </>
    ),
    "/sobre": <About />,
    "/adocao": <AnimalCatalog />,
    "/campanhas": <Campaigns />,
    "/ajudar": <HowToHelp />,
    "/contato": <Footer contactPage />,
  }[route] ?? <Hero />;

  return (
    <div className="app">
      <Header activeRoute={route} />
      <main key={route} className="page-content">
        {page}
      </main>
      {route !== "/contato" && <Footer />}
    </div>
  );
}

export default App;
