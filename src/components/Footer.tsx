import { FiMail,FiInstagram } from "react-icons/fi";
import ImageG from "./ImageG";
import { ReactElement } from "react";


interface IconWithCircleProps {
  link: string;
  icon: ReactElement;
}

const IconWithCircle: React.FC<IconWithCircleProps> = ({ link, icon }) => (
  <a href={link} target="_blank" title="" rel="noopener noreferrer" style={{ display: "inline-block" }}>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FEFDFD" />
      <g transform="translate(11, 11)" className='text-vermelhoGrace'> 
        {icon}
      </g>
    </svg>
  </a>
);

export default function Footer() {
  const pathway =   process.env.NODE_ENV === "production" ? `before:bg-[url('/Grace-Website/waves.svg')]` : `before:bg-[url('/waves.svg')]`; 
  return (
    <footer className={`bg-transparent relative flex mt-12 flex-col justify-center items-center w-full h-56 mt-14 before:content-[''] before:absolute before:bg-cover before:w-full before:h-56  before:bg-no-repeat before:bg-top before:-z-10 `+ pathway}>
      
      <ImageG width={55} height={95} src={"/logoGrace.svg"} alt={""} className="py-2 pt-8"/>

      <ul className="flex p-1">
        <i className="m-1.5">
        
        <IconWithCircle 
        link={"https://www.instagram.com/graceusp/?hl=pt-br"}
        icon={<FiInstagram size={22} fill="none" />}
        />
        </i>

        <i className="m-1.5">
        <IconWithCircle 
        link={"mailto:gracepetsi@gmail.com"}
        icon={<FiMail size={22} className="text-vermelhoGrace" />}
        />
      
      </i>
      </ul>

      <ul className="flex">
      <ImageG src={"/rodapeump.svg"} alt={""} width={187} height={40}  />
      </ul>
      
      <p className="text-brancoGrace justify-end mt-4" >
         Desenvolvido por PET-SI 2024
    </p>
    </footer>
  );
}

