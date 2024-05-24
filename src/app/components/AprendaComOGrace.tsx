import { FiArrowRight } from "react-icons/fi";

interface MidiaCardProps {
    src: string
    alt: string
}

function MidiaCard(props: MidiaCardProps) {
    return (
        <div className="flex items-center text-sm bg-vermelhoGrace rounded-xl">
            <img src={props.src} alt={props.alt}/>
            <div className="flex-col justify-items text-brancoGrace">
                <h1 className="font-bold">Infográfico – Mulheres nos cursos da EACH</h1>
                <h2 className="">Andando pelos corredores do campus, frequentando salas de aula e  laboratórios, ou até mesmo durante o período de graduação à distância...</h2>
                {/* todo: colocar botão e generalizar as props*/}
            </div>
        </div>
    )
}

export default function AprendaComOGrace() {
    return (
        <div className="font-Poppins ">
            <h1 className="text-4xl text-cinzaGrace mb-8">Aprenda com o <b className="text-vermelhoGrace font-bold">GRACE</b></h1>
            <h2 className="font-bold text-2xl text-cinzaGrace mb-4">Conteudo Textual</h2>
            <p className="text-lg">Quer aprender mais sobre tecnologia e a área de T.I. para mulheres? Leia nossos textos!</p> 
            {/* TODO: Trocar pelo componente*/}
            <a href="http://each.uspnet.usp.br/petsi/grace/?page_id=106" className="font-bold text-vermelhoGrace flex items-center ">Ver conteúdo <FiArrowRight /> </a>
            <MidiaCard src="/home/taxa_mulheres_curso.png" alt="Taxa de mulheres nos cursos de graduação."/>
        </div>
    )
}