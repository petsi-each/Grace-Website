import EmailIconWithCircle from "./BotaComCirculoGmail";
import InstagramIconWithCircle from "./BotaoComCirculo";
import ImageG from "./ImageG";

export default function Footer() {
  const pathway =   process.env.NODE_ENV === "production" ? `before:bg-[url('/Grace-Website/waves.svg')]` : `before:bg-[url('/waves.svg')]`; 
  return (
    <footer className={`bg-transparent relative flex mt-12 flex-col justify-center items-center w-full h-56 mt-14 before:content-[''] before:absolute before:bg-cover before:w-full before:h-56  before:bg-no-repeat before:bg-top before:-z-10 `+ pathway}>
      
      <ImageG width={55} height={95} src={"/logoGrace.svg"} alt={""} className="py-2 pt-8"/>

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
      <ImageG src={"/rodapeump.svg"} alt={""} width={187} height={40}  />
      </ul>
      
      <p className="className: text-brancoGrace justify-end mt-4" >
         Desenvolvido por PET-SI 2024
    </p>
    </footer>
  );
}

