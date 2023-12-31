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
  
  return (
    <ContentWrapper>
      { process.env.DEV_FLAG && <h2 className='text-red-600'>Dev Flag enabled.</h2> }
      <div className='my-2'>
        <img src={repoData.avatar_url} alt="Profile Image" className="rounded-full" width={100} height={100}/>
      </div>
      <p>{repoData.bio}</p>

      <article className='my-3 text-justify flex flex-col gap-4'>
        <p>
          I start working on a ecommerce tool with friends as my first job.
        </p>

        <p>
          Throughout my career, I have successfully collaborated with both in-person and remote teams,
          gaining valuable experience in adapting to diverse working environments.
          Additionally, I have had the opportunity to work with clients from different parts of the world,
          which has improved my abilities to perform under pressure and make decisions.
        </p>

        <p>
          I have been working as a software engineer with different clients looking for solutions which satisfy the client.
          I have the opportunity to work on Front End projects as Back End so I have the ability to understand the requirements on each side.
          Also I love to learn and keep constantly reading and applying new and latest industry’s concepts and standards.
        </p>
        
        <p>
          As Hobbies I enjoy chess and some soccer, when I a not with my wife and son enjoying life.
        </p>
      </article>

      <div className='my-3'>
        <span>Industries I have worked on:</span>
        <Industries industries={industries}/>
      </div>
    </ContentWrapper>
  )
}


