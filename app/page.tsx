import React from 'react';
import ContentWrapper from './ContentWrapper';
import Industries from "./components/Industries";
import {db} from '@/lib/db';
import {projects} from '@/lib/db/schema';

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
  const industries = await db.selectDistinct({industry: projects.industry}).from(projects) as IndustryProps[];
  
  console.log(industries);
  return (
    <ContentWrapper>
      <img src={repoData.avatar_url} alt="Profile Image" className="rounded-full" width={100} height={100}/>
      <p>{repoData.bio}</p>
      <span>Industires I have worked on:</span>
      <Industries industries={industries}/>
    </ContentWrapper>
  )
}


