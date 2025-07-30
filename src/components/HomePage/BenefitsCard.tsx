import Image from "next/image";
import React from "react";
import BenefitsSvg from "../../assets/Benefits.svg";

interface BenefitsCardProps {
  title: string;
  desc: string;
}

const BenefitsCard = ({ title, desc }: BenefitsCardProps) => {
  return (
    <div className="bg-white shadow-2xl/30 rounded-lg px-8 py-10 flex flex-col items-center">
      <figure className="sm:w-30 w-20">
        <Image
          className="w-full h-full"
          alt="Benefits Image"
          src={BenefitsSvg}
        ></Image>
      </figure>
      <h2
        className="border-b-3 border-b-black
              md:text-3xl sm:text-2xl text-xl mb-4 font-bold w-full"
      >
        {title}
      </h2>
      <p className="text-lg w-full max-w-120">{desc}</p>
    </div>
  );
};

export default BenefitsCard;
