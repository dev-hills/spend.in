import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo_with_name_dark.svg";

const Footer = () => {
  const date = new Date();
  return (
    <div className="bg-white p-[120px] sm:p-[28px] md:p-[28px]">
      <div className="mb-[64px] flex flex-row sm:flex-col md:flex-col md:gap-[48px] sm:gap-[48px] items-start justify-between">
        <div className="w-[188px]">
          <Image src={logo} alt="" />

          <p className="text-[#596780] font-normal text-[18px] mt-[32px]">
            Data visualization, and expense management for your business.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 md:gap-y-[35px] gap-x-[72px] sm:gap-x-[35px] sm:gap-y-[32px]">
          <div>
            <h1 className="text-[#1A202C] text-[20px] font-semibold">
              Product
            </h1>

            <div className="flex flex-col items-start gap-[24px] mt-[32px]">
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Digital Invoice
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Insights
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Reimbursements
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Virtual Assistant
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Artificial Intelligence
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-[#1A202C] text-[20px] font-semibold">
              Company
            </h1>

            <div className="flex flex-col items-start gap-[24px] mt-[32px]">
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                About Us
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Newsletters
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Our Partners
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Career
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-[#1A202C] text-[20px] font-semibold">
              Resources
            </h1>

            <div className="flex flex-col items-start gap-[24px] mt-[32px]">
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Blog
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Pricing
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                FAQ
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Events
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Ebook & Guide
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-[#1A202C] text-[20px] font-semibold">
              Follow Us
            </h1>

            <div className="flex flex-col items-start gap-[24px] mt-[32px]">
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                LinkedIn
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Twitter
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Instagram
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                Facebook
              </Link>
              <Link href="#" className="text-[#596780] font-normal text-[16px]">
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[1px] bg-[#CEBEFE]" />

      <div className="flex flex-row sm:flex-col md:flex-col items-center sm:items-start md:items-start justify-between mt-[32px] sm:gap-[48px] md:gap-[48px]">
        <div className="flex flex-row sm:flex-col gap-[32px] md:flex-col">
          <Link href="#" className="text-[#1A202C] text-[18px] font-semibold">
            Privacy Policy
          </Link>
          <div className="w-[2px] h-[27px] bg-[#1A202C] sm:hidden md:hidden" />
          <Link href="#" className="text-[#1A202C] text-[18px] font-semibold">
            Terms & Conditions
          </Link>
          <div className="w-[2px] h-[27px] bg-[#1A202C] sm:hidden md:hidden" />
          <Link href="#" className="text-[#1A202C] text-[18px] font-semibold">
            Cookie Policy
          </Link>
        </div>

        <div className="text-[#596780] font-medium text-[16px]">
          &copy; Picko Lab {date.getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
