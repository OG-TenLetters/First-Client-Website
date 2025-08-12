import Image from "next/image";
import React from "react";
import PhoneSvg from "../../../assets/Phone.svg";
import EmailSvg from "../../../assets/Email.svg";

import USAImg from "../../../assets/USAlogistics.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

interface ContactSectionProps {
  isContactModalOpen: boolean;
  toggleContactModal: () => void;
}

const ContactSection = ({ toggleContactModal }: ContactSectionProps) => {
  return (
    <section id="connect">
      <div className="relative flex items-center justify-between overflow-hidden bg-gray-800 px-7 py-12 text-white md:px-12 lg:px-20">
        <div className="relative z-10 w-full max-w-200 md:w-[60%] lg:z-0">
          <h2 className="mb-4 font-semibold tracking-wide text-teal-400">
            Ready for success?
          </h2>
          <h3 className="mb-4 text-3xl font-extrabold tracking-wide sm:font-bold sm:tracking-normal md:text-4xl lg:text-5xl lg:font-semibold xl:text-6xl">
            Let&rsquo;s Connect
          </h3>
          <p className="mb-4 w-full leading-6 font-semibold sm:text-xl md:leading-9 lg:text-2xl lg:font-normal">
            We invite you to contact LBB Logistics for all your freight needs.
            Our team is available 24/7 to provide you with reliable and
            efficient logistic solutions.
          </p>
          <div className="mb-1 flex gap-x-1 text-lg sm:text-2xl">
            <Image
              className="w-4 sm:w-8"
              src={PhoneSvg}
              alt="Phone Icon"
            ></Image>
            : +1 (916)-249-0449
          </div>
          <div className="mb-6 flex gap-x-1 text-lg sm:text-2xl">
            <Image
              className="w-4 sm:w-8"
              src={EmailSvg}
              alt="Email Icon"
            ></Image>
            :`` sommonne@lbblogists.com
          </div>
          <div className="flex flex-col items-center gap-x-12 sm:flex-row">
            <button
              onClick={() => toggleContactModal()}
              aria-label="Open Contact Form"
              className="mb-8 w-full cursor-pointer rounded-xl border-4 border-[#1d7ea5] bg-[#1d7ea5] px-5 py-3 text-lg font-bold tracking-wider text-black uppercase shadow-xl/20 shadow-blue-950 transition-all duration-300 hover:border-teal-300 hover:bg-transparent hover:text-teal-300 active:translate-y-2 active:border-teal-700 active:text-teal-700 active:shadow-none sm:mb-0 sm:w-auto sm:text-2xl"
            >
              Contact Us
            </button>

            <div className="flex gap-x-4 text-gray-900">
              <a
                target="_blank"
                rel="noreferrer"
                aria-label="Link to Facebook page"
                href="https://www.facebook.com/sommonne"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 p-2 text-3xl font-extrabold transition-all duration-300 hover:scale-115 hover:text-white">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                aria-label="Link to Linkedin page"
                href="https://www.linkedin.com/in/sommonne-saddler-777aa326/"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a5ac4] p-2 text-3xl font-bold transition-all duration-300 hover:scale-115 hover:text-white">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                aria-label="Link to Instagram page"
                href="https://www.instagram.com/spirit_mrmc4life/"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-800 p-2 text-3xl font-bold transition-all duration-300 hover:scale-115 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <figure className="absolute top-[50%] right-0 flex w-full translate-y-[-50%] overflow-hidden shadow-none md:w-[80%] lg:static lg:top-auto lg:right-auto lg:w-[43%] lg:translate-y-0 lg:rounded-3xl lg:shadow-2xl/40">
          <div className="absolute z-5 h-full w-full bg-gradient-to-r from-gray-800 to-gray-800/90 md:to-gray-800/70 lg:static"></div>
          <Image
            className="brightness-90"
            src={USAImg}
            alt="Multi-Transportation Image"
          ></Image>
        </figure>
      </div>
    </section>
  );
};

export default ContactSection;
