import { useState } from 'react';
import { fetchUser, fetchRepos } from '../services/githubApi';

export default function useGithub() {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getGithubData = async (username) => {
        try {
            setLoading(true);
            setError(null);

            const userData = await fetchUser(username);
            const reposData = await fetchRepos(username);

            setProfile(userData);
            setRepos(reposData);
            // setLoading(false);
        }catch (error) {
            setError(error.message);
            setProfile(null);
            setRepos([]);
        } finally {
            setLoading(false);
        }
    }
    return { profile, repos, loading, error, getGithubData };

}