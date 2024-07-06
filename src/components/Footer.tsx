import { FiMail } from "react-icons/fi";
import { FiInstagram } from 'react-icons/fi';

interface IconWithCircleProps {
  link: string;
}

// Icons with circle
const EmailIconWithCircle: React.FC<IconWithCircleProps> = ({ link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block" }}>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FEFDFD" />
      <g transform="translate(11, 11)">
        <FiMail
          size={22}
          className="text-vermelhoGrace"
        />
      </g>
    </svg>
  </a>
);

const InstagramIconWithCircle: React.FC<IconWithCircleProps> = ({ link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block" }}>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="#FEFDFD" />
      <g transform="translate(11, 11)" className='text-vermelhoGrace'> 
        <FiInstagram
          size={22}
          fill="none"
        />
      </g>
    </svg>
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-transparent relative flex flex-col justify-center items-center mt-12 w-full h-56 before:content-[''] before:absolute before:bg-cover before:w-full before:h-56 before:bg-[url('/waves.svg')] before:bg-no-repeat before:bg-top before:-z-10">
      
      


      <img src = "logoGrace.svg" alt=" " className="py-2 pt-8"/>

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

