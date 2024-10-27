import Image from "next/image";
import React from "react";

const Client = () => {
  return (
    <div className="padding-container max-container pb-[70px] xl:px-8">
      <h3 className="font-bold text-[51px] dark:text-zinc-200 text-[#18181B]">Client Praise</h3>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-10 ">
        <div className="bg-[#323238] rounded-[32px] px-6 py-6 w-full">
          <div className="lg:flex lg:items-start gap-2">
            <div className="lg:flex lg:flex-col ">
              <Image
                src="/client-img1.png"
                alt="client"
                width={120}
                height={120}
              />
              <h6 className="font-semibold text-sm text-[#EAEAFD] pt-2">
                Julia St. James, CEO
              </h6>
            </div>
            <p className="font-normal text-sm text-[#B7B7C7] pt-4">
              “The attention to detail and personalized service made our trip
              unforgettable.”
            </p>
          </div>
        </div>
        <div className="bg-[#323238] rounded-[32px] px-6 py-6  w-full">
          <div className="lg:flex lg:items-start">
            <div className="lg:flex lg:flex-col">
              <Image
                src="/client-img2.png"
                alt="client"
                width={120}
                height={120}
              />
              <h6 className="pt-2 font-semibold text-sm text-[#EAEAFD] ">
                David Thompson, Artisan
              </h6>
            </div>

            <p className="pt-4 font-normal text-sm text-[#B7B7C7] ">
              “Each experience is thoughtfully crafted, leaving us in awe every
              time.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;