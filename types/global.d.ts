
export {}
declare global {

    interface PorfolioThemeContext {
        isDark: boolean,
        toggleTheme: Dispatch<SetStateAction<boolean>>
    };

    interface IndustryProps {
        industry: string;
    }

    interface ProjectProps {
        projectName: string;
        description: string;
        technologies: string;
        industry: string;
        company: string | null;
        position: string;
        id: number;
    }

    type RepoData = {
        "url": string;
        "avatar_url": string,
        "bio": string,
        "html_url": string,
    };

}