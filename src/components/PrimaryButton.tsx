'use client'

interface PrimaryButtonProps{
    title: string,
    onClick: () => void,
}

export default function PrimaryButton(props: PrimaryButtonProps){
    // ()=>window.open("https://www.instagram.com/graceusp/", "_blank")
    
    return(
       
        <button  onClick={props.onClick} className="bg-vermelhoGrace text-white rounded-lg text-center drop-shadow py-2 px-6 transition-all hover:font-semibold"> {props.title} </button>            


    );
}