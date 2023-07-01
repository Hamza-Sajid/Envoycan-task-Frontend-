import NavigationContent from "../Task/NavigationContent";
import ChatContent from "../Task/ChatContent";
function MainContent() {
  return (
    <div className="h-full pb-12">
      {/* < -- Left side Navigation content --> */}
      <div className=" sm:w-4/5 w-full flex m-auto ">
        <div className=" hidden justify-center m-auto w-1/3  sm:flex">
          <NavigationContent />
        </div>

        {/* < -- Main Chat component  --> */}
        <div className="w-full">
          <ChatContent />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
