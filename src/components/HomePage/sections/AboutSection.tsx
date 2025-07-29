import Image from "next/image";
import React from "react";
import AboutImg from "../../../assets/Home_Office_Logistics_Working.webp";

interface AboutSectionProps {
  isContactModalOpen: boolean;
}

const AboutSection = ({ isContactModalOpen }: AboutSectionProps) => {
  return (
    <section id="about">
      <div className="py-12 bg-gray-100">
        <div className="px-20 flex items-center gap-x-12">
          <div className="w-[60%]">
            <h4 className=" text-teal-600 font-semibold mb-4">
              Specializing in Omnitransportation
            </h4>
            <h1 className="text-6xl font-semibold mb-12">
              Connecting Businesses <br /> Across the Country
            </h1>
            <p className="text-2xl leading-9 w-[90%]">
              LBB Logistics was founded with a vision to simplify and strengthen
              supply chain connections. Our commitment to integrity,
              transparency, and consistency drives us to go above and beyond for
              our customers, building long-term partnerships through
              personalized service and industry expertise. With a focus on
              innovation and continuous improvement, we strive to exceed
              expectations and set new standards in the logistics industry. Our
              dedication to reliability and customer satisfaction forms the
              cornerstone of our approach to every shipment we handle.
            </p>
          </div>
          <figure className="flex w-[40%] rounded-3xl overflow-hidden shadow-2xl/40">
            <Image
              className="w-full"
              src={AboutImg}
              alt="Hard at work preview"
            ></Image>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
