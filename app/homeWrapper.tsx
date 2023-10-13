"use client"
import React, { useContext } from "react";
import Industries from "./components/Industries";
import { useThemeContext } from "../providers";

const HomeWrapper = ({repoData}: {repoData: RepoData}) => {
    const {isDark} = useThemeContext();
    return (
        <main className={`${isDark ? 'bg-dark text-white' : 'bg-light text-black'} flex min-h-screen flex-col items-center justify-between p-24`}>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
                <img src={repoData.avatar_url} alt="Profile Image" className="rounded-full" width={100} height={100}/>
                <p>{repoData.bio}</p>
                <span>Industires I have worked on:</span>
                <Industries />
            </div>           
        </main>
    )
}

export default HomeWrapper;