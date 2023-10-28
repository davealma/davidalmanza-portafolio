import Link from "next/link";

const NavLinks = ({isDark}: {isDark: boolean}) => {
    return(
        <nav>
            <ul className={`${isDark ? 'text-white' : 'text-black'} hidden md:flex gap-x-6`}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks;