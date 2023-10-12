import Link from "next/link";
import ToggleTheme from './ToggleTheme';

const NavBar = () => {
    return(
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <ul className="hidden md:flex gap-x-6 text-white">
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
                    <ToggleTheme />
                </div>
            </div>
        </div>
    )
};

export default NavBar;