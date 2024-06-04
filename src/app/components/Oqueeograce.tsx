import ImageG from "@/components/ImageG";
import BalaoGrid from "./BalaoGrid";

export default function Oqueeograce() {

    const baloes = [
        {
            imagem:"/home/oficinasTecnicas.jpg",
            alternativo: "Estudantes em computadores",
            titulo:"Oficinas Técnicas",
            descricao:"Para ensino fundamental, médio e graduação"
        },
        {
            imagem:"/home/falaGrace.jpg",
            alternativo: "Graceane com um microfone",
            titulo:"Fala, GRACE!",
            descricao:"Podcast em conjunto com o PET-SI com mulheres na área"
        },
        {
            imagem:"/home/eventosDeTecnologia.jpg",
            alternativo: "Graceane apresentando projetos do GRACE na semana do curso",
            titulo:"Eventos de Tecnologia",
            descricao:"Ministrando palestras e oficinas abertas"
        },
        {
            imagem:"/home/rodasDeConversa.jpg",
            alternativo: "ALunas e professoras reunidas",
            titulo:"Rodas de Conversa",
            descricao:"Com o objetivo de acolher e conversar com as ingressantes"
        },
        {
            imagem:"/home/escapeRoom.jpg",
            alternativo: "Graceanes em frente à sala de escape",
            titulo:"Escape Room",
            descricao:"Desafios sobre ciência e tecnologia para que o grupo desvende"
        },
        {
            imagem:"/home/visitaAsEscolas.jpg",
            alternativo: "Graceanes em uma oficina com crianças do ensino fundamental",
            titulo:"Visitando às escolas",
            descricao:"Levando atividades para escolas da região da Zona Leste de SP"
        }
    ];

    return (
        <div className="my-16">
            <ImageG className="-mb-2 w-screen" src="/home/oqueeograceBGT.svg" alt=" " width="2" height="2"/> 
            <section className="bg-gradient-to-b from-vermelhoGrace to-[#feb581] py-4 px-32 flex flex-col items-center"> {/*TODO: (bug) A onda superior está sendo reinderizada com um pequeno espaço à esquerda pelo Firefox*/} 
                <h1 className="mb-12 font-Poppins font-bold text-brancoGrace text-4xl">O que fazemos?</h1>
                <p className="font-Poppins text-center text-brancoGrace text-lg">O GRACE é um projeto de extensão do curso de Sistemas de Informação (Escola de Artes, CIências e Humanidades) da Universidade de São Paulo. Nosso objetivo é <b>incentivar</b> e <b>manter</b> meninas na área da computação, a fim de diminuir a disparidade de gênero, por meio de atividades práticas e tecnológicas!</p>
                <BalaoGrid lista={baloes}/> 
            </section>
            <ImageG className="-mt-2 w-screen" src="/home/oqueeograceBGB.svg" alt=" " width="2" height="2"/>
        </div>
    );
}

