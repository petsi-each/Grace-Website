'use client'

interface PrimaryButtonProps{
    title: string,
    onClick: () => void,
}

export default function SecondaryButton(props: PrimaryButtonProps){
  
    return(
       
        <button  onClick={props.onClick} className="bg-transparent text-vermelhoGrace font-medium rounded-lg text-center drop-shadow py-2 px-6 transition-all hover:font-medium"> {props.title} </button>            

    );
}