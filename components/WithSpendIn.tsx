import Image from "next/image";
import React from "react";
import tick from "../public/tick-circle.svg";

const WithSpendIn = () => {
  return (
    <div className="">
      <h2 className="text-[#0D121F] font-bold text-[24px]">
        Track Business Expenses until its Milisecond
      </h2>

      <div className="flex flex-col items-start gap-[32px] mt-[32px]">
        <div className="flex flex-row items-start gap-[12px]">
          <Image src={tick} alt="" />
          <p className="text-[#0D121F] font-medium text-[18px]">
            Analyze your business cost easily with group transaction thorugh
            tagging feature.
          </p>
        </div>

        <div className="flex flex-row items-start gap-[12px]">
          <Image src={tick} alt="" />
          <p className="text-[#0D121F] font-medium text-[18px]">
            Add more than one card for payment. Integrated with more than 50+
            payment method and support bulk payment.
          </p>
        </div>

        <div className="flex flex-row items-start gap-[12px]">
          <Image src={tick} alt="" />
          <p className="text-[#0D121F] font-medium text-[18px]">
            Arrange your business expenses by date, name, etc., with just one
            click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithSpendIn;
