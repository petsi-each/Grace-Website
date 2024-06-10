import GaleriaDeAtividades from "./components/GaleriaDeAtividades";

import AprendaComOGrace from '@/app/components/AprendaComOGrace'

export default function Home() {
  return (
    <main>
    <GaleriaDeAtividades />
      {/* Adicionar componentes da landingPage aqui aqui */}
      <AprendaComOGrace />
    </main>
  );
}