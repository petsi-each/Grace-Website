'use cliente'

interface Balaopropos{
    imagem: string,
    alternativo: string,
    titulo: string,
    descricao: string,
}

export default function Balao({ imagem, alternativo, titulo, descricao }:Balaopropos) {
    return (
        <div className="flex flex-col p-6 w-72 h-72 bg-brancoGrace rounded-3xl shadow-md"> {/*queria ter usado o justify center aqui mas nao deu certo com a imagem! */}
            <img className="w-60 h-40 rounded-3xl" src={imagem} alt={alternativo}/>
            <h2 className="font-Poppins font-bold text-vermelhoGrace text-lg flex justify-center m-2">{titulo}</h2>
            <p className="font-Poppins text-center text-black text-xs">{descricao}</p>
        </div>
    );
}