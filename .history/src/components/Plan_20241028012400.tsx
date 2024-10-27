import Image from "next/image";
import React from "react";
import Button from "./Button";
import Journey  from '../../public/journey-img.png'

const Plan = () => {
  return (
    <div id="plan" className="max-container  py-[144px] padding-container">
      <div className="flex flex-col items-center w-full  md:flex-row md:justify-center md:gap-x-32">
        <Image src={Journey} alt="journey" />
        <div className="flex-col flex items-center">
          <div className="md:text-start text-center">
            <h4 className="dark:text-zinc-200 text-[#18181B] font-bold text-[51px] ">
              Start Your Journey
            </h4>
            <p className="font-normal pt-3 text-sm dark:text-[#EAEAFD] text-[#74747c]">
              Connect with our travel concierges today.
            </p>
          </div>

          <Button
            type="button"
            title="Plan Now"
            className="bg-[#FFD015] text-[#111827] font-semibold text-sm md:w-full rounded-[8px] py-4 px-[52px] mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;