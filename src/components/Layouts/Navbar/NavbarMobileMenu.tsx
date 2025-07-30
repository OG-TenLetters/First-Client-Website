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
          isNavModal && "scale-y-100 translate-y-[0%] opacity-100"
        } scale-y-0 opacity-0 translate-y-[-50%] transition-all duration-300 fixed bg-gray-900/80 z-30 top-0 right-0 px-8 pb-12 pt-18 flex flex-col gap-y-4 rounded-b-2xl text-white text-center shadow-[inset_0_0_12px_4px_#5eead4]`}
      >
        <div onClick={() => toggleNavMenu()}>
          <FontAwesomeIcon
            className={`${
              isNavModal && "opacity-100"
            } opacity-0 transition-all duration-300 delay-300 absolute top-6 right-6 text-3xl`}
            icon={faBars}
          />
        </div>
        <a
          onClick={() => toggleNavMenu()}
          className="lg:px-5 px-2 w-26 text-lg"
          href="#"
        >
          <h3 className="link__hover-effect">Home</h3>
        </a>
        <a
          onClick={() => toggleNavMenu()}
          className="lg:px-5 px-2 w-26 text-lg"
          href="#about"
        >
          <h3 className="link__hover-effect">About</h3>
        </a>
        <a
          onClick={() => toggleNavMenu()}
          className="lg:px-5 px-2 w-26 text-lg"
          href="#services"
        >
          <h3 className="link__hover-effect">
            Services
          </h3>
        </a>
        <a
          onClick={() => toggleNavMenu()}
          className="lg:px-5 px-2 w-26 text-lg"
          href="#our_difference"
        >
          <h3 className="link__hover-effect">
            What Sets Us Apart
          </h3>
        </a>
        <div
          className="lg:px-5 px-2 w-26 text-lg cursor-pointer"
          onClick={() => handleContactModalInNavMenu()}
        >
          <h3 className="link__hover-effect">
            Contact
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
