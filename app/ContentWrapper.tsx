"use client"
import React from "react";
import { useThemeContext } from "@/providers";

const ContentWrapper = ({children}: {children: React.ReactNode}) => {
    const {isDark} = useThemeContext();
    return (
        <main className={`${isDark ? 'bg-dark text-white' : 'bg-light text-black'} flex min-h-screen flex-col items-center justify-between p-24`}>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
                { children }
            </div>           
        </main>
    )
}

export default ContentWrapper;