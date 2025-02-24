import DrawerSideBar from "../components/DrawerSideBar";
import ProfileCard from "../components/ProfileCard";
import { FiMenu } from "react-icons/fi"; // Importing menu icon

const MainPage = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content bg-base-200 min-h-screen text-white">
        
        {/* Drawer Button (Hidden when Drawer is Open) */}
        <label 
          htmlFor="my-drawer" 
          className="btn btn-circle btn-neutral fixed top-4 left-4 z-50 transition-opacity duration-300 drawer-button">
          <FiMenu size={24} />
        </label>

        {/* Profile Cards Grid */}
        <div className="p-10 pt-14">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {Array.from({ length: 12 }).map((_, index) => (
              <ProfileCard key={index} />
            ))}
          </div>
        </div>
      </div>

     <DrawerSideBar/>

      {/* Hide Menu Icon When Drawer is Open */}
      <style>
        {`
          #my-drawer:checked ~ .drawer-content .drawer-button {
            opacity: 0;
            pointer-events: none;
          }
        `}
      </style>
    </div>
  );
};

export default MainPage;
