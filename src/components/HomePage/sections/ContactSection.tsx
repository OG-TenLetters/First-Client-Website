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

const ContactSection = ({

  toggleContactModal,
}: ContactSectionProps) => {
  return (
    <section id="connect">
      <div className="bg-gray-800 py-12 lg:px-20 md:px-12 px-7 relative flex justify-between items-center text-white overflow-hidden">
        <div className="md:w-[60%] w-full max-w-200 relative lg:z-0 z-10">
          <h4 className="mb-4 font-semibold text-teal-400">
            Ready for success?
          </h4>
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl lg:font-semibold sm:font-bold font-extrabold sm:tracking-normal tracking-wide mb-4">Let&rsquo;s Connect</h1>
          <p className="lg:text-2xl sm:text-xl  lg:font-normal font-semibold md:leading-9 leading-6 w-full mb-4">
            We invite you to contact LBB Logistics for all your freight needs.
            Our team is available 24/7 to provide you with reliable and
            efficient logistic solutions.
          </p>
          <div className="sm:text-2xl text-lg flex gap-x-1 mb-1">
            <Image className="sm:w-8 w-4" src={PhoneSvg} alt="Phone Icon"></Image>: +1
            (916)-249-0449
          </div>
          <div className="sm:text-2xl text-lg flex gap-x-1 mb-6">
            <Image className="sm:w-8 w-4" src={EmailSvg} alt="Email Icon"></Image>:
            sommonne@lbblogists.com
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-x-12">
            <button
              onClick={() => toggleContactModal()}
              className="sm:w-auto w-full sm:mb-0 mb-8 active:shadow-none active:translate-y-2 active:text-teal-700 active:border-teal-700 shadow-xl/20 shadow-blue-950 uppercase cursor-pointer hover:border-teal-300 hover:bg-transparent hover:text-teal-300 transition-all duration-300 bg-[#1d7ea5] rounded-xl border-4 border-[#1d7ea5] text-black font-bold sm:text-2xl text-lg tracking-wider px-5 py-3"
            >
              Contact Us
            </button>

            <div className="flex gap-x-4 text-gray-900">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/sommonne"
              >
                <div className="font-extrabold text-3xl flex hover:text-white hover:scale-115 transition-all duration-300 justify-center items-center p-2 w-12 h-12 rounded-full bg-blue-500">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sommonne-saddler-777aa326/"
              >
                <div className=" font-bold text-3xl flex hover:text-white hover:scale-115 transition-all duration-300 justify-center items-center p-2 w-12 h-12 rounded-full bg-[#0a5ac4]">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/spirit_mrmc4life/"
              >
                <div className="font-bold text-3xl flex hover:text-white hover:scale-115 transition-all duration-300 justify-center items-center p-2 w-12 h-12 rounded-full bg-pink-800">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <figure className="flex lg:w-[43%] md:w-[80%] lg:static absolute lg:right-auto right-0 lg:top-auto top-[50%] lg:translate-y-0 translate-y-[-50%] w-full lg:rounded-3xl overflow-hidden lg:shadow-2xl/40 shadow-none">
          <div className="lg:static absolute bg-gradient-to-r from-gray-800 md:to-gray-800/70 to-gray-800/90 z-5 w-full h-full"></div>
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
