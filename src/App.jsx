import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import ProfileCard from './components/ProfileCard';
import RepoList from './components/RepoList';
import useGithub from './hooks/useGithub';

function App() {
  const {profile, repos, loading, error, getGithubData} = useGithub();

  return (
    <>
     <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-10 rounded-3xl">
      
      <div className="max-w-6xl mx-auto px-6 py-10 ">


          <h1 className='text-4xl font-bold mb-6 font-poppins'>DevScope</h1>
          <SearchBar onSearch={getGithubData} />
          {loading&& <Loader />}
          {error && (
            <div className='text-red-500 text-sm mb-4'>{error}</div>
          )}
          {profile && (
            <div className='mb-8'>
              <ProfileCard profile={profile} />
            </div>
          )}
          {repos.length > 0 && (
            <div className='mb-8'>
              <RepoList repos={repos} />
            </div>
          )}
        </div>
        
      </div>
        
    </>
  )
}

export default App
