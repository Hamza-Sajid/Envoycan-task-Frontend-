import ProfileContainer from "../Task/Profiles";
import ChatText from "../Task/ChatText";
import { useState } from "react";

function ChatContent() {
  const existingData = [
    {
      name: "Adnan ",
      profilePic:
        "https://storage.prompt-hunt.workers.dev/clfcw04gp0010la087af79z0o_1",
      message: "Hello, how are you?",
      unread: 0,
    },
    {
      name: "Mubashir ",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7l_8AWtSuUS7vhAVWZvk_oJ68_me3X4LnJwyj8-7l3QblN6xiejiZG4o30-7qN9Kfc8s&usqp=CAU",
      message: "Wating for you at LUMS",
      unread: 0,
    },
    {
      name: "Humza",
      profilePic:
        "https://i.pinimg.com/736x/a6/95/af/a695af21d0b1370fd928ba1b352a2d91--great-beards-bearded-men.jpg",
      message: "Plans for the weekend?",
      unread: 2,
    },
    {
      name: "Farhan",
      profilePic:
        "https://cc-prod.scene7.com/is/image/CCProdAuthor/portrait-photography_P6b_379x392?$pjpeg$&jpegSize=100&wid=378",
      message: "Where are you going?",
      unread: 0,
    },
    {
      name: "Noor",
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtT2dza06Tqd4-EBnpTcXUqRnWu5l5tDq6A&usqp=CAU",
      message: "See you at NUST campus",
      unread: 5,
    },
  ];

  const dataArray = [];

  for (let i = 0; i < 5; i++) {
    dataArray.push(existingData[i]);
  }

  const [searchText, setSearchText] = useState("");
  const filteredData = dataArray.filter((data) =>
    data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="bg-[#363636] shadow-lg rounded-lg   sm:flex ">
      <div className="sm:w-2/6 w-full  px-4 py-2">
        <div className="mt-1 bg-[#222222] rounded-xl">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-100"
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
              className="block p-4 pl-10 w-full text-sm  bg-transparent text-gray-100 rounded-lg border border-none focus:border-gray-700  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-transparent focus:outline-none "
              placeholder="Search"
              value={searchText}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className=" w-full  sm:w-60">
          {/* < -- Component to render DATA array values on screen
            we are passing 2 props values here to make dynamic look
          --> */}

          <ProfileContainer text={searchText} data={filteredData} />
        </div>
      </div>

      <div className="w-full">
        {/* < -- This Component will render the chat ui       --> */}
        <ChatText />
      </div>
    </div>
  );
}

export default ChatContent;
