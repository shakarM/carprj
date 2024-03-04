"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  function handleScroll() {}
  return (
    <div className="flex xl:flex-row  flex-col relative z-0 mx-auto">
      <div className=" pt-36 sm:px-16 px-6 text-right items-center">
        <h1 className=" 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          یەک ڕەینج ڕۆڤەر بکڕە و دانەیەک بە دیاری وەربگرە
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
          دانەیە بۆخۆت و دانەیەک بۆ کابرا
        </p>

        <button
          onClick={handleScroll}
          className="bg-blue-500 mt-2 p-1 rounded hover:bg-blue-600 text-white"
        >
          بینینی ئۆتۆمبێلەکان
        </button>
      </div>
      <div className="hero__image-container ">
        <div className="hero__image ">
          <Image src="/range.png" alt="hero" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
