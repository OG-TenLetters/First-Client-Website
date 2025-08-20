"use client";
import { useModal } from "@/app/providers/ContactModalProvider";
import React from "react";

const Footer = () => {
  const { toggleContactModal } = useModal();
  return (
    <footer className="relative z-20 w-full rounded-t-lg bg-linear-to-tl from-teal-950 to-teal-700 px-6 py-4 text-white shadow-xl/30">
      <div className="flex items-center justify-center">
        <ul className="flex gap-x-2">
          <li className="link__hover-effect link__hover-effect-teal hidden cursor-not-allowed text-lg font-extrabold sm:block">
            Our Services
          </li>
          <li className="link__hover-effect link__hover-effect-teal hidden cursor-not-allowed text-lg font-extrabold md:block">
            FAQ
          </li>
        </ul>
        <div className="relative flex flex-col items-center">
          <figure className="max-w-8 rounded-full bg-teal-950 p-8">
            <div className="absolute top-[35%] left-[50%] -translate-[50%]">
              logo
            </div>
          </figure>
          <h3 className="absolute top-[48%] left-[50%] w-full max-w-36 translate-[-50%] rounded-2xl bg-teal-700 px-2 text-center text-sm font-bold text-white">
            LBB Logistics, LLC
          </h3>
          <h3 className="mt-1 text-xs">Copyright © LBB Logistics, LLC</h3>
        </div>

        <ul className="flex gap-x-2">
          <li
            onClick={() => toggleContactModal()}
            className="link__hover-effect link__hover-effect-teal hidden cursor-pointer text-lg font-extrabold sm:block"
          >
            Contact Us
          </li>
          <li className="link__hover-effect link__hover-effect-teal hidden cursor-not-allowed text-lg font-extrabold md:block">
            Cookies
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
