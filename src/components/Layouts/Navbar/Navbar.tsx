"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MidBg from "../../../assets/MidBg.webp";
import { useModal } from "@/app/providers/ContactModalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarMobileMenu from "./NavbarMobileMenu";

const Navbar = () => {
  const { toggleContactModal, isContactModalOpen } = useModal();
  const [navMargin, setNavMargin] = useState(0);
  const [isNavModal, setIsNavModal] = useState(false);

  const toggleNavMenu = () => {
    setIsNavModal(!isNavModal);
  };

  useEffect(() => {
    if (isContactModalOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      setNavMargin(scrollbarWidth);
    } else {
      setNavMargin(0);
    }
  }, [isContactModalOpen]);
  console.log(isNavModal);

  return (
    <>
      <Image
        className="fixed w-full h-full -z-1"
        alt="Global Transportation Expertise Background Image"
        src={MidBg}
      ></Image>
      <NavbarMobileMenu
        isNavModal={isNavModal}
        toggleNavMenu={toggleNavMenu}
        toggleContactModal={toggleContactModal}
      />

      <nav
        style={{ width: `calc(100% - ${navMargin}px)` }}
        className={`${
          isContactModalOpen && "pointer-events-none opacity-70"
        } transition-all duration-300 backdrop-blur-sm bg-linear-to-tl from-teal-400/80 to-teal-950/80 text-white shadow-xl/30  w-full h-f py-4 px-6 -mb-2 fixed top-0 z-20 rounded-b-sm flex items-center justify-between`}
      >
        <div className=" flex items-center gap-x-2">
          <div className=" bg-teal-950 rounded-full p-6 relative">
            <h3 className="absolute top-[50%] left-[50%] translate-[-50%]">
              logo
            </h3>
          </div>
          <h3 className="font-semibold ml-1 lg:text-[20px] md:block sm:hidden block">
            LBB Logistics, LLC
          </h3>
        </div>
        <ul
        className={` transition-all duration-300 font-bold sm:flex hidden items-center text-teal-950 lg:text-[20px] flex-wrap justify-end sm:gap-y-0 gap-y-1`}>
            <li className="lg:px-5 px-2">
          <a className="link__hover-effect link__hover-effect-teal " href="#">
              Home
          </a>
              </li>
            <li className="lg:px-5 px-2">
          <a className="link__hover-effect link__hover-effect-teal " href="#about">
              About
          </a>
            </li>
            <li className="lg:px-5 px-2">
          <a className="link__hover-effect link__hover-effect-teal " href="#services">
              Services
          </a>
            </li>
            <li className="lg:px-5 px-2">
          <a className="link__hover-effect link__hover-effect-teal " href="#our_difference">
              What Sets Us Apart
          </a>
            </li>
          <li
            className="lg:px-5 px-2   cursor-pointer"
            onClick={() => toggleContactModal()}
          ><h3 className="link__hover-effect link__hover-effect-teal">
           Contact
          </h3>
          </li>
        </ul>
        <button
          onClick={() => toggleNavMenu()}
          className={`${
            isNavModal && "opacity-[0%]"
          } opacity-100 transition-all duration-300 delay-150 sm:hidden block`}
        >
          <FontAwesomeIcon className="text-3xl" icon={faBars} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
