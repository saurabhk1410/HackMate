import { useState } from "react";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [availability, setAvailability] = useState(false);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Live preview
    }
  };

  console.log(availability);
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
        <div className="card-body">
          <form className="space-y-4">
            {/* User Info Section */}
            <div className="divider text-lg font-semibold">Create Profile</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="input input-bordered w-full" required />
              <input type="email" placeholder="Email (for verification)" className="input input-bordered w-full" required />
              <input type="password" placeholder="Password" className="input input-bordered w-full md:col-span-1" required />

                 {/* Profile Picture Upload */}
            <div className="form-control w-full">
              <label className="label cursor-pointer">
                <input type="file" className="file-input file-input-bordered w-full" onChange={handleProfilePicChange} />
              </label>
              {profilePic && <img src={profilePic} alt="Preview" className="mt-2 w-20 h-20 rounded-full shadow-lg" />}
            </div>

              
              <div className="w-full flex gap-x-4 items-center px-2">
              <span className="label-text">Available</span>
         <div className="flex items-center gap-x-2">
         <span>NO</span>
              <input
                type="checkbox"
                className="toggle toggle-neutral"
                checked={availability}
                onChange={() => setAvailability(!availability)}
              />
              
              <span>YES</span>
         </div>
            </div>
            </div>

            
            {/* Gender Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Gender</span>
                </label>
                <div className="flex gap-4">
                  {["Male", "Female", "Other"].map((gender) => (
                    <label key={gender} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gender" value={gender} className="radio checked:bg-blue-500" />
                      {gender}
                    </label>
                  ))}
                </div>
              </div>
            </div>

         

            {/* Additional Details */}
            <div className="divider text-lg font-semibold">Additional Details</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Year Selection - Slider */}
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Year</span>
                </label>
                <input type="range" min="1" max="4" className="range" />
              </div>

              {/* Department Selection */}
              <select className="select select-bordered w-full">
                <option disabled selected>Select Department</option>
                <option>Computer Science</option>
                <option>Information Technology</option>
                <option>Electronics</option>
                <option>Mechanical</option>
                <option>Civil</option>
              </select>
            </div>

            {/* Skills Selection - Checkboxes */}
            <div className="form-control">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {["React", "Next.js", "Node.js", "Python", "ML", "AI", "Blockchain"].map((skill) => (
                  <label key={skill} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox" />
                    {skill}
                  </label>
                ))}
              </div>
            </div>
            {/* Availability - Toggle */}
           

            {/* Roles Selection - Checkboxes */}
            <div className="form-control">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {["Frontend", "Backend", "Full Stack", "AI/ML", "Blockchain", "App Developer"].map((role) => (
                  <label key={role} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox" />
                    {role}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full mt-4">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
