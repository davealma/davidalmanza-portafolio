import Image from 'next/image'
import React, { ReactEventHandler } from 'react';

async function getRepoData(): Promise<RepoData> {
  const myRepoUrl = "https://api.github.com/users/davealma";
  const response = await fetch(myRepoUrl);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
export default async function Home() {
  const repoData = await getRepoData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <img src={repoData.avatar_url} alt="Profile Image" className="rounded-full" width={100} height={100}/>
        <p className="w-40">{repoData.bio}</p>
      </div>
    </main>
  )
}
