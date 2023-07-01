import { BiChevronRight } from "react-icons/bi";

import {
  BsFillFileEarmarkTextFill,
  BsFillInfoCircleFill,
  BsFillShieldLockFill,
  BsFillStarFill,
  BsHammer,
} from "react-icons/bs";

function AboutAppValues() {
  return (
    <nav>
      <ul>
        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsFillShieldLockFill className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">Privacy & Policy</span>
            </div>

            <div className="">
              <BiChevronRight className="text-white text-2xl relative left-3" />
            </div>
          </div>
        </li>
        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsFillFileEarmarkTextFill className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">Terms & Conditions</span>
            </div>

            <div className="">
              <BiChevronRight className="text-white text-2xl relative left-3" />
            </div>
          </div>
        </li>
        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsHammer className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">Legal Notices</span>
            </div>

            <div className="">
              <BiChevronRight className="text-white text-2xl relative left-3" />
            </div>
          </div>
        </li>

        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsFillInfoCircleFill className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">About Us</span>
            </div>

            <div className="">
              <BiChevronRight className="text-white text-2xl relative left-3" />
            </div>
          </div>
        </li>
        <li>
          <div className=" flex w-11/12 items-center mt-4 ">
            <div className="w-5/6 flex items-center">
              <BsFillStarFill className="text-gray-400 text-xs inline mr-2" />{" "}
              <span className="text-gray-300">Rate Us</span>
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

export default AboutAppValues;
