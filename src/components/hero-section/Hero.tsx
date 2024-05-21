'use client'

import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import Image from "next/image";

export default function Hero(){
    return (
        <section>

            <div className="flex-col">

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
                        <RightButton onClick={() => window.open("https://www.instagram.com/graceusp/", "_blank")} title={"Galeria de Atividades ->"} />
                    </span>
                </span>
            </div>

            <div className="">
                {/* Colocar imagem aqui*/}
            </div>
            
            
            
        </section>
    );
}