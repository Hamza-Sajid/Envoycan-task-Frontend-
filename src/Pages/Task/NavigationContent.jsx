import AboutAppValues from "./AboutAppValues";
import GeneralListValues from "./GeneralListValues";

function NavigationContent() {
  return (
    <div className=" w-full">
      {/* < -- User Profile component  --> */}

      <img
        src={
          "https://storage.prompt-hunt.workers.dev/clefh6i4j000mjk08rei7l3om_1"
        }
        alt=""
        className="rounded-full w-28 h-28 block m-auto"
      />
      <h4 className="headingh4 text-center text-white mt-2">Saul Armstrong</h4>
      <button className="text-white font-semibold bg-[#AEF12F] rounded-lg p-3 mt-4 block m-auto w-52">
        EDIT PROFILE
      </button>

      <div className="bg-[#363636] text-white w-11/12 p-2 mt-4 indent-3">
        General
      </div>
      {/* < -- Commponent to show <li> values of Genral List --> */}
      <GeneralListValues />

      <div className="bg-[#363636] text-white w-11/12 p-2 mt-4 indent-3">
        About App
      </div>
      {/* < -- Commponent to show <li> values of About App Values List --> */}
      <AboutAppValues />
      <div className=" flex w-11/12 items-center mt-4 ">
        <button className="text-white bg-[#AEF12F] rounded-lg p-3 block m-auto mt-4 w-full font-semibold">
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default NavigationContent;
