"use client";
import React, { useState } from "react";
import arrow from "../public/arrow.svg";
import Image from "next/image";
import { PricingData } from "@/types";
import PricingCard from "./PricingCard";

const data: PricingData[] = [
  {
    id: 1,
    icon: "/freePlan.svg",
    plan: "Free",
    description: "Perfect plan to get started",
    monthPrice: "$0",
    yearPrice: "$0",
    details: "A free plan grants you access to some cool features of Spend.In.",
    perks: ["Sync accross device", "5 workspace", "Collaborate with 5 user"],
    noPerks: ["Sharing permission", "Admin tools", "100+ integrations"],
  },
  {
    id: 2,
    isPopular: true,
    icon: "/proPlan.svg",
    plan: "Pro",
    description: "Perfect plan for professionals!",
    monthPrice: "$12",
    yearPrice: "$140",
    details:
      "For professional only! Start arranging your expenses with our best templates.",
    perks: [
      "Everything in Free Plan",
      "Unlimited workspace",
      "Collaborative workspace",
      "Sharing permission",
      "Admin tools",
      "100+ integrations",
    ],
  },
  {
    id: 3,
    icon: "/ultimatePlan.svg",
    plan: "Ultimate",
    description: "Best suits for great company!",
    monthPrice: "$33",
    yearPrice: "$390",
    details:
      "If you a finance manager at big  company, this plan is a perfect match.",
    perks: [
      "Everything in Pro Plan",
      "Daily performance reports",
      "Dedicated assistant",
      "Artificial intelligence",
      "Marketing tools & automations",
      "Advanced security",
    ],
  },
];

const Pricing = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="bg-white px-[120px] sm:px-[28px] md:px-[28px] py-[120px]">
      <div className="flex flex-col items-center justify-center sm:items-center">
        <h1 className="text-[#0D121F] font-bold text-[40px] sm:text-[30px]">
          Ready to Get Started?
        </h1>
        <p className="text-[#596780] font-normal text-[18px] mt-[24px] text-center w-[40%] sm:w-[100%] sm:text-center">
          Choose a plan that suits your business needs
        </p>
      </div>

      <div className="flex w-[100%] justify-center items-center sm:justify-center">
        <div className="flex flex-col items-end justify-end mt-[64px] mb-[20px]">
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <span className="text-[#0D121F] font-semibold text-[20px]">
              Monthly
            </span>
            <div
              onClick={() => setEnabled(!enabled)}
              className={`relative inline-flex items-center h-[38px] w-[70px] p-[4px] cursor-pointer transition-colors duration-200 ease-in-out rounded-[30px] bg-[#7C5CFC]`}
            >
              <span
                className={`h-[28px] w-[28px] transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
                  enabled ? "translate-x-[34px]" : "translate-x-1"
                }`}
              ></span>
            </div>
            <span className="text-[#0D121F] font-semibold text-[20px]">
              Yearly
            </span>
          </div>

          <div className="flex flex-row items-center gap-[3px]">
            <div className="text-[#0D121F] font-medium text-[14px] bg-[#E7DEFE] h-[29px] w-[89px] px-[12px] py-[4px] rounded-[30px] text-center">
              Save 65%
            </div>
            <Image src={arrow} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center sm:flex-col sm:gap-[40px] md:flex-col md:gap-[40px] mt-[40px]">
        {data.map((item) => (
          <PricingCard key={item.id} data={item} enabled={enabled} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
