"use client";
import { sendForm } from "@emailjs/browser";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface ContactModalProps {
  isContactModalOpen: boolean;
  toggleContactModal: () => void;
}

const ContactModal = ({
  isContactModalOpen,
  toggleContactModal,
}: ContactModalProps) => {
  console.log(isContactModalOpen);
  const [inputValue, setInputValue] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState<boolean>(false);

  const capitalizeFullName = (name: string): string => {
    if (!name) return "";
    const words = name.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );
    return capitalizedWords.join(" ");
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const capitalized = capitalizeFullName(inputValue);
    setSubmittedName(capitalized);

    sendForm(
      "service_vz8gqzo",
      "template_n2vpwbe",
      e.currentTarget,
      "qVGgK80-uMkkItvbU",
    )
      .then(() => {
        setIsContactSubmitted(true);
      })
      .catch(() => {
        alert(
          "The email service is temporarily unavailable. Please email me directly at 1tenletters0@gmail.com",
        );
      });

    const timerId = setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);

    const timerId2 = setTimeout(() => {
      toggleContactModal();
    }, 3000);

    return () => {
      clearTimeout(timerId);
      clearTimeout(timerId2);
    };
  };

  return (
    <div
      className={`${
        isContactModalOpen
          ? "scale-100 opacity-100"
          : "pointer-events-none scale-50 opacity-0"
      } z-25 w-full max-w-4xl transition-all duration-300`}
    >
      <div
        className={`absolute top-[50%] left-[50%] -z-1 flex w-full translate-[-50%] p-20 text-center text-white opacity-0 transition-all delay-150 duration-300 ${
          submittedName && !isSubmitting && "z-5 opacity-100"
        }`}
      >
        <p className="text-4xl leading-13 font-semibold tracking-wide">
          Thank you for your message,{" "}
          <span className="text-teal-200">{submittedName}</span>! Looking
          forward to speaking with you soon.
        </p>
      </div>

      <div
        className={`${submittedName && isSubmitting && "opacity-100"} pointer-events-none absolute top-[50%] left-[50%] z-18 flex w-full max-w-4xl translate-[-50%] animate-spin items-center justify-center p-12 text-9xl text-teal-950 opacity-0 transition-all duration-300`}
      >
        <FontAwesomeIcon icon={faSpinner} />
      </div>

      <div
        className={`relative rounded-xl bg-teal-800/90 p-12 text-[#0e0327] inset-shadow-sm inset-shadow-teal-500 backdrop-blur-xs`}
      >
        <div
          onClick={() => toggleContactModal()}
          className={`${(!submittedName && !isSubmitting) || (submittedName && !isSubmitting) ? "opacity-100" : "pointer-events-none opacity-0"} absolute top-4 right-4 text-4xl font-extrabold text-teal-950 transition-all duration-300 hover:scale-120 hover:text-teal-300 active:scale-95 active:text-teal-600`}
        >
          X
        </div>

        <form
          id="contact-form"
          className={`${
            submittedName && "pointer-events-none scale-75 opacity-0"
          } flex flex-col items-center text-[#dbdbdb] transition-all duration-300`}
          onSubmit={sendEmail}
          action={""}
        >
          <h2 className="mb-8 text-3xl font-bold tracking-wide text-[#fdfdfd] underline sm:text-4xl md:text-5xl">
            Let&rsquo;s Connect
          </h2>
          <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:gap-8">
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <span className="text-blue-300">*</span>Company:
              </h3>
              <input
                name="user_company_name"
                required
                type="text"
                aria-label="Enter your company's name here"
                className="w-full rounded-sm border-teal-900 bg-teal-600 px-2 py-0.5 text-lg font-semibold text-teal-950 inset-shadow-sm inset-shadow-teal-500 outline-none placeholder:text-[#dbdbdb] focus:border-b-3"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <span className="text-blue-300">*</span>Full Name:
              </h3>

              <input
                onChange={(e) => setInputValue(e.target.value)}
                required
                name="user_name"
                value={inputValue}
                aria-label="Enter your name here"
                type="text"
                className="w-full rounded-sm border-teal-900 bg-teal-600 px-2 py-0.5 text-lg font-semibold text-teal-950 inset-shadow-sm inset-shadow-teal-500 outline-none placeholder:text-[#dbdbdb] focus:border-b-3"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <span className="text-blue-300">*</span>Email:
              </h3>
              <input
                required
                type="email"
                name="user_email"
                aria-label="Enter your email address here included with the @. Example: @gmail.com, @company.org, @agency.gov"
                className="w-full rounded-sm border-teal-900 bg-teal-600 px-2 py-0.5 text-lg font-semibold text-teal-950 inset-shadow-sm inset-shadow-teal-500 outline-none placeholder:text-[#dbdbdb] focus:border-b-3"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">Phone:</h3>
              <input
                required
                name="user_phone"
                aria-label="Enter your phone number here."
                type="tel"
                className="w-full rounded-sm border-teal-900 bg-teal-600 px-2 py-0.5 text-lg font-semibold text-teal-950 inset-shadow-sm inset-shadow-teal-500 outline-none placeholder:text-[#dbdbdb] focus:border-b-3"
              />
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col">
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <span className="text-blue-300">*</span>Message:
            </h3>
            <textarea
              required
              rows={4}
              aria-label="Enter your response to the following question here. What is you and your company's mission?"
              placeholder="What is you and your company's mission?"
              name="user_message"
              id="contactmessage"
              className="w-full rounded-sm border-teal-900 bg-teal-600 px-2 py-0.5 text-lg font-semibold text-teal-950 inset-shadow-sm inset-shadow-teal-500 outline-none placeholder:text-[#dbdbdb] focus:border-b-3"
            ></textarea>
          </div>
          <button
            type="submit"
            id="contact-submit"
            form="contact-form"
            aria-label="Send Contact and Message to LBB Logistics"
            className="mt-6 w-full max-w-72 rounded-lg border-2 border-teal-950 bg-teal-900 py-3 text-2xl font-bold tracking-wide text-white shadow-xl/30 shadow-teal-950 transition-all duration-300 hover:border-white hover:bg-teal-700 hover:text-teal-100 hover:shadow-teal-700 active:translate-y-2 active:border-gray-300 active:bg-teal-800 active:text-teal-200 active:shadow-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
