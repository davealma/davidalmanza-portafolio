import React from 'react';
import HomeWrapper from './homeWrapper';

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
    <HomeWrapper repoData={repoData} />
  )
}


