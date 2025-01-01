import Image from "next/image";
import React from "react";
import benefit_1 from "../public/benefit_img_1.svg";
import benefit_2 from "../public/benefit_img_2.svg";
import benefit_3 from "../public/benefit_img_3.svg";

const Benefits = () => {
  return (
    <div className="w-[100%] bg-white p-[120px] sm:px-[28px] md:px-[35px]">
      <div>
        <h3 className="text-[15px] text-[#7C5CFC]">WHY USE SPEND.IN</h3>

        <div className="w-[70%] sm:w-[100%] mt-[12px] flex flex-row sm:flex-col sm:items-start items-center justify-between">
          <h1 className="text-[#040815] font-bold text-[35px] w-[30%] sm:w-[80%] sm:text-[25px]">
            Easy, Simple, Affordable
          </h1>
          <p className="text-[#596780] w-[45%] sm:w-[100%] sm:mt-[12px]">
            Our platform helps your business in managing expenses. These are
            some of the reasons why you shou6ld use our platform in managing
            business finances.
          </p>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col items-center justify-between mt-[64px] sm:w-[100%] gap-[20px] md:gap-[40px] md:items-start">
        <div className="w-[386px] sm:max-w-[100%] min-h-[528px]">
          <Image src={benefit_1} alt="" />

          <h3 className="text-[#040815] text-[20px] font-semibold mt-[24px] mb-[12px]">
            Automatic Invoice Payment
          </h3>
          <p className="text-[#596780] text-[15px] font-normal">
            No need to pay manually, we provide automatic invoice payment
            service! Set a payment schedule and you&apos;re done, it&apos;s that
            easy!
          </p>
        </div>

        <div className="w-[386px] sm:max-w-[100%] min-h-[528px]">
          <Image src={benefit_2} alt="" />

          <h3 className="text-[#040815] text-[20px] font-semibold mt-[24px] mb-[12px]">
            Clear payment history
          </h3>
          <p className="text-[#596780] text-[15px] font-normal">
            Still writing manual expenses? Our platform breaks down every
            expense you log down to the millisecond!
          </p>
        </div>

        <div className="w-[386px] sm:max-w-[100%] min-h-[528px]">
          <Image src={benefit_3} alt="" />

          <h3 className="text-[#040815] text-[20px] font-semibold mt-[24px] mb-[12px]">
            Use of multi-card payments
          </h3>
          <p className="text-[#596780] text-[15px] font-normal">
            Have more than 1 bank account or credit/debit card? Our platform is
            already integrated with many banks around the world, for easier
            payments!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
