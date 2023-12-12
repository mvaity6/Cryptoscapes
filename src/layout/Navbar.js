/* eslint-disable no-script-url */
import Switcher from "../components/Switcher";
import InputField from "../components/InputField";
import ProfilePic from "../assets/images/profile.png";
import CustomDropdown from "../components/CustomDropdown";
import user from '../assets/svg/user.svg';
import adminIcon from '../assets/svg/adminIcon.svg';
import logout from '../assets/svg/logout.svg';
import refreshIcon from '../assets/images/referesh.png';

export default function Navbar({ showSidebar, setShowSidebar }) {
  const buttonContent = (
    <div className="w-[10px]">
      {/* ... (existing button content) */}
    </div>
  );

  const menuItems = [
    { label: 'My Account', href: 'javascript:void(0)', image: user },
    { label: 'Admin Panel', href: 'javascript:void(0)', image: adminIcon },
    { label: 'Vendor Panel', href: 'javascript:void(0)', image: adminIcon },
    { label: 'Logout', href: 'javascript:void(0)', image: logout },
  ];

  const handleRefresh = () => {
    // Reload the page
    window.location.reload();
  };

  return (
    <nav className="dark:bg-[#1C1C25] md:ml-[19.2rem] py-[19.5px] pl-[39px] pr-[37px]">
      <div className="container max-w-full mx-auto flex items-center justify-between">
        <div className="md:hidden">
          {/* ... (existing mobile menu button code) */}
        </div>

        <div className="flex justify-between items-center w-full gap-5 flex-col lg:flex-row">
          <div className="flex">
            <form className="2xl:w-[626px]">
              <InputField />
            </form>
          </div>
          <div className="flex items-center gap-4">
            <Switcher />
            {/* Refresh button */}
            <button onClick={handleRefresh} className="cursor-pointer">
            <img
              src={refreshIcon}
              alt="Refresh"
              className="refresh-icon"
              style={{ width: '24px', height: '24px' }} 
            />
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
