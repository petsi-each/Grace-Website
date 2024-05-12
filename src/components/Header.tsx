'use client'

import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false);

    const pathname = usePathname();

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

        <header className="text-black lg:flex font-Poppins text-base m-12 justify-center items-center bg-brancoGrace">

            <div className="flex items-center lg:justify-center space-x-2">
                <div className="text-cinzaGrace lg:hidden" onClick={() => setOpenMenu((prevValue) => !prevValue)}>{openMenu ? <FiX size={24} /> : <FiMenu size={24} />}</div>
                <img src="./logoHorizontal.png" alt="Logo do GRACE" width={125} />
            </div>

            <nav className={`flex md:grow lg:flex-row flex-col lg:items-center lg:justify-center my-2 lg:my-0 ${openMenu ? '' : 'max-lg:hidden'} `}>
                {
                    links.map((item) => (<a className={`lg:mx-4 lg:my-0 xl:mx-8 my-1 hover:font-semibold transition-all ${pathname == item.ref ? 'text-vermelhoGrace font-semibold' : ''}`} href={item.ref} target="_blank" key={item.title}>{item.title}</a>))
                }
            </nav>

            <div className={`${openMenu ? '' : 'max-lg:hidden'}`}>
                <PrimaryButton onClick={() => window.open("https://www.instagram.com/graceusp/", "_blank")} title={"Entre em contato"} />
            </div>

        </header>

    );
}