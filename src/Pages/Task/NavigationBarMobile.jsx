import { useState } from "react";
import Logo from "../../assets/logo.png";
function NavigationBarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="flex items-center justify-between bg-[#222222]  p-4 sm:hidden">
        <div className="flex items-center">
          <button
            className="text-white focus:outline-none mr-4"
            onClick={handleToggle}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
          <img src={Logo} className="w-32" alt="" />
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-[#363636]   w-full absolute left-0 z-10 top-14 mt-4 shadow-lg rounded-br-xl  rounded-bl-xl`}
        >
          <ul className="text-gray-100 text-center">
            <li className="py-2 font-semibold">Location</li>
            <li className="py-2 font-semibold">Services</li>
            <li className="py-2 font-semibold">Bookings</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBarMobile;
