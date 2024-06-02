'use client'
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { useState } from "react";

import PrimaryButton from "./PrimaryButton";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import ImageG from './ImageG';


export default function Header() {

    const navLinks = [
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

    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);


    return (

        <header className="text-black font-Poppins m-4 lg:flex lg:justify-center lg:items-center relative px-8">

            <div className="flex items-center">

                <ImageG
                    src="/logoHorizontal.png" 
                    alt="GRACE USP"
                    width={125}
                    height={40}
                />
                  
                <button className="text-cinzaGrace w-full flex justify-end lg:hidden" onClick={() => setOpenMenu((prevValue) => !prevValue)}>
                    {openMenu ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>

            </div>

            <section className={`drop-shadow left-0 w-full rounded-md z-40 p-4 lg:p-0 my-2 transition-all duration-300 max-lg:absolute max-lg:bg-brancoGrace lg:flex lg:flex-grow lg:visible lg:opacity-100 ${openMenu ? ' opacity-100 visible' : ' opacity-0 invisible'}`} >


                <nav className={`flex my-2 grow flex-col lg:flex-row lg:items-center lg:justify-center lg:my-0`}>
                    {
                        navLinks.map((link) => (

                            <a className={`mb-2 transition-all lg:my-0 lg:mx-4 xl:mx-8  ${pathname == link.ref ? 'text-vermelhoGrace font-semibold hover:font-bold' : 'hover:font-semibold '}`}
                                href={link.ref} target={link.ref.includes('.') ? "_blank" : "_self"}
                                key={link.title}>
                                {link.title}
                            </a>
                        ))
                    }
                </nav>

                <div>
                    <PrimaryButton onClick={() => window.open("https://www.instagram.com/graceusp/", "_blank")} title={"Entre em contato"} />
                </div>

            </section>
        </header>

    );
}