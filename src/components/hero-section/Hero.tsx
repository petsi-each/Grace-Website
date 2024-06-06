'use client'

import LeftButton from "./LeftButton";
import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";
import SecondaryButton from "../SecondaryButton";

export default function Hero(){
    return (
        <section className="flex place-content-center h-dvg">

            <div className="grid grid-cols-8 gap-0 space-x-8 py-10">

                <div className="col-span-5 content-center">
                    <div className="max-w-min">

                        <h1 className="font-Poppins font-bold text-7xl text-cinzaGrace max-w-max">
                            <div className="bg-blue">Garotas em</div>
                            <div><span className="text-vermelhoGrace">Computação</span> e</div>
                            <div>Empreendedorismo</div>
                        </h1>
                
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
                    </span>
                </div>

                <div className="inline col-span-3 max-w-fit">
                    <Image src={heroImage} alt="Menina sorrindo testando um circuito de Arduino"/>
                </div>
                
            </div>
            
        </section>
    );
}                                                                                                                               