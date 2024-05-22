'use client'

export default function Oqueeograce() {
    return (
        <section className="mt-16 p-24 bg-[url('/home/oqueeograceFundo.svg')] bg-no-repeat bg-cover w-full h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-Poppins font-bold text-brancoGrace text-3xl m-8">O que fazemos?</h1> 
                <p className="font-Poppins text-center text-brancoGrace text-lg">O GRACE é um projeto de extensão do curso de Sistemas de Informação (Escola de Artes, CIências e Humanidades) da Universidade de São Paulo. Nosso objetivo é <b>incentivar</b> e <b>manter</b> meninas na área da computação, a fim de diminuir a disparidade de gênero, por meio de atividades práticas e tecnológicas!</p>
                {/*adicionar as lindjas fotenhas!*/}
            </div>
        </section>
    );
}