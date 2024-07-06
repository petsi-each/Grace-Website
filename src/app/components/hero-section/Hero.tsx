'use client'

import LeftButton from "./LeftButton";
import ImageG from "@/components/ImageG";
import SecondaryButton from "../../../components/SecondaryButton";

export default function Hero(){
    return (
        <section className="flex place-content-center relative min-h-[calc(100vh-74px)] pb-16">
            
            {/* 2 colunas*/}
            <div className="grid grid-cols-1 lg:grid-cols-8 space-x-2 md:space-x-0 py-10 items-center">

                <div className="lg:col-span-5 content-center">

                    <div className="max-w-min flex flex-col justify-center">
                        
                        {/* Garotas em Computação e Empreendedorismo*/}
                        <h1 className="font-Poppins font-bold text-3xl sm:text-6xl text-cinzaGrace max-w-max">
                            <span className="block">Garotas em</span>
                            <span className="block"><span className="text-vermelhoGrace">Computação </span>e</span>
                            <span className="block">Empreendedorismo</span>
                        </h1>

                        {/* Descrição GRACE */}
                         <p className="pt-5 md:pt-5 pb-5 md:pb-9 text-base leading-5 text-justify md:text-left">O GRACE tem como objetivo impulsionar a participação feminina na Computação e no Empreendedorismo desde o Ensino Fundamental até a Graduação.</p>

                    </div>

                    <span className="flex flex-col md:flex-row items-center md:pb-7 lg:pb-0">
                        <span className="">
                            {/* Botao conheça o GRACE*/}
                            <LeftButton onClick={() => window.open("https://www.instagram.com/graceusp/", "_blank")} title={"Conheça o GRACE"} />
                        </span>

                        <span className="">
                            {/* Botao galeria de atividades*/}
                            <SecondaryButton onClick={() => window.open("https://www.instagram.com/graceusp/", "_blank")} title={"Galeria de Atividades ->"} />
                        </span>

                    </span>

                    

                </div>

                {/* Imagem da mayu */}
                <div className="lg:col-span-3 w-full flex justify-center">
                    <ImageG className="w-56 md:w-96 h-fit" src="/home/mayu-hero.png" height={0} width={0} alt="Menina sorrindo testando um circuito de Arduino"/>
                </div>
                
            </div>

            <div className="opacity-50  absolute top-20 md:top-40 -left-9 md:left-0 -z-40">
                <ImageG className="w-36" src="/home/pattern-x-cinza.png" height={0} width={0} alt="Imagem decorativa de fundo"/>
            </div>

            <div className="opacity-50 absolute -bottom-8 md:bottom-0 -right-20 md:right-0">
                <ImageG className="w-72" src="/home/pattern-x-branco.png" height={0} width={0} alt="Imagem decorativa de fundo"/>
            </div>

            <div className="opacity-50  absolute -z-40 -top-20 -right-28 md:-top-20 md:right-1 ">
                <ImageG className="w-52" src="/home/pattern-x-laranja.png" height={0} width={0} alt="Imagem decorativa de fundo"/>
            </div>
            
        </section>
    );
}                                                                                                                               