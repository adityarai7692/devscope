import React from 'react'
import RepoItem from './RepoItem'

export default function RepoList({repos}) {
    console.log(repos);
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>


    {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
    ))}
    </div>
  )
}
