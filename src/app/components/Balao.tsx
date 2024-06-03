import ImageG from "@/components/ImageG";

interface BalaoObjeto {
    imagem: string,
    alternativo: string,
    titulo: string,
    descricao: string
}

interface BaloesInt {
    lista: BalaoObjeto[],
}

export default function Balao(props: BaloesInt) {
    return (
        <div className="mt-16 grid grid-cols-3 gap-x-5 gap-y-4"> {/*não me preocupei com responsividade mas PRECISAMOS*/}
            {
                props.lista.map((balao) => (
                    <div>
                        <article className="flex flex-col p-6 w-72 h-72 bg-brancoGrace rounded-3xl shadow-md"> {/*queria ter usado o justify center aqui mas nao deu certo com a imagem! */}
                            <ImageG className="w-60 h-40 rounded-3xl" src={balao.imagem} alt={balao.alternativo} width="2" height="2"/>
                            <h2 className="font-Poppins font-bold text-vermelhoGrace text-lg flex justify-center m-2">{balao.titulo}</h2>
                            <p className="font-Poppins text-center text-black text-xs">{balao.descricao}</p>
                        </article>
                    </div>
                ))
            }
        </div>
    );
}