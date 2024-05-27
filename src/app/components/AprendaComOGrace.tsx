import { FiArrowRight } from "react-icons/fi";

interface MidiaCardProps {
    src: string
    alt: string
    title: string
    sneak_peek_text: string
    link: string
}

function MidiaCard(props: MidiaCardProps) {
    return (
        <div className="flex items-center text-sm bg-vermelhoGrace rounded-xl">
            <img src={props.src} alt={props.alt} />
            <div className="flex flex-col justify-items text-brancoGrace h-full w-full">
                <h1 className="font-bold">{props.title}</h1>
                <h2 className="w-5/6">{props.sneak_peek_text + "..."}</h2>
            <a 
                href={props.link}
                className="flex items-center self-end mr-8 text-brancoGrace font-semibold"
            >
                    Ler tudo <FiArrowRight />
            </a>
            </div>
        </div>
    )
}

const link = "http://each.uspnet.usp.br/petsi/grace/?page_id=106"

export default function AprendaComOGrace() {
    return (
        <div className="font-Poppins">
            <h1 className="text-4xl text-cinzaGrace font-bold mb-8">Aprenda com o <b className="text-vermelhoGrace font-bold">GRACE</b></h1>
            <h2 className="font-bold text-2xl text-cinzaGrace mb-4">Conteudo Textual</h2>
            <p className="text-lg">Quer aprender mais sobre tecnologia e a área de T.I. para mulheres? Leia nossos textos!</p>
            {/* TODO: Trocar pelo componente*/}
            <a
                href={link}
                className="font-semibold text-vermelhoGrace flex items-center ">
                    Ver conteúdo <FiArrowRight />
            </a>
            <MidiaCard
                src="/home/taxa_mulheres_curso.png"
                alt="Taxa de mulheres nos cursos de graduação."
                title="Infográfico – Mulheres nos cursos da EACH"
                sneak_peek_text="Andando pelos corredores do campus, frequentando salas de aula e  laboratórios, ou até mesmo durante o período de graduação à distância"
                link={link}
            />
            <h2 className="font-bold text-2xl text-cinzaGrace mb-4">Podcast Fala, Grace!</h2>
            <p className="text-lg">Coloque o fone e escute o Fala, Grace!, no qual entrevistamos mulheres da área em parceria com PET-SI!</p>
            <a href="http://each.uspnet.usp.br/petsi/grace/?page_id=699"></a>
            {/* a cor é setada automaticamente pela api do spotify :c */}
            <iframe className="rounded-xl" src="https://open.spotify.com/embed/episode/23pZonZukOAEu3gAhMqFlR?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    )
}