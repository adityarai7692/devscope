export default function ProfileCard({ profile }) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-lg">
        
        <a
          href={profile.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={profile.avatar_url}
            alt={profile.login}
            className="w-28 h-28 rounded-full border-4 border-white/30 object-cover hover:scale-105 transition duration-300"
          />
        </a>
  
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            {profile.name || profile.login}
          </h2>
  
          <p className="text-gray-300">
            @{profile.login}
          </p>
  
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm">
            <span>👥 {profile.followers} Followers</span>
            <span>👣 {profile.following} Following</span>
            <span>📁 {profile.public_repos} Repos</span>
          </div>
        </div>
      </div>
    );
  }
  