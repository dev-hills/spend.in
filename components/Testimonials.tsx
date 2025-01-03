"use client";
import Image from "next/image";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  description: string;
  name: string;
  role: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "It's just incredible!",
    description:
      "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    name: "Jimmy Bartney",
    role: "Product Manager at Picko Lab",
    image: "/testimonial_1.svg",
  },
  {
    id: 2,
    title: "Satisfied User Here!",
    description:
      "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    name: "Natasha Romanoff",
    role: "Black Widow",
    image: "/testimonial_2.svg",
  },
  {
    id: 3,
    title: "No doubt, Spend.In is the best!",
    description:
      "“The best”! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    name: "Moritika Kazuki",
    role: "Finance Manager at Mangan",
    image: "/testimonial_3.svg",
  },
  {
    id: 4,
    title: "It's just incredible!",
    description:
      "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    name: "Jimmy Bartney",
    role: "Product Manager at Picko Lab",
    image: "/testimonial_1.svg",
  },
  {
    id: 5,
    title: "Satisfied User Here!",
    description:
      "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    name: "Natasha Romanoff",
    role: "Black Widow",
    image: "/testimonial_2.svg",
  },
  {
    id: 6,
    title: "No doubt, Spend.In is the best!",
    description:
      "“The best”! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    name: "Moritika Kazuki",
    role: "Finance Manager at Mangan",
    image: "/testimonial_3.svg",
  },
  {
    id: 7,
    title: "It's just incredible!",
    description:
      "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    name: "Jimmy Bartney",
    role: "Product Manager at Picko Lab",
    image: "/testimonial_1.svg",
  },
  {
    id: 8,
    title: "Satisfied User Here!",
    description:
      "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    name: "Natasha Romanoff",
    role: "Black Widow",
    image: "/testimonial_2.svg",
  },
  {
    id: 9,
    title: "No doubt, Spend.In is the best!",
    description:
      "“The best”! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    name: "Moritika Kazuki",
    role: "Finance Manager at Mangan",
    image: "/testimonial_3.svg",
  },
  {
    id: 10,
    title: "It's just incredible!",
    description:
      "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    name: "Jimmy Bartney",
    role: "Product Manager at Picko Lab",
    image: "/testimonial_1.svg",
  },
  {
    id: 11,
    title: "Satisfied User Here!",
    description:
      "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    name: "Natasha Romanoff",
    role: "Black Widow",
    image: "/testimonial_2.svg",
  },
  {
    id: 12,
    title: "No doubt, Spend.In is the best!",
    description:
      "“The best”! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    name: "Moritika Kazuki",
    role: "Finance Manager at Mangan",
    image: "/testimonial_3.svg",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#0D121f] px-[120px] sm:px-[20px] md:px-[28px] py-[120px]">
      <div className="flex flex-col items-center justify-center sm:items-start">
        <h3 className="text-[#7c5cfc] font-medium text-[16px]">
          WHAT THEY SAY
        </h3>
        <h1 className="text-[#fff] font-bold text-[40px] sm:text-[30px] mt-[12px]">
          Our User Kind Words
        </h1>
        <p className="text-[#90A3BF] font-normal text-[18px] mt-[24px] text-center sm:text-left w-[40%] sm:w-[100%]">
          Here are some testimonials from our user after using Spend.In to
          manage their business expenses.
        </p>
      </div>

      <Carousel className="relative flex flex-col mt-[64px]">
        <CarouselContent className="-ml-5">
          {carouselData.map((item) => (
            <CarouselItem
              className="basis-1/3 md:basis-1/2 sm:basis-[100%]"
              key={item.id}
            >
              <div className="bg-[#1A202C] w-[374px] p-[32px] rounded-[12px] h-[363px] flex flex-col justify-between items-center sm:p-[20px]">
                <div>
                  <h3 className="text-[18px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-[16px] font-medium text-[#E0E9F4] mt-[16px]">
                    {item.description}
                  </p>
                </div>

                <div className="w-[100%]">
                  <div className="w-full h-[0.5px] bg-[#90A3BF] opacity-20 mb-[32px]"></div>

                  <div className="flex flex-row items-center gap-[24px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="object-cover"
                      width={50}
                      height={50}
                    />

                    <div>
                      <h3 className="text-[18px] font-bold text-white">
                        {item.name}
                      </h3>
                      <p className="text-[14px] font-normal text-[#C3D4E9]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex flex-row mx-auto mt-[64px] gap-[24px]">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
