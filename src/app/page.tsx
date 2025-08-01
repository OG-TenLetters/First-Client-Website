"use client";
import LandingSection from "@/components/HomePage/sections/LandingSection";
import AboutSection from "@/components/HomePage/sections/AboutSection";
import ServicesSection from "@/components/HomePage/sections/ServicesSection";
import DifferenceSection from "@/components/HomePage/sections/DifferenceSection";
import ContactSection from "@/components/HomePage/sections/ContactSection";
import ContactModal from "@/components/ContactModal";
import { useModal } from "./providers/ContactModalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { isContactModalOpen, toggleContactModal } = useModal();

  return (
    <div className="flex flex-col">
      <div
        onClick={() => toggleContactModal()}
        className={`${
          isContactModalOpen && "opacity-0"
        } fixed cursor-pointer hover:bg-teal-400 hover:scale-110 hover:active:scale-90 active:text-teal-100  bg-teal-600 transition-all duration-300 rounded-full bottom-10 right-10 p-4 z-20 text-gray-700 text-4xl`}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div
        className={`${
          isContactModalOpen && "bg-black/60 pointer-fix"
        } transition-all pointer-events-none duration-300 fixed flex justify-center items-center lg:px-20 md:px-12 px-7 w-full h-full top-0 bottom-0 z-30`}
      >
        <ContactModal
          isContactModalOpen={isContactModalOpen}
          toggleContactModal={toggleContactModal}
        />
      </div>
      <LandingSection
        isContactModalOpen={isContactModalOpen}
        toggleContactModal={toggleContactModal}
      />
      <AboutSection />
      <ServicesSection />
      <DifferenceSection />
      <ContactSection
        isContactModalOpen={isContactModalOpen}
        toggleContactModal={toggleContactModal}
      />
    </div>
  );
}
