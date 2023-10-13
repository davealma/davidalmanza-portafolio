"use client"
import Link from "next/link";
import ToggleTheme from './ToggleTheme';
import { createContext, useContext, useState } from "react";

export const LightDarkThemeContext = createContext('light');

const NavBar = () => {
    const [theme, setTheme] = useState('light');
    const onThemeChange = () => {
        setTheme(currTheme => currTheme === 'light' ? 'dark' : 'light')
    }

    return(
        <LightDarkThemeContext.Provider value={theme}>
            <NavBarComponent onThemeChange={onThemeChange}/>
        </LightDarkThemeContext.Provider>
    );
};

const NavBarComponent = ({onThemeChange}: {onThemeChange: ()=> void}) => {
    const theme = useContext(LightDarkThemeContext);
    const isDark = theme === 'dark';
    return(
        <div className={`${isDark ? 'bg-black' : 'bg-gray-400'} w-full h-20 sticky top-0`}>
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <ul className={`hidden md:flex gap-x-6 ${isDark ? 'text-white' : 'text-black'}`}>
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