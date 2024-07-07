import Hero from "./components/Hero";
import Oqueeograce from "./components/Oqueeograce";
import ComoGracePodeAjudar from "./components/ComoGracePodeAjudar";
import GaleriaDeAtividades from "./components/GaleriaDeAtividades";

import AprendaComOGrace from './components/AprendaComOGrace'

export default function Home() {
  return (
    <main>
      <GaleriaDeAtividades />
      {/* Adicionar componentes da landingPage aqui aqui */}
      <AprendaComOGrace />
      <Hero />
      <Oqueeograce />
      <ComoGracePodeAjudar />
    </main>
  );
}