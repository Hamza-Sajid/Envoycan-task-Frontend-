import NavigationBar from "./NavigationBar";
import NavigationBarMobile from "./NavigationBarMobile";

import MainContent from "../Task/MainContent";
function Task1() {
  return (
    <body className="">
      <nav className="h-24 bg-[#222222] shadow-md ">
        {/* < -- Navigation component for Desktop / LG Devices --> */}
        <NavigationBar />
        {/* < -- Navigation component for Mobile Devices --> */}
        <NavigationBarMobile />
      </nav>

      <main className="bg-[#222222] pt-2 shadow-2xl shadow-black">
        <MainContent />
      </main>
    </body>
  );
}

export default Task1;
