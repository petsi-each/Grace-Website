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
        <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-5 gap-y-3 lg:gap-y-4"> 
            {
                props.lista.map((balao,idx) => (
                    <div key={idx}>
                        <article className="flex flex-col p-4 xl:p-6 w-60 xl:w-72 h-60 xl:h-72 bg-brancoGrace rounded-2xl xl:rounded-3xl shadow-md"> {/*breaking points extras para telas xl*/}
                            <div className="w-52 xl:w-60 h-52 relative">
                                <ImageG className="rounded-2xl xl:rounded-3xl flex justify-center" src={balao.imagem} alt={balao.alternativo} fill={true}/>
                            </div>
                            <h2 className=" font-bold text-vermelhoGrace text-lg flex justify-center my-0.5 xl:my-2">{balao.titulo}</h2>
                            <p className=" text-center text-black text-xs">{balao.descricao}</p>
                        </article>
                    </div>
                ))
            }
        </div>
    );
}