import Image from "next/image";
import React from "react";

const Luxury = () => {
  return (
    <>
      <div id="luxury" className="max-container ">
        <div className="md:flex md:gap-[16px] lg:gap-[112px]">
          <Image
            src="/luxury-img.png"
            alt="lux-Img"
            width={390}
            height={803}
            className="w-full md:w-1/2"
          />

          <div className="px-4 py-[185px]">
            <div className="flex flex-col items-center">
                <h4 className="dark:text-zinc-200 text-[#18181B] font-bold text-[38px]">
                  Seamless Luxury
                </h4>
              <div className="mt-[40px] ">
                <div className="dark:bg-[#323238] bg-[#696970] px-6 py-4 rounded-[32px] w-full mb-[40px]">
                  <h5 className="text-[#EAEAFD] font-semibold text-lg">
                    Tailored Itineraries
                  </h5>
                  <p className="text-[#B7B7C7] font-normal text-sm">
                    Travel designed to match your dreams and desires.
                  </p>
                </div>
                <div className="dark:bg-[#323238] bg-[#696970] px-6 py-4 rounded-[32px] mb-[40px]">
                  <h5 className="text-[#EAEAFD] font-semibold text-lg">
                    Private Residences
                  </h5>
                  <p className="text-[#B7B7C7] font-normal text-sm">
                    Stay in the world`&apos;`s most exclusive homes.
                  </p>
                </div>
                <div className="dark:bg-[#323238] bg-[#696970] px-6 py-4 rounded-[32px]">
                  <h5 className="text-[#EAEAFD] font-semibold text-lg">
                    Concierge Service
                  </h5>
                  <p className="text-[#B7B7C7] font-normal text-sm">
                    Attentive experts cater to your every need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Luxury;