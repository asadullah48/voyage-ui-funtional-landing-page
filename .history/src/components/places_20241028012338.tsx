import React from "react";
import { DESTINATIONS } from "../../constants/index";
import Image from "next/image";

const Places = () => {
  return (
    <div id="places" className=" max-container px-1 lg:px-[40px] pb-[120px] flex-col items-center flex text-center">
      <h2 className="dark:text-zinc-200 text-[#18181B] leading-[62px] text-[51px] font-bold px-24">
        Destinations Extraordinaire
      </h2>
      <p className="font-normal text-[18px] pt-1 dark:text-[#B7B7C7] text-[#74747c]">Curated With Sophistication</p>

      <div className="grid pt-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {DESTINATIONS.map((dest) => (
          <div key={dest.title}>
            <div className="dark:bg-[#323238] bg-[#696970] rounded-2xl">
              <Image
                src={dest.placeImg}
                alt="place"
                width={282}
                height={312}
                className="w-full rounded-t-2xl"
              />

              <div className="text-start  py-4 px-4">
                <h6 className="font-semibold text-sm text-[#EAEAFD] ">{dest.title}</h6>
                <p className="font-normal text-sm text-[#EAEAFD]">{dest.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;

