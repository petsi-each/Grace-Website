'use client'

import LeftButton from "./LeftButton";
import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";
import SecondaryButton from "./SecondaryButton";

export default function Hero(){
    return (
        <section className="">

            <div className="">

                <div className="inline">
                    <h1 className="font-Poppins font-bold text-5xl">
                        <span className="text-cinzaGrace">Garotas em</span>
                        <span className="block">
                            <span className="text-vermelhoGrace">Computação </span>
                            <span className="text-cinzaGrace">e</span>
                        </span>
                        <span className="text-cinzaGrace">Empreendedorismo</span>
                    </h1>
                
                    <p className="">O GRACE tem como objetivo impulsionar a participação feminina na Computação e no Empreendedorismo desde o Ensino Fundamental até a Graduação</p>
                
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

                <div className="inline">
                    <Image src={heroImage} alt="Menina sorrindo testando um circuito de Arduino"/>
                </div>
                
            </div>

            
            
        </section>
    );
}