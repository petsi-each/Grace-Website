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
        <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-2 md:gri-cols-3 gap-x-3 md:gap-x-5 gap-y-2 md:gap-y-4"> {/*número de colunas não está sendo corretamente definido para os diferentes tamanhos de tela --> todos estão com duas colunas*/}
            {
                props.lista.map((balao) => (
                    <div>
                        <article className="flex flex-col p-2 md:p-4 lg:p-6 w-28 md:w-52 lg:w-72 h-28 md:h-52 lg:h-72 bg-brancoGrace rounded-3xl shadow-md"> {/*rever o tamanho dos balões!*/}{/*definir breaking points para as tags inferiores:*/}
                            <ImageG className="w-60 h-40 rounded-3xl" src={balao.imagem} alt={balao.alternativo} width="2" height="2"/>
                            <h2 className="font-Poppins font-bold text-vermelhoGrace text-lg flex justify-center m-2">{balao.titulo}</h2>
                            <p className="font-Poppins text-center text-black text-xs">{balao.descricao}</p>
                        </article>
                    </div>
                ))
            }
        {/*TODO: ajustes de responsividade precisam ser adicionados*/}
        </div>
    );
}