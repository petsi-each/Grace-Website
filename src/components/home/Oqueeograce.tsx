
import Balao from "./componentesAuxiliares/Balao";

export default function Oqueeograce() {
    return (
        <section className="my-16 grid">
            <img src="/home/oqueeograceFundo.svg" className="col-start-1 row-start-1 w-full" />
            <div className="p-32 col-start-1 row-start-1 flex flex-col items-center"> {/*preferi sem justify-center*/}
                <h1 className="m-8 font-Poppins font-bold text-brancoGrace text-3xl">O que fazemos?</h1>
                <p className="font-Poppins text-center text-brancoGrace text-lg">O GRACE é um projeto de extensão do curso de Sistemas de Informação (Escola de Artes, CIências e Humanidades) da Universidade de São Paulo. Nosso objetivo é <b>incentivar</b> e <b>manter</b> meninas na área da computação, a fim de diminuir a disparidade de gênero, por meio de atividades práticas e tecnológicas!</p>
                <div className="mt-16 grid grid-cols-3 gap-x-5 gap-y-4"> {/*não me preocupei com responsividade mas PRECISAMOS*/}
                    <div>
                        <Balao imagem="/home/oficinasTecnicas.svg" alternativo="Estudantes em computadores" titulo="Oficinas Técnicas" descricao="Para ensino fundamental, médio e graduação" />
                    </div>
                    <div>
                        <Balao imagem="/home/falaGrace.svg" alternativo="Graceane com um microfone" titulo="Fala, GRACE!" descricao="Podcast em conjunto com PET-SI com mulheres da área" />
                    </div>
                    <div>
                        <Balao imagem="/home/eventosDeTecnologia.svg" alternativo="Graceane apresentando projetos do GRACE na semana do curso" titulo="Eventos de Tecnologia" descricao="Ministrando palestras e oficinas abertas" />
                    </div>
                    <div>
                        <Balao imagem="/home/rodasDeConversa.svg" alternativo="Alunas e professoras reunidas" titulo="Rodas de Conversa" descricao="Com o objetivo de acolher e conversar com as ingressantes" />
                    </div>
                    <div>
                        <Balao imagem="/home/escapeRoom.svg" alternativo="Graceanes em frente à sala de escape" titulo="Escape Room" descricao="Desafios sobre ciência e tecnologia para que o grupo desvende" />
                    </div>
                    <div>
                        <Balao imagem="/home/visitaAsEscolas.svg" alternativo="Graceanes em uma oficina com crianças do ensino fundamental" titulo="Visita às escolas" descricao="Levando atividades para escolas da região da Zona Leste de SP" />
                    </div>
                </div>
            </div>
        </section>
    );
}

