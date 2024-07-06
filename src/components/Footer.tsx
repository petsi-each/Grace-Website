import EmailIconWithCircle from "./BotaComCirculoGmail";
import InstagramIconWithCircle from "./BotaoComCirculo";
import ImageG from "./ImageG";

export default function Footer() {
  return (
    <footer className="bg-transparent relative flex flex-col justify-center items-center w-full h-56 mt-14 before:content-[''] before:absolute before:bg-cover before:w-full before:h-56 before:bg-[url('/waves.svg')] before:bg-no-repeat before:bg-top before:-z-10">
      
      


      <ImageG src={"logoGrace.svg"} alt={" "} className="py-2"/>

      <ul className="flex p-1">
        <i className="m-1.5">
        
        <InstagramIconWithCircle 
        link={"https://www.instagram.com/graceusp/?hl=pt-br"}/>
        </i>

        <i className="m-1.5">
        <EmailIconWithCircle link={"mailto:gracepetsi@gmail.com"} />
      
      </i>
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

