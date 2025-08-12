import React from "react";
import VideoBg from "../VideoBg";

interface LandingSectionProps {
  isContactModalOpen: boolean;
  toggleContactModal: () => void;
}

const LandingSection = ({ toggleContactModal }: LandingSectionProps) => {
  return (
    <section id="landing-page" className="relative">
      <VideoBg
        webmSrc="/bg_interstate.webm"
        mp4Src="/bg_interstate.mp4"
        posterSrc="/bg_interstate.webp"
      />
      <div className="relative z-10 bg-gray-800/60 pt-50 pb-30 md:pt-70 md:pb-50">
        <div className="m mx-auto w-[95%] rounded-2xl bg-linear-to-r from-[#0f3b46cb] to-black/80 px-10 py-8 font-semibold text-white sm:w-[80%] sm:to-black/60 md:ml-20 md:w-[70%] md:to-black/40 lg:w-[60%] lg:to-black/20 xl:w-[50%] xl:to-black/0">
          <h2 className="text-md mb-1 font-[400] text-teal-400 sm:text-lg md:text-xl">
            Delivering Dependable Freight Solutions
          </h2>
          <h3 className="mb-4 text-xl font-bold tracking-wider sm:text-2xl md:text-3xl">
            LBB Logistics, LLC
          </h3>
          <h4 className="text-md mb-4 sm:text-xl">
            LBB Logistics is a trusted freight brokerage and logistics services
            company dedicated to providing efficient and customized freight
            solutions nationwide.
          </h4>
          <div className="flex md:block">
            <button
              aria-label="Open Contact Form"
              onClick={() => toggleContactModal()}
              className="mx-auto mt-2 w-full cursor-pointer rounded-[12px] border-3 border-white bg-transparent px-8 py-3 text-lg font-bold uppercase shadow-xl/20 shadow-teal-950 transition-all duration-300 ease-in-out hover:border-teal-300 hover:bg-teal-300 hover:text-teal-800 active:translate-y-2 active:shadow-none md:ml-6 md:w-auto md:bg-teal-950/30 md:text-2xl"
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
