export default function ComoGracePodeAjudar() {
    const emailGrace = "pet-si-each@usp.br";

    return (
        <section>
            <h2>Como o <b>Grace</b> pode me ajudar</h2>
            <h3>Professores e outros grupos</h3>
            <p>Veja nossa galeria de atividades para replicá-las com seu público!</p>
            <h3>Escolas</h3>
            <p>Entre em contato para organizar uma atividade com suas alunas</p>
            <h3>Estudantes de graduação</h3>
            <p>Vire uma amiga do GRACE, junte-se à nossa comunidade e nos ajude a organizar atividades!</p>
            <h3>Empresas</h3>
            <p>Entre em contato para organizarmos uma atividade para as alunas de graduação da USP!</p>
            <a href={`mailto:${emailGrace}`}>Entre em contato&nbsp;➡</a>
        </section>
    );
}