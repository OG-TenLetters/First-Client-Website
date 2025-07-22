import React from "react";
import BadgeSvg from "../assets/Badge.svg";
import Image from "next/image";

interface ServiceCardProps {
    title: string;
    desc: string;
}

const ServiceCard = ({title, desc,}:ServiceCardProps) => {


    return (
        <>
                  <div className="hover:brightness-120 hover:shadow-2xl/100 transition-all duration-300 w-[30%] shadow-xl/100 h-40 flex items-center max-w-100 px-4 py-6 bg-[#163f49cb] rounded-2xl">
              <figure className="w-[20%] mr-4">
                <Image
                  className="scale-140 flex justify-center items-center"
                  alt="Guaranteed Badge"
                  src={BadgeSvg}
                  ></Image>
              </figure>
              <div className="w-[80%] max-w-74">
                <h3 className="font-bold w-full text-lg mb-2">
                  {title}
                </h3>
                <p className="font-normal text-sm">
                 {desc}
                </p>
              </div>
          </div>
                  </>
    )
}

export default ServiceCard;