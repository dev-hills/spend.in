import React from "react";
import Image from "next/image";
import tick from "../public/tick-circle.svg";
import close from "../public/close-circle-dark.svg";
import { PricingCardProps } from "@/types";

const PricingCard = ({ data, enabled }: PricingCardProps) => {
  return (
    <div className="bg-[#E0E9F4] max-w-[384px] min-h-[710px] rounded-[12px] p-[32px] flex flex-col justify-between sm:w-[100%]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[12px]">
          <Image src={data.icon} alt="" width={32} height={32} />

          <h3 className="text-[#0D121F] font-semibold text-[32px]">
            {data.plan}
          </h3>
        </div>

        {data.isPopular && (
          <div className="bg-[#0D121F] w-[90px] h-[32px] rounded-[30px] px-[16px] py-[4px] flex items-center">
            Popular
          </div>
        )}
      </div>

      <p className="text-[#596780] font-normal text-[16px] mt-[12px]">
        {data.description}
      </p>

      <div>
        <h1 className="text-[#0D121F] font-semibold text-[40px] mt-[24px]">
          {enabled ? data.yearPrice : data.monthPrice}{" "}
          <span className="text-[#596780] font-medium text-[18px]">
            /{enabled ? "year" : "month"}
          </span>
        </h1>

        <p className="text-[#1A202C] font-normal text-[16px] mt-[24px] mb-[32px]">
          {data.details}
        </p>

        <div className="mb-[40px]">
          <div className="flex flex-col gap-[24px]">
            {data.perks.map((perk, index) => (
              <div key={index} className="flex flex-row items-start gap-[12px]">
                <Image src={tick} alt="" />
                <p className="text-[#0D121F] font-medium text-[18px]">{perk}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[24px] mt-[24px]">
            {data.noPerks?.map((perk, index) => (
              <div key={index} className="flex flex-row items-start gap-[12px]">
                <Image src={close} alt="" />
                <p className="text-[#0D121F] font-medium text-[18px]">{perk}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-[#7C5CFC] px-[24px] py-[13px] rounded-[30px] w-[100%] font-semibold ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
