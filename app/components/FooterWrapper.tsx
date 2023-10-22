"use client"

import { useThemeContext } from "@/providers";
import React from "react";

const FooterWrapper = ({children}: {children: React.ReactNode}) => {
    const {isDark} = useThemeContext();

    return(
        <div className={`${isDark ? 'bg-darker' : 'bg-white'} w-full h-[80px] bottom-0`}>
            { children }
        </div>
    );
};

export default FooterWrapper;