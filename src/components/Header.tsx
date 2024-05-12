'use client'

import { usePathname } from "next/navigation";
import PrimaryButton from "./PrimaryButton";

export default function Header(){
    
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
    const pathname = usePathname();
    
    return(
       
        <header className="text-black md:flex font-Poppins text-base m-12 justify-center items-center">
            <div>
                <img src="./logoHorizontal.png" alt="Logo do GRACE" width={125}/>
            </div>
            <nav className="flex md:grow md:flex-row flex-col md:items-center md:justify-center my-2 md:my-0">
                {
                    links.map((item) => (<a className={`md:mx-4 md:my-0 xl:mx-8 my-1 hover:font-semibold transition-all ${pathname == item.ref ? 'text-vermelhoGrace font-semibold' : ''}`} href={item.ref} target="_blank" key={item.title}>{item.title}</a>))
                }
            </nav>
            <div>
                <PrimaryButton onClick={()=>window.open("https://www.instagram.com/graceusp/", "_blank")} title={"Entre em contato"} />
            </div>
        </header>

    );
}