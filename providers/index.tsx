'use client';
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<PorfolioThemeContext>({
    isDark: false,
    toggleTheme: (): boolean => false
});

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [isDark, toggleTheme] = useState(false);
    return(
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
export const useThemeContext = () => useContext(ThemeContext);
export default ThemeProvider;