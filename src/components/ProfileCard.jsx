const ProfileCard = () => {
    return (
      <div className="card bg-base-100 shadow-xl p-6 w-96 relative pb-24 rounded-lg">
        {/* Profile Image & Basic Info */}
        <div className="flex items-center gap-4">
          <figure className="w-20 h-20">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-2 border-neutral"
            />
          </figure>
  
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-base-content">Saurabhkumar Sharma</h2>
            <p className="text-md text-base-content/70 font-medium">
              Male | IT | TY
            </p>
          </div>
        </div>
  
        {/* Role & Skills Section */}
        <div className="mt-4 space-y-2 border-t-2 border-black">
          <div>
            <p className="text-sm font-semibold text-base-content/80">Role</p>
            <p className="text-md font-medium text-base-content">Frontend → Backend → Full Stack</p>
          </div>
  
          <div>
            <p className="text-sm font-semibold text-base-content/80">Skills</p>
            <p className="text-md font-medium text-base-content">
              Figma, React, Node, Express, Next.js
            </p>
          </div>
  
          {/* Hackathons Section */}
          <div>
            <p className="text-sm font-semibold text-base-content/80">Hackathons</p>
            <ul className="text-md font-medium text-base-content space-y-1">
              <li>🏆 <span className="font-semibold">HackNiche</span> - <span className="text-green-600">1st Place (Winner)</span></li>
              <li>🥈 <span className="font-semibold">CodeShastra</span> - <span className="text-blue-600">2nd Place (Runner-up)</span></li>
              <li>🥉 <span className="font-semibold">CodeKraze</span> - <span className="text-red-600">3rd Place (Second Runner-up)</span></li>
              <li>🏅 <span className="font-semibold">Synergy</span> - <span className="text-yellow-600">Top 10 (Finalist)</span></li>
            </ul>
          </div>
        </div>
  
        {/* Add Button */}
        <button className="btn btn-neutral w-full absolute bottom-0 left-0 rounded-t-none">
          Add
        </button>
      </div>
    );
  };
  
  export default ProfileCard;
  