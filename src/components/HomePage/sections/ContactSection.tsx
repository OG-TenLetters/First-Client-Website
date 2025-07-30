import Image from "next/image";
import React from "react";
import PhoneSvg from "../../../assets/Phone.svg";
import EmailSvg from "../../../assets/Email.svg";

import USAImg from "../../../assets/USAlogistics.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";

interface ContactSectionProps {
  isContactModalOpen: boolean;
  toggleContactModal: () => void;
}

const ContactSection = ({
  isContactModalOpen,
  toggleContactModal,
}: ContactSectionProps) => {
  return (
    <section id="connect">
      <div className="bg-gray-800 py-12 px-20 flex justify-between items-center text-white">
        <div className="w-[60%] max-w-200">
          <h4 className="mb-4 font-semibold text-teal-400">
            Ready for success?
          </h4>
          <h1 className="text-6xl mb-4">Let's Connect</h1>
          <p className="text-2xl mb-4">
            We invite you to contact LBB Logistics for all your freight needs.
            Our team is available 24/7 to provide you with reliable and
            efficient logistic solutions.
          </p>
          <div className="text-2xl flex gap-x-1 mb-1">
            <Image className="w-8" src={PhoneSvg} alt="Phone Icon"></Image>: +1
            (916)-249-0449
          </div>
          <div className="text-2xl flex gap-x-1 mb-6">
            <Image className="w-8" src={EmailSvg} alt="Email Icon"></Image>:
            sommonne@lbblogists.com
          </div>
          <div className="flex items-center gap-x-12">
            <button
              onClick={() => toggleContactModal()}
              className="active:shadow-none active:translate-y-2 active:text-teal-700 active:border-teal-700 shadow-xl/20 shadow-blue-950 uppercase cursor-pointer hover:border-teal-300 hover:bg-transparent hover:text-teal-300 transition-all duration-300 bg-[#1d7ea5] rounded-xl border-4 border-[#1d7ea5] text-black font-bold text-2xl tracking-wider px-5 py-3"
            >
              Contact Us
            </button>

            <div className="flex gap-x-4 text-gray-900">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sommonne">
              <div className="font-extrabold text-3xl flex hover:text-white hover:scale-115 transition-all duration-300 justify-center items-center p-2 w-12 h-12 rounded-full bg-blue-500">
    <FontAwesomeIcon icon={faFacebookF} />
              </div>
                </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sommonne-saddler-777aa326/">
                <div className=" font-bold text-3xl flex hover:text-white hover:scale-115 transition-all duration-300 justify-center items-center p-2 w-12 h-12 rounded-full bg-[#0a5ac4]">
               <FontAwesomeIcon icon={faLinkedinIn}/>
                </div>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/spirit_mrmc4life/">
                <div className="font-bold text-3xl flex hover:text-white hover:scale-115 transition-all duration-300 justify-center items-center p-2 w-12 h-12 rounded-full bg-pink-800">
<FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <figure className="rounded-3xl w-[40%] overflow-hidden shadow-xl/50">
          <Image className="brightness-90" src={USAImg} alt="Multi-Transportation Image"></Image>
        </figure>
      </div>
    </section>
  );
};

export default ContactSection;
