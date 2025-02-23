import { useState } from "react";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [availability, setAvailability] = useState(false);
  const [year, setYear] = useState(1);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Live preview
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
        <div className="card-body">
          <form className="space-y-6">
            <div className="divider text-lg font-semibold">Create Profile</div>

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <input type="text" placeholder="Full Name" className="input input-bordered w-full" required />
              </div>
              <div className="form-control">
                <input type="email" placeholder="Email (for verification)" className="input input-bordered w-full" required />
              </div>
            </div>

            {/* Row 2: Year & Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="form-control">
                <label className="label"><span className="label-text">Year</span></label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="4"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="range"
                  />
                  <span className="badge badge-primary text-lg">{year}</span>
                </div>
              </div>
              <div className="form-control">
                <select className="select select-bordered w-full">
                  <option disabled selected>Select Department</option>
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                  <option>Electronics</option>
                  <option>Mechanical</option>
                  <option>Civil</option>
                </select>
              </div>
            </div>

            {/* Row 3: Gender & Availability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="form-control">
                <label className="label"><span className="label-text">Gender</span></label>
                <div className="flex gap-4">
                  {["Male", "Female", "Other"].map((gender) => (
                    <label key={gender} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gender" value={gender} className="radio checked:bg-blue-500" />
                      {gender}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-control flex flex-col items-center">
                <label className="label"><span className="label-text">Availability</span></label>
                <div className="flex items-center gap-x-4">
                  <span>NO</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={availability}
                    onChange={() => setAvailability(!availability)}
                  />
                  <span>YES</span>
                </div>
              </div>
            </div>

            {/* Row 4: Profile Picture & Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="form-control">
                <label className="btn btn-outline btn-primary w-full cursor-pointer">
                  Upload Picture
                  <input type="file" className="hidden" onChange={handleProfilePicChange} />
                </label>
                {profilePic && <img src={profilePic} alt="Preview" className="mt-2 w-20 h-20 rounded-full shadow-lg" />}
              </div>
              <div className="form-control">
                <input type="password" placeholder="Password" className="input input-bordered w-full" required />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary w-full md:w-1/2 mt-4">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
