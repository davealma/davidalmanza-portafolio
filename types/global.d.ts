/// <reference types="react/experimental" />
/// <reference types="react-dom/experimental" />

export {}
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string;
            GITHUB_PAT: string;
            GOOGLE_TMG: string;
            GOOGLE_ANALYTICS: string;
            DEV_FLAG: boolean;
        }
    }

    interface PorfolioThemeContext {
        isDark: boolean,
        toggleTheme: Dispatch<SetStateAction<boolean>>
    };

    interface Socials {
        provider: string;
        url: string;
    }

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
        startDate: date;
        endDate: Date | null;
    }

    type RepoData = {
        "url": string;
        "avatar_url": string,
        "bio": string,
        "html_url": string,
    };

}