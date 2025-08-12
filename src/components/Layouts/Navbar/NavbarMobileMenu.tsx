import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface NavbarMobileMenuProps {
  toggleContactModal: () => void;
  toggleNavMenu: () => void;
  isNavModal: boolean;
}

const NavbarMobileMenu = ({
  isNavModal,
  toggleNavMenu,
  toggleContactModal,
}: NavbarMobileMenuProps) => {
  const handleContactModalInNavMenu = () => {
    toggleContactModal();
    toggleNavMenu();
  };
  console.log(isNavModal);
  return (
    <div>
      <div
        className={`${
          isNavModal && "translate-y-[0%] scale-y-100 opacity-100"
        } fixed top-0 right-0 z-30 flex translate-y-[-50%] scale-y-0 flex-col gap-y-4 rounded-b-2xl bg-gray-900/80 px-8 pt-18 pb-12 text-center text-white opacity-0 shadow-[inset_0_0_12px_4px_#5eead4] transition-all duration-300`}
      >
        <button aria-label="Open Contact Form" onClick={() => toggleNavMenu()}>
          <FontAwesomeIcon
            className={`${
              isNavModal && "opacity-100"
            } absolute top-6 right-6 text-3xl opacity-0 transition-all delay-300 duration-300`}
            icon={faBars}
          />
        </button>
        <a
          onClick={() => toggleNavMenu()}
          className="w-26 px-2 text-lg lg:px-5"
          href="#"
        >
          <h3 className="link__hover-effect">Home</h3>
        </a>
        <a
          onClick={() => toggleNavMenu()}
          className="w-26 px-2 text-lg lg:px-5"
          href="#about"
        >
          <h3 className="link__hover-effect">About</h3>
        </a>
        <a
          onClick={() => toggleNavMenu()}
          className="w-26 px-2 text-lg lg:px-5"
          href="#services"
        >
          <h3 className="link__hover-effect">Services</h3>
        </a>
        <a
          onClick={() => toggleNavMenu()}
          className="w-26 px-2 text-lg lg:px-5"
          href="#our_difference"
        >
          <h3 className="link__hover-effect">What Sets Us Apart</h3>
        </a>
        <div
          className="w-26 cursor-pointer px-2 text-lg lg:px-5"
          onClick={() => handleContactModalInNavMenu()}
        >
          <h3 className="link__hover-effect">Contact</h3>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
