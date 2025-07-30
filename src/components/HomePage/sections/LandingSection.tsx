import React from "react";
import VideoBg from "../VideoBg";

interface LandingSectionProps {
  isContactModalOpen: boolean;
  toggleContactModal: () => void;
}

const LandingSection = ({
  toggleContactModal,
}: LandingSectionProps) => {
  return (
    <section id="landing-page" className=" relative">
      <VideoBg />
      <div className="relative z-10 md:pt-70 pt-50 md:pb-50 pb-30 bg-gray-800/60">
        <div className=" bg-linear-to-r from-[#0f3b46cb] xl:to-black/0 lg:to-black/20 md:to-black/40 sm:to-black/60 to-black/80 xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[80%] w-[95%] text-white rounded-2xl py-8 px-10 md:ml-20 mx-auto m font-semibold">
          <h4 className="mb-1 md:text-xl sm:text-lg text-md text-teal-400 font-[400]">
            Delivering Dependable Freight Solutions
          </h4>
          <h2 className="md:text-3xl sm:text-2xl text-xl font-bold tracking-wider mb-4">
            LBB Logistics, LLC
          </h2>
          <h3 className="sm:text-xl text-md mb-4">
            LBB Logistics is a trusted freight brokerage and logistics services
            company dedicated to providing efficient and customizedd freight
            solutions nationwide.
          </h3>
          <div className="md:block flex ">
            <button
              onClick={() => toggleContactModal()}
              className="cursor-pointer active:translate-y-2 md:w-auto w-full active:shadow-none md:ml-6 mx-auto shadow-xl/20 bg-teal-950/30 shadow-teal-950 transition-all ease-in-out duration-300 hover:bg-teal-300 hover:border-teal-300 hover:text-teal-800 uppercase py-3 px-8 border-3 border-white mt-2 rounded-[12px] md:text-2xl text-lg font-bold"
            >
              Contact US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
