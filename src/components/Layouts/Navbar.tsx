"use client";
import Image from "next/image";
import React from "react";
import MidBg from "../../assets/MidBg.webp";
import { useModal } from "@/app/providers/ContactModalProvider";

const Navbar = () => {
  const { toggleContactModal, isContactModalOpen } = useModal();

  return (
    <>
      <Image
        className="fixed w-full h-full -z-1"
        alt="Global Transportation Expertise Background Image"
        src={MidBg}
      ></Image>
      <nav className={`${isContactModalOpen && "pointer-events-none"} backdrop-blur-sm bg-linear-to-tl from-teal-400/80 to-teal-950/80 text-white shadow-xl/30  w-full h-f py-4 px-6 -mb-2 fixed top-0 z-20 rounded-b-sm flex justify-between`}>
        <div className=" flex items-center gap-x-2">
          <div className=" bg-teal-950 rounded-full p-6 relative">
            <h3 className="absolute top-[50%] left-[50%] translate-[-50%]">
              logo
            </h3>
          </div>
          <h3 className="font-semibold ml-1 text-[20px]">LBB Logistics, LLC</h3>
        </div>
        <div className="font-bold flex items-center text-teal-950 text-[20px]">
          <a className="px-5" href="#">
            <h3 className="link__hover-effect link__hover-effect-teal">Home</h3>
          </a>
          <a className="px-5" href="#about">
            <h3 className="link__hover-effect link__hover-effect-teal">
              About
            </h3>
          </a>
          <a className="px-5" href="#services">
            <h3 className="link__hover-effect link__hover-effect-teal">
              Services
            </h3>
          </a>
          <a className="px-5" href="#our_difference">
            <h3 className="link__hover-effect link__hover-effect-teal">
              What Sets Us Apart
            </h3>
          </a>
          <div
            className="px-5 cursor-pointer"
            onClick={() => toggleContactModal()}
          >
            <h3 className="link__hover-effect link__hover-effect-teal">
              Contact
            </h3>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
