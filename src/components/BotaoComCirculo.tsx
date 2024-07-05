import { FiInstagram } from 'react-icons/fi';

const InstagramIconWithCircle = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="22" fill="#FEFDFD" />
    <g transform="translate(11, 11)" className='text-vermelhoGrace'> 
      <FiInstagram
        size={22}
        fill="none"
      />
    </g>
  </svg>
);

export default InstagramIconWithCircle;