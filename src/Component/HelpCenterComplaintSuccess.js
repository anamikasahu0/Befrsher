import React from "react";
import HelpCenterHome from "../Images/HelpCenterHome.png";

const HelpCenterComplaintSuccess = () => {
  return (
    <section>
      <div className="flex gap-[3.75rem]  ">
        <div>
          {/* this section is for the image */}
          <img
            className=" mt-[1.88rem] w-[45.8125rem] h-[48.0625rem] "
            src={HelpCenterHome}
            alt="Help Center Image"
          />
          {/* this section is for the ticket card and buttons */}
        </div>
        <div className="flex flex-col  items-center mt-[14.38rem]">
          <div className="flex justify-center items-center   rounded-[0.625rem] w-[600px] h-[130px] bg-[#4BB543] p-4">
            <p className="w-[28.3125rem] j-[3.75rem]  text-white text-[1rem]">
              Success! Your complaint has been registered. Your ticket id is
              #xxxx, please save this for future reference. We appreciate your
              feedback and will address your concerns promptly.
            </p>
          </div>
          <div className="flex space-x-4 mt-[3.75rem]  ">
            <div className="mr-[3.75rem]">
              <button className="px-4 py-2 pl-[66.67px] pr-[66.67px] text-white rounded-[20px] bg-[#C40460] hover ">
                HOME
              </button>
            </div>
            <div>
              <button className=" px-4 py-2 pl-[66.67px] pr-[66.67px] text-white rounded-[20px] bg-[#C40460] hover">
                STATUS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterComplaintSuccess;
