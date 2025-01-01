import React from "react";
import hero from "../public/hero_dashboard_image.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="bg-[#0D121f] h-[100vh] w-[100%] sm:h-auto md:h-auto text-white pt-[100px] sm:px-[28px] md:px-[35px] overflow-clip sm:overflow-auto">
      <div className=" flex flex-col items-center justify-between sm:items-start h-[100%]">
        <h1 className="font-bold text-[72px] sm:text-[36px] md:text-[50px] text-center sm:text-left mt-[25px]">
          All your business
          <br /> expenses in one place.
        </h1>

        <h3 className="font-normal text-[24px] text-[#90A3BF] w-[35%] md:w-[100%] sm:w-[100%] text-center sm:text-left mt-[10px]">
          Your one-stop finance empower platform. Manage all your business
          expenses with our supafast app.
        </h3>

        <div className="flex flex-row sm:flex-col items-center gap-[24px] my-[20px] sm:my-[30px] sm:w-[100%]">
          <button className="bg-[#7C5CFC] px-[31.5px] py-[14px] rounded-[30px] sm:w-[100%]">
            Get a Free Demo
          </button>
          <button className="bg-[#1A202C] px-[24px] py-[13px] rounded-[30px] sm:w-[100%]">
            See Pricing
          </button>
        </div>

        <div className="w-[70%] sm:w-[100%] md:w-[100%]">
          <Image src={hero} alt="dashboard" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
