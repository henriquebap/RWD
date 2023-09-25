import Link from "next/link";

export default function Header(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Página Inicial</Link>
                </li>
                <li>
                    <Link href="/">Contato</Link>
                </li>
                <li>
                    <Link href ="/">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}