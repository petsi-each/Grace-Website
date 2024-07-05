import EmailIconWithCircle from "./BotaComCirculoGmail";
import InstagramIconWithCircle from "./BotaoComCirculo";

export default function Footer() {
  return (
    <footer className="bg-transparent relative flex flex-col justify-center items-center w-full h-56 mt-14 before:content-[''] before:absolute before:bg-cover before:w-full before:h-56 before:bg-[url('/waves.svg')] before:bg-no-repeat before:bg-top before:-z-10">
      
      


      <img src = "logoGrace.svg" alt=" " className="py-2"/>

      <ul className="flex p-1">
        <a href="https://www.instagram.com/graceusp/?hl=pt-br" className="m-1.5">
        
        <InstagramIconWithCircle 
        />
        </a>

        <a href="gracepetsi@gmail.com" className="m-1.5">
        <EmailIconWithCircle />
      
      </a>
      </ul>

   

      <ul className="flex">
      <img src = "rodapeump.svg" alt=" "/>
      </ul>
      
      <p className="className: text-brancoGrace justify-end mt-4" >
         Desenvolvido por PET-SI 2024
    </p>
    </footer>
  );
}

