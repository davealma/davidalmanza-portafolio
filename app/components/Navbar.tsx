"use client"
import Link from "next/link";
import ToggleTheme from './ToggleTheme';
import { useThemeContext } from "@/providers";
import NavLinks from "./NavLinks";

const NavBar = () => {
    const { isDark, toggleTheme } = useThemeContext();
    
     const onThemeChange = () => {
         toggleTheme(!isDark);
    }
    
    return(
        <div className={`${isDark ? 'bg-darker' : 'bg-white'} z-10 w-full h-20 sticky top-0`}>
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <NavLinks isDark={isDark}/>
                    <ToggleTheme onThemeChange={onThemeChange}/>
                </div>
            </div>
        </div>
    )
};

export default NavBar;