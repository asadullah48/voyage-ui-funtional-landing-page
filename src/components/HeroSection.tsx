import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="max-container w-full min-h-[600px] bg-no-repeat bg-cover bg-hero-bg-img flexCenter">
   
        <div className="w-[358px] h-[385px] md:min-w-[720px] md:h-[255px]
          bg-zinc-200 dark:bg-[#18181B] md:py-6 md:px-[74px] py-6 px-8 rounded-[32px]">
          <div className="flex flex-col flexCenter text-center">
            <h1 className="dark:text-zinc-200 text-[#18181B] text-[51px] font-bold leading-[62px]">
              Embark on Elegance
            </h1>
            <p className="dark:text-[#B7B7C7] text-[#74747c] text-[22px] font-normal pt-2">
              Bespoken Journeys Await
            </p>

            <div className="flex md:gap-1 gap-4 mt-8 flex-col md:flex-row w-full md:justify-center">
              <Button
                title="Discover More"
                type="button"
                className="bg-[#FFD015] text-[#111827] font-semibold text-sm rounded-[8px] py-4 px-[52px]"
              />
              <Button
                title="Learn Elegance"
                type="button"
                className="dark:text-zinc-200 text-[#18181B] bg-transparent font-semibold text-sm rounded-[8px] dark:border-zinc-200 border-zinc-900 border-[1px] py-4 px-[50px]"
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;