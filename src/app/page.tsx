"use client";
import LandingSection from "@/components/HomePage/sections/LandingSection";
import AboutSection from "@/components/HomePage/sections/AboutSection";
import ServicesSection from "@/components/HomePage/sections/ServicesSection";
import DifferenceSection from "@/components/HomePage/sections/DifferenceSection";
import ContactSection from "@/components/HomePage/sections/ContactSection";
import ContactModal from "@/components/ContactModal";
import { useModal } from "./providers/ContactModalProvider";

export default function Home() {
  const { isContactModalOpen, setContactModalOpen, toggleContactModal } =
    useModal();

  return (
    <div className="flex flex-col">
      <div className={`${isContactModalOpen && "bg-black/60 pointer-fix" } transition-all pointer-events-none duration-300 fixed w-full h-full top-0 bottom-0 z-15`}>hi</div>
      <ContactModal
        isContactModalOpen={isContactModalOpen}
        toggleContactModal={toggleContactModal}
      />
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
