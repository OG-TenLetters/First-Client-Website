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
      <div className="hover:brightness-120 hover:shadow-2xl/100 transition-all duration-300 xl:w-[30%] lg:w-[40%] md:w-[39%] w-full shadow-xl/100 flex lg:flex-row md:flex-col flex-row lg:justify-baseline justify-center items-center px-4 sm:py-6 py-2 bg-[#163f49cb] rounded-2xl">
        <figure className="md:w-[20%] w-[10%] lg:mr-4 mr-0 lg:mb-0 mb-4">
          <Image
            className="md:scale-140 scale-100 flex justify-center items-center"
            alt="Guaranteed Badge"
            src={BadgeSvg}
          ></Image>
        </figure>
        <div className="w-[80%] max-w-74 lg:text-left text-center">
          <h3 className="font-bold w-full text-lg mb-2">{title}</h3>
          <p className="font-normal text-sm sm:block hidden">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
