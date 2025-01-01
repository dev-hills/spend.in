"use client";

import React, { useState } from "react";
import WithSpendIn from "./WithSpendIn";
import WithoutSpendIn from "./WithoutSpendIn";
import Image from "next/image";
import withImg from "../public/withSpendIn.svg";
import withoutImg from "../public/withoutSpendIn.svg";

const SuccessStories = () => {
  const [toggleActive, setToggleActive] = useState<string>("first");
  return (
    <div className="bg-white px-[120px] sm:px-[28px] md:px-[28px] py-[120px] w-[100%]">
      <div>
        <p className="font-semibold text-[#7C5CFC] ">INCREASE PRODUCTIVITY</p>
        <h1 className="text-[#0D121F] font-bold text-[40px] sm:text-[25px] w-[60%] mt-[12px] sm:w-[100%] md:w-[100%]">
          Reduce Time in Doing Manual Work Managing Expenses
        </h1>
      </div>

      <div className="mt-[64px] sm:mt-[32px] flex flex-row sm:flex-col md:flex-col items-start justify-between w-[100%]">
        <div className="w-[45%] sm:w-[100%] md:w-[100%] flex flex-col sm:mb-[47px] md:mb-[30px]">
          <div className="w-auto sm:w-[100%] md:w-[60%] bg-[#E0E9F4] rounded-[30px] ">
            <button
              onClick={() => setToggleActive("first")}
              className={`px-[24px] py-[13px] rounded-[30px] w-[50%] sm:text-[14px] sm:px-[10px] md:px-[15px] ${
                toggleActive === "first"
                  ? "bg-[#7C5CFC] text-white"
                  : "text-[#90A3BF]"
              }`}
            >
              With Spend.In
            </button>
            <button
              onClick={() => setToggleActive("second")}
              className={`px-[24px] py-[13px] rounded-[30px] w-[50%] sm:text-[14px] sm:px-[10px] md:px-[15px] ${
                toggleActive === "second"
                  ? "bg-[#7C5CFC] text-white"
                  : "text-[#90A3BF]"
              }`}
            >
              Without Spend.In
            </button>
          </div>

          <div className="mt-[48px]">
            {toggleActive === "first" ? <WithSpendIn /> : <WithoutSpendIn />}
          </div>
        </div>

        {toggleActive === "first" ? (
          <Image src={withImg} alt="" className="md:mx-auto"/>
        ) : (
          <Image src={withoutImg} alt="" className="md:mx-auto"/>
        )}
      </div>
    </div>
  );
};

export default SuccessStories;
