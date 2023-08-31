import React from "react";
import HelpCenterHome from "../Images/HelpCenterHome.png";
import ArrowRight from "../Images/ArrowRight.svg";

function BodyHelpCenterHome() {
  return (
    <section>
      <div className="flex gap-[1.87rem]  ">
        <img
          className=" mt-[1.88rem] w-[45.8125rem] h-[48.0625rem] "
          src={HelpCenterHome}
          alt="Help Center Image"
        />
        <div className="flex-col mt-[12.5rem]">
          <div className=" flex-col mb-[1.88rem] ">
            <h1 className="  text-[1rem] font-medium uppercase">
              More queries related to your experience
            </h1>
            <div className=" mt-[1.88rem] border w-[43.875rem] border-[#E7E7E7]"></div>
          </div>
          <div className="mb-[1.88rem] ">
            <div className="flex justify-between">
              <p className="text-[#8A8A8A]">payment/Refund</p>
              <ul className="flex ">
                <img clasName="   " src={ArrowRight} alt="arrowdownlogo" />
              </ul>
            </div>
            <div className="mt-[1.88rem] border w-[43.875rem] border-[#E7E7E7]"></div>
          </div>
          <div className="mb-[1.88rem] ">
            <div className="flex justify-between">
              <p className="text-[#8A8A8A]">Offers / Discounts / Coupons</p>
              <ul className="flex ">
                <img clasName="   " src={ArrowRight} alt="arrowdownlogo" />
              </ul>
            </div>
            <div className="mt-[1.88rem] border w-[43.875rem] border-[#E7E7E7]"></div>
          </div>
          <div className="mb-[1.88rem]">
            <div className="flex justify-between">
              <p className="text-[#8A8A8A]">Manage Your Account</p>
              <ul className="flex ">
                <img clasName="   " src={ArrowRight} alt="arrowdownlogo" />
              </ul>
            </div>
            <div className="mt-[1.88rem] border w-[43.875rem] border-[#E7E7E7]"></div>
          </div>
          <div className="mb-[1.88rem]">
            <div className="flex justify-between">
              <p className="text-[#8A8A8A]">Other</p>
              <ul className="flex ">
                <img clasName="   " src={ArrowRight} alt="arrowdownlogo" />
              </ul>
            </div>
            <div className="mt-[1.88rem] border w-[43.875rem] border-[#E7E7E7]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodyHelpCenterHome;
