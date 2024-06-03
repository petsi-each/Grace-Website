import ImageG from "@/components/ImageG";

interface Balao {
    imagem: string,
    alternativo: string,
    titulo: string,
    descricao: string
}

interface BalaoList {
    lista: Balao[]
}

export default function BalaoGrid(props: BalaoList) {
    return (
        <div className="mt-16 grid grid-cols-3 gap-x-5 gap-y-4"> 
            {
                props.lista.map((balao) => (
                    <div>
                        <article className="flex flex-col p-6 w-72 h-72 bg-brancoGrace rounded-3xl shadow-md"> 
                            <ImageG className="w-60 h-40 rounded-3xl" src={balao.imagem} alt={balao.alternativo} width="2" height="2"/>
                            <h2 className="font-Poppins font-bold text-vermelhoGrace text-lg flex justify-center m-2">{balao.titulo}</h2>
                            <p className="font-Poppins text-center text-black text-xs">{balao.descricao}</p>
                        </article>
                    </div>
                ))
            }
        TODO: ajustes de responsividade precisam ser adicionados
        </div>
    );
}