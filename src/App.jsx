import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AnimalCatalog from "./components/AnimalCatalog";
import Campaigns from "./components/Campaigns";
import HowToHelp from "./components/HowToHelp";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <AnimalCatalog />
        <Campaigns />
        <HowToHelp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
