import React from 'react'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username.trim()){
            alert('Please enter a username');
            return;
        }
        onSearch(username);
        setUsername('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='mb-6'>
            <input
            type='text'
            placeholder='Enter a GitHub username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full p-2 rounded-md border border-white/20 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
            >
                Search
            </button>
        </form>
    </div>
  )
}
