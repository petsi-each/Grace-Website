import React from "react";

import { IoSchoolSharp } from "react-icons/io5";
import { IoEaselSharp } from "react-icons/io5";
import { IoBusinessSharp } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import ImageG from "@/components/ImageG";


export default function ComoGracePodeAjudar() {
    const emailGrace = "pet-si-each@usp.br";

    const options = [
        {
            title: "Professores e outros grupos",
            description: "Veja nossa galeria de atividades para replicá-las com seu público!",
            icon: <IoEaselSharp size={34} />,
            color: "bg-vermelhoGrace"
        },
        {
            title: "Escolas",
            description: "Entre em contato para organizar uma atividade com suas alunas",
            icon: <IoSchoolSharp size={34}/>,
            color: "bg-laranjaGrace"
        },
        {
            title: "Estudantes de graduação",
            description: "Vire uma amiga do GRACE, junte-se à nossa comunidade e nos ajude a organizar atividades!",
            icon: <IoBookSharp size={34}/>,
            color: "bg-pessegoGrace"
        },
        {
            title: "Empresas",
            description: "Entre em contato para organizarmos uma atividade para as alunas de graduação da USP!",
            icon: <IoBusinessSharp size={34}/>,
            color: "bg-vermelhoGrace"
        },
    ]

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8  text-cinzaGrace items-center p-8 md:px-16  lg:p-32">
            <div className="flex items-center justify-center mb-18 md:mb-0">
                <ImageG src="/home/grace-ajuda.png" width={489} height={643} alt="Membras do GRACE interagindo com crianças nas atividades" />
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center md:text-left mb-18 md:mb-0">Como o <span className="text-vermelhoGrace">GRACE</span> pode me ajudar?</h2>
                <div className="space-y-16 my-8 md:space-y-8">
                {
                    options.map((option, idx) => (
                        <article className="flex  flex-col items-center text-center md:flex-row md:space-x-4 md:text-left" key={idx}>
                            <span className={`${option.color} drop-shadow-lg rounded-full h-min mb-4 w-min min-h-16 min-w-16 flex items-center justify-center text-white md:mb-0`}>{option.icon}</span>
                            <span>
                                <h3 className="font-bold text-2xl mb-2 md:mb-0">{option.title}</h3>
                                <p>{option.description}</p>
                            </span>
                        </article>
                    ))
                }
                </div>

                {/* TODO: TROCAR PELO COMPONENTE DE BOTÃO SECUNDÁRIO */}
                <a className="mt-12 flex items-center justify-center text-vermelhoGrace font-medium rounded-lg text-center drop-shadow py-2 px-6 transition-all hover:drop-shadow-xl transition-all duration-500 md:justify-end" href={`mailto:${emailGrace}`}>Entre em contato <FiArrowRight size={16}/></a>
            </div>
        </section>
    );
}