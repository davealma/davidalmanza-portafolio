
export {}
declare global {

    interface PorfolioThemeContext {
        isDark: boolean,
        toggleTheme: Dispatch<SetStateAction<boolean>>
    };

    type RepoData = {
        "url": string;
        "avatar_url": string,
        "bio": string,
        "html_url": string,
    };
}