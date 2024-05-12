export default function Header(){
    
    const links = [
        {
            title: "Início",
            ref: "/"
        },
        {
            title: "Quem somos?",
            ref: "/quem-somos"
        }
    ]

    
    return(
       
        <header className="text-black flex">
            <div>
                <img src="./logoHorizontal.png" alt="Logo do GRACE" />
            </div>
            <div className="flex grow items-center justify-center">
                {
                    links.map((item) => (<p key={item.title}>{item.title}</p>))
                }
            </div>
            <div>
                { /* entre em contato */ }
                a
            </div>
        </header>

    );
}