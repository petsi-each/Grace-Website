import React from "react";
import TeacherIcon from "./TeacherIcon";
import SchoolIcon from "./SchoolIcon";
import AssignmentIcon from "./AssignmentIcon";
import ApartmentIcon from "./ApartmentIcon";

export default function ComoGracePodeAjudar() {
    const emailGrace = "pet-si-each@usp.br";

    return (
        <section>
            <div>
                <img src="./home/grace-ajuda-1.png" alt="Membra do GRACE fazendo high five com uma criança" />
                <img src="./home/grace-ajuda-2.png" alt="Na frente, membra do GRACE monitorando duas alunas em atividade. Atrás, outra membra auxiliando outras alunas" />
            </div>
            <div>
                <h2>Como o <b>GRACE</b> pode me ajudar</h2>
                <div>
                    <span><TeacherIcon /></span>
                    <span>
                        <h3>Professores e outros grupos</h3>
                        <p>Veja nossa galeria de atividades para replicá-las com seu público!</p>
                    </span>
                </div>
                <div>
                    <span><SchoolIcon /></span>
                    <span>
                        <h3>Escolas</h3>
                        <p>Entre em contato para organizar uma atividade com suas alunas</p>
                    </span>
                </div>
                <div>
                    <span><AssignmentIcon /></span>
                    <span>
                        <h3>Estudantes de graduação</h3>
                        <p>Vire uma amiga do GRACE, junte-se à nossa comunidade e nos ajude a organizar atividades!</p>
                    </span>
                </div>
                <div>
                    <span><ApartmentIcon /></span>
                    <span>
                        <h3>Empresas</h3>
                        <p>Entre em contato para organizarmos uma atividade para as alunas de graduação da USP!</p>
                    </span>
                </div>
                <a href={`mailto:${emailGrace}`}>Entre em contato&nbsp;➡</a>
            </div>
        </section>
    );
}