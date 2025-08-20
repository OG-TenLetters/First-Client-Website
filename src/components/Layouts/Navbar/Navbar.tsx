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
        className="fixed -z-1 h-full w-auto object-cover xl:w-full"
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
        } h-f fixed top-0 z-20 -mb-2 flex w-full items-center justify-between rounded-b-sm bg-linear-to-tl from-teal-400/80 to-teal-950/80 px-6 py-4 text-white shadow-xl/30 backdrop-blur-sm transition-all duration-300`}
      >
        <div className="group flex items-center gap-x-2">
          <div className="group:hover relative z-2 rounded-full bg-teal-950 p-6">
            <h3 className="absolute top-[50%] left-[50%] translate-[-50%]">
              logo
            </h3>
          </div>
          <h1 className="ml-1 translate-x-0 scale-100 font-semibold opacity-100 transition-all duration-300 sm:-translate-x-25 sm:scale-50 sm:opacity-0 sm:group-hover:-translate-x-0 sm:group-hover:scale-100 sm:group-hover:opacity-100 md:translate-x-0 md:scale-100 md:opacity-100 lg:text-[20px]">
            LBB Logistics, LLC
          </h1>
        </div>
        <ul
          className={`hidden flex-wrap items-center justify-end gap-y-1 font-bold text-teal-950 transition-all duration-300 sm:flex sm:gap-y-0 lg:text-[20px]`}
        >
          <li className="px-2 lg:px-5">
            <a className="link__hover-effect link__hover-effect-teal" href="#">
              Home
            </a>
          </li>
          <li className="px-2 lg:px-5">
            <a
              className="link__hover-effect link__hover-effect-teal"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="px-2 lg:px-5">
            <a
              className="link__hover-effect link__hover-effect-teal"
              href="#services"
            >
              Services
            </a>
          </li>
          <li className="px-2 lg:px-5">
            <a
              className="link__hover-effect link__hover-effect-teal"
              href="#our_difference"
            >
              What Sets Us Apart
            </a>
          </li>
          <li
            className="cursor-pointer px-2 lg:px-5"
            onClick={() => toggleContactModal()}
          >
            <h3 className="link__hover-effect link__hover-effect-teal">
              Contact
            </h3>
          </li>
        </ul>
        <button
          aria-label="Open Contact Form"
          onClick={() => toggleNavMenu()}
          className={`${
            isNavModal && "opacity-[0%]"
          } block opacity-100 transition-all delay-150 duration-300 sm:hidden`}
        >
          <FontAwesomeIcon className="text-3xl" icon={faBars} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
