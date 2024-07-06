import Hero from "@/app/components/hero-section/Hero";
import ComoGracePodeAjudar from "./components/ComoGracePodeAjudar";
import GaleriaDeAtividades from "./components/GaleriaDeAtividades";

export default function Home() {
  return (
    <main>
      {/* Adicionar componentes da landingPage aqui aqui */}

      <Hero />
      <ComoGracePodeAjudar /> 
      <GaleriaDeAtividades />
    </main>
  );
}