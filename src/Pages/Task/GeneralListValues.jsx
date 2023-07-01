import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import {
  BsFillMoonFill,
  BsFillPinMapFill,
  BsFillQuestionCircleFill,
  BsGlobe,
  BsHeartFill,
  BsLockFill,
} from "react-icons/bs";

function GeneralListValues() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <nav className="mt-4">
      <ul>
        <li className="text-white para font-semibold text-sm inline">
          <div className=" flex w-11/12 items-center ">
            <div className="w-5/6 flex items-center">
              <BsFillMoonFill className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">Dark Mode</span>
            </div>

            <div className="">
              <button
                className={`w-9 h-5 flex items-center rounded-full ${
                  isOn ? "bg-[#AEF12F]" : "bg-gray-500"
                }`}
                onClick={handleToggle}
              >
                <span
                  className={`inline-block w-4 h-4 rounded-full ${
                    isOn ? "ml-auto bg-white" : "mr-auto bg-white"
                  }`}
                />
              </button>
            </div>
          </div>
        </li>

        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsLockFill className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">Help Center Mode</span>
            </div>

            <div className="">
              <BiChevronRight className="text-white text-2xl relative left-3" />
            </div>
          </div>
        </li>

        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsGlobe className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">App Language</span>
            </div>

            <div className="">
              <BiChevronRight className="text-white text-2xl relative left-3" />
            </div>
          </div>
        </li>

        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsHeartFill className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">Favorite Series</span>
            </div>

            <div className="">
              <BiChevronRight className="text-white text-2xl relative left-3" />
            </div>
          </div>
        </li>

        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsFillPinMapFill className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">Address</span>
            </div>

            <div className="">
              <BiChevronRight className="text-white text-2xl relative left-3" />
            </div>
          </div>
        </li>
        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsFillQuestionCircleFill className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">Support & Live Chat</span>
            </div>

            <div className="">
              <BiChevronRight className="text-white text-2xl relative left-3" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default GeneralListValues;
