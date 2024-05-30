'use client'
import Image from "next/image";

import { FiArrowRight } from "react-icons/fi";
import { SiArduino } from "react-icons/si";

import PrimaryButton from "@/components/PrimaryButton";

export default function GaleriaDeAtividades() {
    const articles = [
        {
            titulo: "Piano de Banana com Arduino",
            icon: <SiArduino size={80} />,
            cor: "bg-vermelhoGrace",
            descricao: "Oficina de duas horas para o Ensino Médio e Graduação",
            link: "#"
        },
        {
            titulo: "Detector de mentiras com Arduino",
            icon: <SiArduino size={80} />,
            cor: "bg-laranjaGrace",
            descricao: "Oficina de duas horas para o Ensino Médio e Graduação",
            link: "#"
        },
        {
            titulo: "Pixels",
            icon: <SiArduino size={80} />,
            cor: "bg-pessegoGrace",
            descricao: "Oficina de computação desplugada para o Ensino Fundamental",
            link: "#"
        }
    ]

    return (
        <section className="font-Poppins text-cinzaGrace flex flex-col items-center justify-center text-center relative">

            <div className="px-40 py-16">
                <h1 className="text-4xl pb-8 font-bold">Galeria de Atividades</h1>
                <p>Gostaria de replicar as oficinas, palestras e atividades do GRACE na sua comunidade? Escolha sua atividade favorita e aproveite seu documento de projeto!</p>
            </div>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-8 px-8">
                {
                    articles.map((article, idx) => (
                        <article key={idx} className="flex flex-col items-center justify-center">
                            <div className={`m-4 drop-shadow-xl rounded-full h-32 w-32 flex items-center justify-center text-white ${article.cor}`}>
                                {article.icon}
                            </div>
                            <h2 className="font-bold text-xl"> {article.titulo} </h2>
                            <p className="text-base pb-2"> {article.descricao} </p>
                            <a className="drop-shadow text-base text-vermelhoGrace hover:font-semibold flex items-center justify-center space-x-2" href={article.link}> <p>Projeto</p> <FiArrowRight /> </a>
                        </article>
                    ))
                }
            </section>

            <div className="pt-16">
                <PrimaryButton onClick={() => window.open("http://each.uspnet.usp.br/petsi/grace/?page_id=96", "_blank")} title={"Veja todas nossas atividades"} />
            </div>
            
            <Image
                    src="/x.svg"
                    width={125}
                    height={40}
                    alt="background"
                    className="opacity-60 -z-40 absolute top-0 -right-12"
                />

            <Image
                    src="/x.svg"
                    width={125}
                    height={40}
                    alt="background"
                    className="opacity-40 -z-40 absolute -bottom-16 -left-12"
                />

        </section>
    );
}