import Image from "next/image";
import React from "react";
import logo from "../public/logo_with_name.svg";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed z-[10] bg-[#0D121f] w-[100%] px-[120px] sm:px-[28px] md:px-[35px] py-[24px] border-[1px] border-[#FFFFFF29] border-x-0 border-t-0 flex flex-row items-center justify-between">
      <Image src={logo} alt="logo" />

      <div className="sm:hidden md:hidden flex flex-row items-center gap-[40px]">
        <Link href="#" className="font-medium text-white flex gap-[6px]">
          Products
          <ChevronDown strokeWidth={1.5} />
        </Link>
        <Link href="#" className="font-medium text-white">
          Benefit
        </Link>
        <Link href="#" className="font-medium text-white">
          How it Works
        </Link>
        <Link href="#" className="font-medium text-white">
          Pricing
        </Link>
        <Link href="#" className="font-medium text-white flex gap-[6px]">
          Company
          <ChevronDown strokeWidth={1.5} />
        </Link>
      </div>

      <div className="sm:hidden md:hidden">
        <button className="text-[#c3d4e9] mr-[32px]">Login</button>

        <button className="bg-[#7C5CFC] px-[24px] py-[14px] rounded-[30px]">
          Get Demo
        </button>
      </div>

      <Menu strokeWidth={1.5} className="hidden sm:block md:block" />
    </div>
  );
};

export default Navbar;
