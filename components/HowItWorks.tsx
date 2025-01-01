import React from "react";
import how_it_works_1 from "../public/how_it_works_1.svg";
import how_it_works_2 from "../public/how_it_works_2.svg";
import how_it_works_3 from "../public/how_it_works_3.svg";
import Image from "next/image";
import "../app/globals.css";

const HowItWorks = () => {
  return (
    <div className="bg-white">
      <div className="w-[100%] overflow-hidden leading-[0] -mb-2">
        <svg
          className="relative block h-[100px] w-[calc(100%_+_1.3px)] transform -rotate-180"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#0D121F]"
          ></path>
        </svg>
      </div>

      <div className="sm:px-[28px] relative bg-[#0D121f] py-[120px] flex flex-col items-center sm:items-start">
        <div className="flex flex-col items-center justify-center sm:items-start">
          <h3 className="text-[#7c5cfc] font-medium text-[16px]">
            HOW IT WORKS
          </h3>
          <h1 className="text-[#fff] font-bold text-[40px] sm:text-[30px] mt-[12px]">
            Few Easy Steps and Done
          </h1>
          <p className="text-[#90A3BF] font-normal text-[18px] mt-[24px] text-center sm:text-left w-[40%] sm:w-[100%]">
            In just few easy step, you are all set to manage your business
            finances. Manage all expenses with Spend.In all in one place.
          </p>
        </div>

        <div className="flex flex-row sm:flex-col items-center gap-[148px] sm:gap-[50px] md:gap-[10px] mt-[40px] sm:justify-center sm:mx-auto md:mx-auto md:items-start">
          <div className="relative w-auto max-w-[225px] sm:max-w-[100%] flex flex-col items-center h-[300px]">
            <Image src={how_it_works_1} alt="" />
            <p className="text-white text-[20px] font-medium text-center mt-[24px] w-[90%] ml-auto">
              Register your Spend.In account.
            </p>
          </div>

          <div className="relative w-auto max-w-[225px] sm:max-w-[100%] flex flex-col items-center h-[300px]">
            <Image src={how_it_works_2} alt="" />
            <p className="text-white text-[20px] font-medium text-center mt-[24px] w-[90%] ml-auto">
              Fill in the list of your business expenses.
            </p>
          </div>

          <div className="relative w-auto max-w-[225px] sm:max-w-[100%] flex flex-col items-center h-[300px]">
            <Image src={how_it_works_3} alt="" />
            <p className="text-white text-[20px] font-medium text-center mt-[24px] w-[90%] ml-auto">
              Done, let’s continue the work.
            </p>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center gap-[24px] my-[20px] sm:my-[50px] sm:w-[100%] mt-[64px]">
          <button className="bg-[#7C5CFC] px-[31.5px] py-[14px] rounded-[30px] sm:w-[100%]">
            Get a Free Demo
          </button>
          <button className="bg-[#1A202C] px-[24px] py-[13px] rounded-[30px] sm:w-[100%]">
            See Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
