import Hero from "@/app/components/hero-section/Hero";
import Oqueeograce from "./components/Oqueeograce";
import ComoGracePodeAjudar from "./components/ComoGracePodeAjudar";
import GaleriaDeAtividades from "./components/GaleriaDeAtividades";

export default function Home() {
  return (
    <main>
      <Hero />
      <Oqueeograce />
      <ComoGracePodeAjudar /> 
      <GaleriaDeAtividades />
    </main>
  );
}