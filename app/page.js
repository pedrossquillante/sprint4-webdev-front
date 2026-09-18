import Header from "../components/Header";
import Hero from "../components/Hero";
import PublicoAlvo from "../components/PublicoAlvo";
import Solucao from "../components/Solucao";
import Galeria from "../components/Galeria";
import Equipe from "../components/Equipe";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PublicoAlvo />
        <Solucao />
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

    