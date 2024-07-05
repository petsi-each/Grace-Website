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
        <section className="flex place-content-center h-dvg">

            <div className="grid grid-cols-8 gap-0 space-x-8 py-10">

                <div className="col-span-5 content-center">

                    <div className="max-w-min">
                        
                        {/* Garotas em Computação e Empreendedorismo*/}
                        <h1 className="font-Poppins font-bold text-7xl text-cinzaGrace max-w-max">
                            <em className="bg-blue">Garotas em</em>
                            <div><span className="text-vermelhoGrace">Computação</span> e</div>
                            <div>Empreendedorismo</div>
                        </h1>

                        {/* Descrição GRACE */}
                        <p className="pt-6 pb-9 font-normal leading-5">O GRACE tem como objetivo impulsionar a participação feminina na Computação e no Empreendedorismo desde o Ensino Fundamental até a Graduação.</p>

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

                        <div>
                        <ImageG src="/home/pattern-x-cinza.png" height={0} width={0} alt="Imagem decorativa de fundo"/>
                        </div>
                    </span>

                </div>

                {/* Imagem da mayu */}
                <div className="inline col-span-3 max-w-fit static">
                    <ImageG src="/home/hero-image.png" height={0} width={0} alt="Menina sorrindo testando um circuito de Arduino"/>

                    <div className="absolute">
                        <ImageG className="w-10 h-10" src="/home/pattern-x-branco.png" height={110} width={110} alt="Imagem decorativa de fundo"/>
                    </div>

                    <div className="absolute">
                        <ImageG src="/home/pattern-x-laranja.png" height={0} width={0} alt="Imagem decorativa de fundo"/>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
}                                                                                                                               