
import { FiEdit, FiMail, FiUsers } from "react-icons/fi"; // Import Edit Icon
const DrawerSideBar = () => {
  return (

    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    
      <div className="menu bg-base-100 text-base-content min-h-full w-80 p-0 flex flex-col">
        
        {/* User Profile Button (Opens Edit Profile) */}
        <button className="btn btn-neutral rounded-none w-full flex justify-between items-center">
          <span className="font-bold">Saurabhkumar!</span>
          <div className="flex items-center gap-2">
            <FiEdit size={18} /> {/* Edit Icon */}
            <span>Edit</span>
          </div>
        </button>
    
        {/* Navigation Options - Full Height Buttons */}
        <div className="flex flex-col flex-grow mt-4 gap-2 p-4">
        <button className="btn w-full h-40 bg-green-600 text-white hover:bg-green-700 text-lg font-semibold flex items-center justify-center gap-3 rounded-lg">
            <FiUsers size={24} />
            Create New Team
          </button>
          <button className="btn w-full h-40 bg-blue-600 text-white hover:bg-blue-700 text-lg font-semibold flex items-center justify-center gap-3 rounded-lg">
            <FiMail size={24} />
            Requests
          </button>
        </div>
    
        {/* Logout Button - Stays at Bottom */}
        <div className="mt-auto">
          <button className="btn btn-error w-full rounded-none">Logout</button>
        </div>
      </div>
    </div>
    
  )
}

export default DrawerSideBar