'use client'

import LeftButton from "./LeftButton";
import ImageG from "@/components/ImageG";
/*import heroImage from "/images/hero-image.png";*/
import SecondaryButton from "../../../components/SecondaryButton";
/*import patternXCinza from "/images/pattern-x-cinza.png";
import patternXBranco from "/images/pattern-x-branco.png";
import patternXLaranja from "/images/pattern-x-laranja.png";*/

export default function Hero(){
    return (
        <section className="flex place-content-center relative">
            
            {/* 2 colunas*/}
            <div className="grid grid-cols-8 gap-0 space-x-8 py-10">

                <div className="col-span-5 content-center">

                    <div className="max-w-min">
                        
                        {/* Garotas em Computação e Empreendedorismo*/}
                        <h1 className="font-Poppins font-bold text-6xl text-cinzaGrace max-w-max">
                            <span className="block">Garotas em</span>
                            <span className="block"><span className="text-vermelhoGrace">Computação </span>e</span>
                            <span className="block">Empreendedorismo</span>
                        </h1>

                        {/* Descrição GRACE */}
                         <p className="pt-5 pb-9 font-medium leading-5">O GRACE tem como objetivo impulsionar a participação feminina na Computação e no Empreendedorismo desde o Ensino Fundamental até a Graduação.</p>

                    </div>

                    <span>
                        <span>
                            {/* Botao conheça o GRACE*/}
                            <LeftButton onClick={() => window.open("https://www.instagram.com/graceusp/", "_blank")} title={"Conheça o GRACE"} />
                        </span>

                        <span>
                            {/* Botao galeria de atividades*/}
                            <SecondaryButton onClick={() => window.open("https://www.instagram.com/graceusp/", "_blank")} title={"Galeria de Atividades ->"} />
                        </span>

                    </span>

                    

                </div>

                {/* Imagem da mayu */}
                <div className="inline col-span-3 w-full static">
                    <ImageG className="w-96" src="/home/mayu-hero.png" height={0} width={0} alt="Menina sorrindo testando um circuito de Arduino"/>
                </div>
                
            </div>

            <div className="absolute top-40 left-0 -z-40">
                <ImageG className="w-36" src="/home/pattern-x-cinza.png" height={0} width={0} alt="Imagem decorativa de fundo"/>
            </div>

            <div className="absolute bottom-0 right-0">
                <ImageG className="w-72" src="/home/pattern-x-branco.png" height={110} width={110} alt="Imagem decorativa de fundo"/>
            </div>

            <div className="absolute -top-20 right-1 -z-40">
                <ImageG className="w-52" src="/home/pattern-x-laranja.png" height={0} width={0} alt="Imagem decorativa de fundo"/>
            </div>
            
        </section>
    );
}                                                                                                                               