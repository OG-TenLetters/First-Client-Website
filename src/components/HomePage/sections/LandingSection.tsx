import React from "react";
import VideoBg from "../VideoBg";

interface LandingSectionProps {
  isContactModalOpen: boolean;
  toggleContactModal: () => void;
}

const LandingSection = ({
  isContactModalOpen,
  toggleContactModal,
}: LandingSectionProps) => {
  return (
    <section id="landing-page" className=" relative">
      <VideoBg />
      <div className="relative z-10 pt-70 pb-50 bg-gray-800/60">
        <div className=" bg-linear-to-r from-[#0f3b46cb] w-[50%] text-white rounded-2xl py-8 px-10 ml-20 font-semibold">
          <h4 className="mb-1 text-xl text-teal-400 font-[400]">
            Delivering Dependable Freight Solutions
          </h4>
          <h2 className="text-4xl font-bold tracking-wider mb-4">
            LBB Logistics, LLC
          </h2>
          <h3 className="text-xl mb-4">
            LBB Logistics is a trusted freight brokerage and logistics services
            company dedicated to providing efficient and customizedd freight
            solutions nationwide.
          </h3>
          <button
            onClick={() => toggleContactModal()}
            className="cursor-pointer active:translate-y-2 active:shadow-none ml-6 shadow-xl/20 bg-teal-950/30 shadow-teal-950 transition-all ease-in-out duration-300 hover:bg-teal-300 hover:border-teal-300 hover:text-teal-800 uppercase py-3 px-8 border-3 border-white mt-2 rounded-[12px] text-2xl font-bold"
          >
            Contact US
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
