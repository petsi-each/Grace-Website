"use client"
import { ReactElement, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

interface MediaCardProps {
    src: string
    alt: string
    title: string
    sneak_peek_text: string
    link: string
}

const truncateText = (text: string, wordLimit: number): string => {
    const words: string[] = text.split(" ")
    if(words.length <= wordLimit)
        return text
    return words.slice(0, wordLimit).join(' ') + '...'
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)
        
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

function MediaCard(props: MediaCardProps) {
    const { width } = useWindowSize()

    const getWordLimit = (width: number): number => {
        if(width > 1200) return 20
        if(width > 992) return 15
        if(width > 768) return 12
        if(width > 576) return 8
        return 5
    }

    const wordLimit = getWordLimit(width)
    const truncatedText = truncateText(props.sneak_peek_text, wordLimit)

    return (
        <div className="flex items-center text-sm bg-vermelhoGrace rounded-xl">
            <img className="w-1/2 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl" src={props.src} alt={props.alt} />
            <div className="flex flex-col justify-items text-brancoGrace h-full w-full py-4 pr-4">
                <h1 className="font-bold">{props.title}</h1>
                <h2 className="w-5/6">{truncatedText}</h2>
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

interface TopicProps {
    title: string
    desc: string
    link_text: string
    link: string
    embed: ReactElement
}

function Topic(props: TopicProps) {
    return (
        <div className="mb-12">
            <h2 className="font-bold text-2xl text-cinzaGrace mb-8">{props.title}</h2>
            <p className="text-lg mb-8">{props.desc}</p>
            {/* TODO: Trocar pelo componente*/}
            <a
                href={props.link}
                className="font-semibold text-vermelhoGrace flex items-center mb-12">
                {props.link_text + " "} <FiArrowRight />
            </a>
            {props.embed}
        </div>
    )
}

export default function AprendaComOGrace() {
    return (
        <section className="grid grid-cols-2 gap-4 p-8">
            <div className="font-Poppins">
                <h1 className="text-4xl text-cinzaGrace font-bold mb-14">Aprenda com o <b className="text-vermelhoGrace font-bold">GRACE</b></h1>
                <Topic 
                    title="Conteudo Textual" 
                    desc="Quer aprender mais sobre tecnologia e a área de T.I. para mulheres? Leia nossos textos!"
                    link_text="Ver conteúdo"
                    // TODO: Mudar esse link para a aba de conteúdo do site novo (o link atual direciona para a home do site atual)
                    link="http://each.uspnet.usp.br/petsi/grace/"
                    embed= {
                        <MediaCard
                            src="/home/taxa_mulheres_curso.png"
                            alt="Taxa de mulheres nos cursos de graduação."
                            title="Infográfico – Mulheres nos cursos da EACH"
                            sneak_peek_text="Andando pelos corredores do campus, frequentando salas de aula e laboratórios, ou até mesmo durante o período de graduação à distância"
                            // TODO: Mudar esse link para o infográfico no site novo (o link atual direciona para o infográfico no site antigo)
                            link="http://each.uspnet.usp.br/petsi/grace/?p=773"
                        />
                    }
                />
                <Topic 
                    title="Podcast Fala, Grace!"
                    desc="Coloque o fone e escute o Fala, Grace!, no qual entrevistamos mulheres da área em parceria com PET-SI!"
                    link_text="Ver todos os episódios"
                    link="http://each.uspnet.usp.br/petsi/grace/?page_id=699"
                    embed={
                        /* a cor é setada automaticamente pela api do spotify :c */
                        <iframe
                            className="rounded-xl"
                            src="https://open.spotify.com/embed/episode/23pZonZukOAEu3gAhMqFlR?utm_source=generator"
                            width="100%"
                            height="152"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    }
                />
            </div>
            <div className="flex justify-center">
                <img src="/home/grace_hopper.png" className="object-cover" />
            </div>
        </section>
    )
}