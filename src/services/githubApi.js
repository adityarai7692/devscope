const BASE_URL = 'https://api.github.com/users';

export const fetchUser= async (username) => {
try {
        const res= await fetch(`${BASE_URL}/${username}`);
        if(!res.ok){throw new Error('User not found');}
        return res.json();
} catch (error) {
    console.error('Error fetching user:', error);
    throw error;
}
};

export const fetchRepos= async (username) => {
    try {
        const res= await fetch(`${BASE_URL}/${username}/repos?sort=stars`);
        if(!res.ok){throw new Error('Repos not found');}
        return res.json();
    } catch (error) {
        console.error('Error fetching repos:', error);
        throw error;
    }
};
