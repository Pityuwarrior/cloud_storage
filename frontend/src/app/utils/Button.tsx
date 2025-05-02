import Link from 'next/link';
import variables from '../assets/scss/Button.module.scss'

interface ButtonProps{
    name : string,
    href : string 
}

{/*Szétszedni a gombokat*/}
export default function Button({name, href}:ButtonProps){
    return (
        <Link href={href}>
            <button className={variables.button}>{name}</button>
        </Link>
    )
}