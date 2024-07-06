import { FiInstagram } from 'react-icons/fi';

interface InstagramIconWithCircleProps {
  link: string; // Definindo o tipo da propriedade link como string
}

const InstagramIconWithCircle: React.FC<InstagramIconWithCircleProps> = ({ link }) => (
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

export default InstagramIconWithCircle;
