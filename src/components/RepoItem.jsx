import React from 'react'

export default function RepoItem({repo}) {
  return (
    <div className='bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xlb hover:scale-105 transition duration-300'>
        <h3 className='text-lg font-semibold mb-2'>{repo.name}</h3>
        <div className='flex text-sm justify-between'>
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        </div>
        <a
        href={repo.html_url}
        target='_blank'
        rel='noopener '
        className='inline-block mt-3 text-blue-400 text-sm hover:underline'
        >
            View on GitHub
        </a>
        

    </div>
  )
}
