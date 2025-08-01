"use client";
import { useModal } from "@/app/providers/ContactModalProvider";
import React from "react";

const Footer = () => {
  const { toggleContactModal } = useModal();
  return (
    <footer className="relative z-30 shadow-xl/30 bg-linear-to-tl from-teal-950 to-teal-700 w-full py-4 px-6 rounded-t-lg text-white">
      <div className="flex justify-center items-center">
        <ul className="flex gap-x-2">
          <li className="sm:block hidden text-lg link__hover-effect link__hover-effect-teal font-extrabold">
            Our Services
          </li>
          <li className="md:block hidden text-lg link__hover-effect link__hover-effect-teal font-extrabold">
            FAQ
          </li>
        </ul>
        <div className="relative items-center flex-col flex">
          <figure className="p-8 max-w-8 rounded-full bg-teal-950"></figure>
          <h3 className="text-white text-sm font-bold w-full text-center max-w-36 absolute top-[48%] left-[50%] translate-[-50%] bg-teal-700 rounded-2xl px-2">
            LBB Logistics, LLC
          </h3>
          <h3 className="text-xs mt-1">Copyright © LBB Logistics, LLC</h3>
        </div>

        <ul className="flex gap-x-2">
          <li
            onClick={() => toggleContactModal()}
            className="sm:block hidden cursor-pointer text-lg link__hover-effect link__hover-effect-teal font-extrabold"
          >
            Contact Us
          </li>
          <li className="md:block hidden text-lg link__hover-effect link__hover-effect-teal font-extrabold">
            Cookies
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
