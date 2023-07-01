import React from "react";

function ProfileContainerUnRead() {
  return (
    <div className="">
      <div className="flex gap-2 flex-row items-center  mt-4 w-full">
        <div className="">
          <img
            className="w-14 rounded-full"
            src={
              "https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-12.jpg"
            }
            alt=""
          />
        </div>
        <div className=" flex flex-col  justify-around  text-center ">
          <div className="w-full flex justify-around items-center ">
            <h5 className="text-white text-center inline">Kashif Abass</h5>
            <h5 className="text-gray-200 text-center inline text-xs">
              02:50 PM
            </h5>
          </div>
          <div className="mt-2">
            <p className="text-gray-200 text-left text-xs ">
              Contact me on my number
              <span className="bg-[#ADF430] text-white rounded-full p-1 ml-2">
                7+
              </span>
            </p>
            {/* <span className="inline p-2 bg-[#ADF430] text-white rounded-full">
              <h5>7</h5>
            </span> */}
          </div>
        </div>
      </div>
      <hr className="border-t border-white border-opacity-30 my-4" />
    </div>
  );
}

export default ProfileContainerUnRead;
