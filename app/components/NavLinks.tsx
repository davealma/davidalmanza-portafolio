import Link from "next/link";

const NavLinks = ({isDark}: {isDark: boolean}) => {
    return(
        <nav>
            <ul className={`${isDark ? 'text-white' : 'text-black'} hidden md:flex gap-x-6`}>
                <li>
                    <Link className="leading-[80px] py-[30px]" href="/">Home</Link>
                </li>
                <li>
                    <Link className="leading-[80px] py-[30px]" href="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="leading-[80px] py-[30px]" href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks;