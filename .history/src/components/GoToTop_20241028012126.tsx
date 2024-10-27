"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 250;
    const winSrcoll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winSrcoll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={goToBtn}
          className="hidden md:fixed md:bottom-5 md:right-5 md:block z-50 bg-[#FFD015] p-3 rounded-full shadow-lg hover:bg-[#FFC200] transition-colors"
>
          <Image
            src={"/goto.svg"}
            alt="goto"
            width={30}
            height={30}
            className="animate-bounceVertical"
          />
        </button>
      )}
    </>
  );
};

export default GoToTop;