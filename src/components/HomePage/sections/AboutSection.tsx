import Image from "next/image";
import React from "react";
import AboutImg from "../../../assets/Home_Office_Logistics_Working.webp";



const AboutSection = () => {
  return (
    <section id="about">
      <div className="py-12 bg-gray-100">
        <div className="relative lg:px-20 md:px-15 px-7 flex md:flex-row flex-col items-center gap-x-12">
          <div className="lg:w-[60%] md:w-[65%] w-full relative lg:z-0 z-10">
            <h4 className=" text-teal-600 font-semibold mb-4">
              Specializing in Omnitransportation
            </h4>
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl lg:font-semibold sm:font-bold font-extrabold sm:tracking-normal tracking-wide sm:mb-12 mb-4">
              Connecting Businesses <br /> Across the Country
            </h1>
            <p className="lg:text-2xl sm:text-xl text-sm  lg:font-normal font-semibold md:leading-9 leading-6 w-full">
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
          <figure className="flex lg:w-[43%] md:w-[80%] lg:static absolute lg:right-auto right-0 lg:top-auto top-[50%] lg:translate-y-0 translate-y-[-50%] w-full lg:rounded-3xl overflow-hidden lg:shadow-2xl/40 shadow-none">
          <div className="lg:static absolute bg-gradient-to-r from-gray-100 md:to-gray-100/70 to-gray-100/90 z-5 w-full h-full" ></div>
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
