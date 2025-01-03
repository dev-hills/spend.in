import Image from "next/image";
import React from "react";
import cta from "../public/cta-image.svg";

const CallToAction = () => {
  return (
    <div className="relative w-[100%] pt-[120px] flex flex-row sm:flex-col md:flex-col items-start md:items-end sm:items-end justify-between">
      <div className="ml-[120px] sm:ml-[0px] sm:px-[28px] md:px-[28px] md:ml-[0px] sm:w-[100%] md:w-[100%] sm:mb-[72px] md:mb-[72px] w-[40%]">
        <p className="font-semibold text-[20px] text-[#7C5CFC]">
          DOWNLOAD NOW!
        </p>

        <h1 className="font-bold text-[40px] text-[#FFF] mt-[12px]">
          Start Track Your Business Expenses Today
        </h1>

        <p className="font-normal text-[20px] text-[#596780] mt-[24px]">
          Are you ready to make your business more organized? Download Spend.In
          now!
        </p>

        <button className="px-[24px] py-[13px] bg-[#7C5CFC] rounded-[30px] font-semibold text-[16px] mt-[32px] sm:w-[100%]">
          Get a Free Demo
        </button>
      </div>

      <div className="sm:pl-[28px] md:pl-[28px]">
        <Image src={cta} alt="" />
      </div>
    </div>
  );
};

export default CallToAction;
