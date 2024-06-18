import React from "react";
import TeacherIcon from "./TeacherIcon";
import SchoolIcon from "./SchoolIcon";
import AssignmentIcon from "./AssignmentIcon";
import ApartmentIcon from "./ApartmentIcon";

export default function ComoGracePodeAjudar() {
    const emailGrace = "pet-si-each@usp.br";

    const options = [
        {
            title: "Professores e outros grupos",
            description: "Veja nossa galeria de atividades para replicá-las com seu público!",
            icon: <TeacherIcon />,
            color: "#E7442B"
        },
        {
            title: "Escolas",
            description: "Entre em contato para organizar uma atividade com suas alunas",
            icon: <SchoolIcon />,
            color: "#FA8632"
        },
        {
            title: "Estudantes de graduação",
            description: "Vire uma amiga do GRACE, junte-se à nossa comunidade e nos ajude a organizar atividades!",
            icon: <AssignmentIcon />,
            color: "#FFB884"
        },
        {
            title: "Empresas",
            description: "Entre em contato para organizarmos uma atividade para as alunas de graduação da USP!",
            icon: <ApartmentIcon />,
            color: "#E7442B"
        },
    ]

    return (
        <section className="grid grid-cols-2 gap-8">
            <div className="bg-green-500">
                {/* <img src="./home/grace-ajuda-1.png" alt="Membra do GRACE fazendo high five com uma criança" /> */}
                {/* <img src="./home/grace-ajuda-2.png" alt="Na frente, membra do GRACE monitorando duas alunas em atividade. Atrás, outra membra auxiliando outras alunas" /> */}
            </div>
            <div>
                <h2 className="font-Poppins text-4xl font-bold text-cinzaGrace">Como o <span className="text-vermelhoGrace">GRACE</span> pode me ajudar?</h2>

                {
                    options.map((option, idx) => (
                        <div>
                            <span>{option.icon}</span>
                            <span>
                                <h3>{option.title}</h3>
                                <p>{option.description}</p>
                            </span>
                        </div>
                    ))
                }


                <a href={`mailto:${emailGrace}`}>Entre em contato&nbsp;➡</a>
            </div>
        </section>
    );
}