import Logo from "../../assets/logo.png";
function NavigationBar() {
  return (
    <ul className=" h-full  sm:flex items-center justify-center hidden  ">
      <li className="flex gap-12 items-center">
        <img className=" h-14 inline p-3 " src={Logo} alt="" />

        <div>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-300 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block p-4 pl-10 w-full text-sm  bg-transparent text-gray-300 rounded-lg border border-none focus:border-gray-700  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-transparent focus:outline-none "
              placeholder="Search"
              required
            />
          </div>
        </div>

        <span className="flex gap-12">
          <button className="text-white text-sm font-semibold">Location</button>
          <button className="text-white text-sm font-semibold">Services</button>
          <button className="text-white text-sm font-semibold">
            My Bookings
          </button>
        </span>

        <span className="flex gap-6">
          <button className="text-white  font-medium hover:bg-white hover:text-[#AEF12F] bg-[#AEF12F] rounded-md w-52 p-3">
            Login/Registration
          </button>
          <button className="text-white hover:bg-white hover:text-gray-700 font-medium border border-solid borde-white p-3 w-36 rounded-lg">
            Join Now
          </button>
        </span>
      </li>
    </ul>
  );
}

export default NavigationBar;
