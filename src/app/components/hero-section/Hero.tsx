'use client'

import LeftButton from "./LeftButton";
import Image from "next/image";
import heroImage from "../../../../public/images/hero-image.png";
import SecondaryButton from "../../../components/SecondaryButton";
import patternXCinza from "../../../../public/images/Pattern x - cinza.png";
import patternXBranco from "../../../../public/images/pattern x - branco.png";
import patternXLaranja from "../../../../public/images/pattern x - laranja.png";


export default function Hero(){
    return (
        <section className="flex place-content-center h-dvg">

            <div className="grid grid-cols-8 gap-0 space-x-8 py-10">

                <div className="col-span-5 content-center">

                    <div className="max-w-min">
                        
                        {/* Garotas em Computação e Empreendedorismo*/}
                        <h1 className="font-Poppins font-bold text-7xl text-cinzaGrace max-w-max">
                            <div className="bg-blue">Garotas em</div>
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
                        <Image src={patternXCinza} alt="Imagem decorativa de fundo"/>
                        </div>
                    </span>

                </div>

                {/* Imagem da mayu */}
                <div className="inline col-span-3 max-w-fit static">
                    <Image src={heroImage} alt="Menina sorrindo testando um circuito de Arduino"/>

                    <div className="absolute">
                        <Image src={patternXBranco} alt="Imagem decorativa de fundo"/>
                    </div>

                    <div className="absolute">
                        <Image src={patternXLaranja} alt="Imagem decorativa de fundo"/>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
}                                                                                                                               