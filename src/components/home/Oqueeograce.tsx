'use client'

import Balao from "./componentesAuxiliares/Balao";

export default function Oqueeograce() {
    return (
        <section className="mt-16 p-24 bg-[url('/home/oqueeograceFundo.svg')] bg-no-repeat bg-cover w-full h-screen flex items-center justify-center"> {/*ainda preciso resolver a questão da altura da imagem */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-Poppins font-bold text-brancoGrace text-3xl m-8">O que fazemos?</h1>
                <p className="font-Poppins text-center text-brancoGrace text-lg">O GRACE é um projeto de extensão do curso de Sistemas de Informação (Escola de Artes, CIências e Humanidades) da Universidade de São Paulo. Nosso objetivo é <b>incentivar</b> e <b>manter</b> meninas na área da computação, a fim de diminuir a disparidade de gênero, por meio de atividades práticas e tecnológicas!</p>
                {/*adicionar as lindjas fotenhas!*/}
                <div className="mt-16 grid grid-cols-3 gap-x-5 gap-y-4"> {/*não me preocupei com responsividade mas PRECISAMOS*/}
                    
                    <div>
                        <Balao imagem="/home/oficinasTecnicas.svg" alternativo="estudantes em computadores" titulo="Oficinas Técnicas" descricao="Para ensino fundamental, médio e graduação"/>
                    </div>
                
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                </div>
            </div>
        </section>
    );
}

