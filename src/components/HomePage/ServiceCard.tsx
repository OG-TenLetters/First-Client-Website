import React from "react";
import BadgeSvg from "../../assets/Badge.svg";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  desc: string;
}

const ServiceCard = ({ title, desc }: ServiceCardProps) => {
  return (
    <>
      <div className="flex w-full flex-row items-center justify-center rounded-2xl bg-[#163f49cb] px-4 py-2 shadow-xl/100 transition-all duration-300 hover:shadow-2xl/100 hover:brightness-120 sm:py-6 md:w-[39%] md:flex-col lg:w-[40%] lg:flex-row lg:justify-baseline xl:w-[30%]">
        <figure className="mr-0 mb-4 w-[10%] md:w-[20%] lg:mr-4 lg:mb-0">
          <Image
            className="flex scale-100 items-center justify-center md:scale-140"
            alt="Guaranteed Badge"
            src={BadgeSvg}
          ></Image>
        </figure>
        <div className="w-[80%] max-w-74 text-center lg:text-left">
          <h3 className="mb-2 w-full text-lg font-bold">{title}</h3>
          <h4 className="hidden text-sm font-normal sm:block">{desc}</h4>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
