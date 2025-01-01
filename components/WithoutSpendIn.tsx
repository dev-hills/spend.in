import Image from "next/image";
import React from "react";
import redTick from "../public/close-circle.svg";

const WithoutSpendIn = () => {
  return (
    <div className="">
      <h2 className="text-[#0D121F] font-bold text-[24px]">
        Taking too long to tidy up administrative files makes it unproductive
      </h2>

      <div className="flex flex-col items-start gap-[32px] mt-[32px]">
        <div className="flex flex-row items-start gap-[12px]">
          <Image src={redTick} alt="" />
          <p className="text-[#0D121F] font-medium text-[18px]">
            Complex recording process due to every administrative file in a
            different place.
          </p>
        </div>

        <div className="flex flex-row items-start gap-[12px]">
          <Image src={redTick} alt="" />
          <p className="text-[#0D121F] font-medium text-[18px]">
            Need more effort to pay manually one by one invoice because there is
            no payment accommodation.
          </p>
        </div>

        <div className="flex flex-row items-start gap-[12px]">
          <Image src={redTick} alt="" />
          <p className="text-[#0D121F] font-medium text-[18px]">
            Manual data arranging needs a long time because the different
            months/years are not in the same place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithoutSpendIn;
