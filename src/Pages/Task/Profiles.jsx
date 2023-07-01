import NotFound from "../../assets/notfound.png";
function Profiles({ text, data }) {
  return (
    <div className="flex flex-wrap gap-2 flex-row items-center  mt-4 w-full">
      {/* < -- If there is not input [Default state] then this code will run */}

      {text === ""
        ? data?.map((data, index) => {
            return (
              <div key={index}>
                <div className="flex gap-2 items-center w-72 sm:w-64">
                  <div className="">
                    <img
                      className="w-14  h-14 rounded-full"
                      src={data.profilePic}
                      alt="profile_pic"
                    />
                  </div>

                  <div className=" flex flex-col justify-around  text-center ">
                    <div className="w-full flex justify-around items-center ">
                      <h5 className="text-white text-center inline">
                        {data.name}
                      </h5>
                      <h5 className="text-gray-200 text-center inline text-xs">
                        02:50 PM
                      </h5>
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <div>
                        <p className="text-gray-200 text-left text-xs" />
                      </div>
                      <div className="text-gray-200 text-left text-xs">
                        {data.message}
                      </div>
                      <div className="">
                        {data.unread !== 0 ? (
                          <span className="flex bg-[#ADF430] text-xs text-gray-100 rounded-full p-0 w-4 h-4 ml-2 text-center items-center justify-center">
                            {data.unread}
                          </span>
                        ) : undefined}
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-t border-white border-opacity-30 my-4" />
              </div>
            );
          })
        : data?.length === 0
        ? ({
            /* < -- If search query is empty / relevent data not found this component will render */
          },
          (
            <>
              <img src={NotFound} alt="" className="w-1/2 block m-auto" />
              <p className="text-gray-300 text-xl text-center">
                No matching result found
              </p>
            </>
          ))
        : /* < -- This component will render query result */
          data.map((data, index) => (
            <>
              <div key={index}>
                <div className="flex gap-2 items-center w-64">
                  <div className="">
                    <img
                      className="w-14 rounded-full"
                      src={data.profilePic}
                      alt="profile_pic"
                    />
                  </div>

                  <div className=" flex flex-col  justify-around  text-center ">
                    <div className="w-full flex justify-around items-center ">
                      <h5 className="text-white text-center inline">
                        {data.name}
                      </h5>
                      <h5 className="text-gray-200 text-center inline text-xs">
                        02:50 PM
                      </h5>
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-200 text-left text-xs">
                        {data.message}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-t border-white border-opacity-30 my-4" />
              </div>
            </>
          ))}
    </div>
  );
}

export default Profiles;
