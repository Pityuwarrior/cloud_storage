import Link from 'next/link';
import variables from '../../assets/scss/Navbar.module.scss'

interface NavbarProps {
    links: {
        href: string;
        label: string;
    }[];
}

export default function Navbar({ links } : NavbarProps) { //no default
    return (
        <nav className={variables.navbar_container}> {/*Nav Children Check*/} 
            <label className={variables.navbar_title}><Link href="/">CLOUD STRORAGE</Link></label>
            <ul className={variables.navbar_elements}>
                {links.map((link) => (
                    <li className={variables.navbar_item} key = {link.href}>
                        <Link className={variables.navbar_link} href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
    </nav>
    )
}