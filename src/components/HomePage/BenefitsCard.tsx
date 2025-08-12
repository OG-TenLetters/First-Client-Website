import Image from "next/image";
import React from "react";
import BenefitsSvg from "../../assets/Benefits.svg";

interface BenefitsCardProps {
  title: string;
  desc: string;
}

const BenefitsCard = ({ title, desc }: BenefitsCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white px-8 py-10 shadow-2xl/30">
      <figure className="w-20 sm:w-30">
        <Image
          className="h-full w-full"
          alt="Benefits Image"
          src={BenefitsSvg}
        ></Image>
      </figure>
      <h3 className="mb-4 w-full border-b-3 border-b-black text-xl font-bold sm:text-2xl md:text-3xl">
        {title}
      </h3>
      <h4 className="w-full max-w-120 sm:text-lg">{desc}</h4>
    </div>
  );
};

export default BenefitsCard;
