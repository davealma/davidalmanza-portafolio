"use client"
import Link from "next/link";
import ToggleTheme from './ToggleTheme';
import { useThemeContext } from "@/providers";
// const NavBar2 = () => {
//     const [isDark, toggleTheme] = useState(false);

//     return(
//         <LightDarkThemeContext.Provider value={{isDark}}>
//             <NavBarComponent onThemeChange={onThemeChange}/>
//         </LightDarkThemeContext.Provider>
//     );
// };

const NavBar = () => {
    const { isDark, toggleTheme } = useThemeContext();
    
     const onThemeChange = () => {
         toggleTheme(!isDark);
    }
    
    return(
        <div className={`${isDark ? 'bg-darker' : 'bg-white'} w-full h-20 sticky top-0`}>
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
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
                    <ToggleTheme onThemeChange={onThemeChange}/>
                </div>
            </div>
        </div>
    )
};

export default NavBar;