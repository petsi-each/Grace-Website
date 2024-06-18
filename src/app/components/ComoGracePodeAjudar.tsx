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
        <section className="grid grid-cols-2 gap-8 font-Poppins text-cinzaGrace">
            <div className="flex flex-col items-center justify-center">
                <ImageG className="rounded-md z-10 -ml-36" src="/home/grace-ajuda-1.png" width={395} height={526} alt="Membra do GRACE fazendo high five com uma criança" />
                <ImageG className="rounded-md z-20 -mt-48 -mr-48" src="/home/grace-ajuda-2.png" width={296} height={303} alt="Na frente, membra do GRACE monitorando duas alunas em atividade. Atrás, outra membra auxiliando outras alunas" />
            </div>
            <div>
                <h2 className="text-4xl font-bold">Como o <span className="text-vermelhoGrace">GRACE</span> pode me ajudar?</h2>
                <div className="space-y-8 my-8">
                {
                    options.map((option, idx) => (
                        <article className="flex items-center space-x-4" key={idx}>
                            <span className={`${option.color} drop-shadow-lg rounded-full h-min w-min min-h-16 min-w-16 flex items-center justify-center text-white`}>{option.icon}</span>
                            <span>
                                <h3 className="font-bold text-2xl">{option.title}</h3>
                                <p>{option.description}</p>
                            </span>
                        </article>
                    ))
                }
                </div>

                {/* TODO: TROCAR PELO COMPONENTE DE BOTÃO SECUNDÁRIO */}
                <a className="mt-12 flex items-center justify-end text-vermelhoGrace font-medium rounded-lg text-center drop-shadow py-2 px-6 transition-all hover:drop-shadow-xl transition-all duration-500" href={`mailto:${emailGrace}`}>Entre em contato <FiArrowRight size={16}/></a>
            </div>
        </section>
    );
}