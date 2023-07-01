import { FiMoreVertical } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";
import ChatBG from "../../assets/chat.jpg";
import { FaTelegramPlane } from "react-icons/fa";

function ChatText() {
  const chatStyle = {
    backgroundImage: `url(${ChatBG})`,
    backgroundSize: "cover",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  };

  return (
    <div className="flex flex-col">
      {/* < -- Message / Conversation UI Code  --> */}
      <div className="p-3 mt-2 mx-4 bg-[#222222] flex flex-row justify-between gap-4 items-center  rounded-tl-lg rounded-tr-lg">
        <div className="flex gap-4 items-center">
          <BsChevronLeft className="text-white inline" />
          <img
            className="w-8 rounded-full inline ml-1"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPIRkT-ljpc-MjaxoyUPo0TCZiYwbWynl1LGjumrh1RtvOwj4ANIQCayNYkRMCskv-SE&usqp=CAU"
            }
            alt=""
          />
          <h4 className="text-white">Humza Sajid</h4>
        </div>
        <div className="">
          <FiMoreVertical className="text-white" />
        </div>
      </div>

      <div className="px-4 ">
        <div style={chatStyle}>
          <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex flex-col mt-5">
              <div className="flex justify-start mb-4">
                <div className="w-3/4 ml-2 py-2 px-2 bg-white rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-gray-700">
                  <div className="flex bg-gray-100 h-16 rounded-lg">
                    <div className="bg-[#ADF430]   w-2"></div>
                    <div className="w-full flex flex-col ml-4  justify-center gap-2">
                      <div>
                        <h5 className="text-[#ADF430] text-xs">THU</h5>
                      </div>

                      <div>
                        <h5 className="text-gray-500 text-sm">
                          Sit voulterpam?
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <span className="text-gray-700">
                      dolormarquee landiutum , totam ray?
                    </span>
                    <div className="flex justify-between mt-1">
                      <h5 className="text-gray-400 text-xs">6:30</h5>
                      <h5 className="text-gray-400 text-xs">see translation</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-start mb-4">
                <div className="w-3/4 ml-2 py-2 px-2 bg-white rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-gray-700">
                  <div className="flex bg-gray-100 h-18 rounded-lg">
                    <img
                      className="w-full rounded-md"
                      src="https://www.absservice.com.au/wp-content/uploads/slider-electrical.jpg"
                      alt=""
                    />
                  </div>

                  <div className="mt-2">
                    <span className="text-gray-700">
                      dolormarquee landiutum , totam ray?
                    </span>
                    <div className="flex justify-between mt-1">
                      <h5 className="text-gray-400 text-xs">6:30</h5>
                      <h5 className="text-gray-400 text-xs">see translation</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-4">
                <div>
                  <div className="mr-2 py-3 px-4 bg-[#ADF430] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    I am preparing for this project
                  </div>
                  <div className="mt-4 mr-2 py-3 px-4 bg-[#ADF430] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    Okay, i will be there tomarrow
                  </div>
                </div>
              </div>
              <div className="flex justify-start mb-4">
                <div className="ml-2 py-3 px-4 text-gray-700 bg-white rounded-br-xl rounded-tr-xl rounded-tl-xl">
                  Good morning, did you sleep well?
                  <div className="flex justify-between mt-1">
                    <h5 className="text-gray-400 text-xs">9:45</h5>
                    <h5 className="text-gray-400 text-xs">see translation</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* < --Input Text / Message UI Code  --> */}
            <div className="py-3 flex items-center justify-between shadow-md bg-[#222222]   gap-2 mb-4">
              <div className="w-4/5 ml-6">
                <input
                  className="w-full bg-[#222222]  rounded-xl text-gray-100 text-sm"
                  type="text"
                  value="Write A Message..."
                />
              </div>

              <div className=" w-1/5 flex items-center  justify-center">
                <button className="bg-[#ADF430] p-2 rounded-full  ">
                  <FaTelegramPlane className="text-white text-center" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatText;
