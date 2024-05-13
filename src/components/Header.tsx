'use client'

import { usePathname } from "next/navigation";
import { useState } from "react";

import PrimaryButton from "./PrimaryButton";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";


export default function Header() {

    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);

    const links = [
        {
            title: "Início",
            ref: "/"
        },
        {
            title: "Quem somos?",
            ref: "http://each.uspnet.usp.br/petsi/grace/?page_id=94"
        },
        {
            title: "Fala, Grace!",
            ref: "http://each.uspnet.usp.br/petsi/grace/?page_id=699"
        },
        {
            title: "Atividades",
            ref: "http://each.uspnet.usp.br/petsi/grace/?page_id=96"
        },
        {
            title: "Conteúdo",
            ref: "http://each.uspnet.usp.br/petsi/grace/?page_id=104"
        }
    ]

    return (

        <header className="text-black font-Poppins m-4 lg:flex lg:justify-center lg:items-center">

            <div className="flex items-center">

                <img src="./logoHorizontal.png" alt="Logo do GRACE" width={125} />

                <div className="text-cinzaGrace w-full flex justify-end lg:hidden" onClick={() => setOpenMenu((prevValue) => !prevValue)}>
                    {openMenu ? <FiX size={30} /> : <FiMenu size={30} />}
                </div>

            </div>

            <div className={`drop-shadow lg:flex lg:flex-grow ${openMenu ? 'max-lg:bg-brancoGrace rounded-md p-4 my-2' : 'max-lg:hidden'}`} >

                <nav className={`flex my-2 grow flex-col lg:flex-row lg:items-center lg:justify-center lg:my-0`}>
                    {
                        links.map((item) => (

                            <a className={`mb-2 transition-all hover:font-semibold lg:my-0 lg:mx-4 xl:mx-8  ${pathname == item.ref ? 'text-vermelhoGrace font-semibold' : ''}`}
                                href={item.ref} target={item.ref.includes('.') ? "_blank" : "_self"}
                                key={item.title}>
                                {item.title}
                            </a>
                        ))
                    }
                </nav>

                <div>
                    <PrimaryButton onClick={() => window.open("https://www.instagram.com/graceusp/", "_blank")} title={"Entre em contato"} />
                </div>

            </div>
        </header>

    );
}