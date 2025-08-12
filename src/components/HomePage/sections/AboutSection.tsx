import Image from "next/image";
import React from "react";
import AboutImg from "../../../assets/Home_Office_Logistics_Working.webp";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="bg-gray-100 py-12">
        <div className="relative flex flex-col items-center gap-x-12 px-7 md:flex-row md:px-15 lg:px-20">
          <div className="relative z-10 w-full md:w-[65%] lg:z-0 lg:w-[60%]">
            <h2 className="mb-4 font-bold tracking-wide text-teal-800">
              Specializing in Omnitransportation
            </h2>
            <h3 className="mb-4 text-xl font-extrabold tracking-wide sm:mb-12 sm:text-3xl sm:font-bold sm:tracking-normal md:text-4xl lg:text-5xl lg:font-semibold xl:text-6xl">
              Connecting Businesses <br /> Across the Country
            </h3>
            <p className="w-full leading-6 font-semibold sm:text-xl md:leading-9 lg:text-2xl lg:font-normal">
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
          <figure className="absolute top-[50%] right-0 flex w-full translate-y-[-50%] overflow-hidden shadow-none md:w-[80%] lg:static lg:top-auto lg:right-auto lg:w-[43%] lg:translate-y-0 lg:rounded-3xl lg:shadow-2xl/40">
            <div className="absolute z-5 h-full w-full bg-gradient-to-r from-gray-100 to-gray-100/90 md:to-gray-100/70 lg:static"></div>
            <Image
              className="h-auto w-full"
              sizes="(min-width: 1024px) 43vw, (min-width: 768px) 80vw, 100vw"
              width={1000}
              height={700}
              src={AboutImg}
              alt="Hard at work preview"
              priority
            ></Image>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
