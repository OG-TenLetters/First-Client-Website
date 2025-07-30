"use client";
import { myAction } from "@/app/actions";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const capitalized = capitalizeName(inputValue);
    setSubmittedName(capitalized);
    setIsSubmitting(true);
  };
  const capitalizeName = (name: string): string => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (isSubmitting) {
      const timerId = setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [isSubmitting]);

  return (
    <div
      className={`${
        isContactModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
      } transition-all duration-300 w-full max-w-4xl z-18`}
    >
      <div
        className={`absolute top-[50%] left-[50%] translate-[-50%] w-full flex p-20 text-white transition-all duration-300 delay-150 text-center -z-1 opacity-0 ${
          submittedName && !isSubmitting && "z-5 opacity-100"
        }`}
      >
        <p className="text-4xl font-semibold leading-13 tracking-wide">
          Thank you for your message, <span className="text-teal-200">{submittedName}</span>! Looking forward to
          speaking with you soon.
        </p>
      </div>

      <div
        className={`${submittedName && isSubmitting && "opacity-100"} transition-all duration-300 opacity-0 pointer-events-none absolute top-[50%] left-[50%] translate-[-50%] w-full max-w-4xl z-18 p-12 animate-spin flex justify-center items-center text-9xl text-teal-950`}
      >
        <FontAwesomeIcon icon={faSpinner} />
      </div>

      <div
        className={` relative bg-teal-800/90 text-[#0e0327] backdrop-blur-xs inset-shadow-teal-500 inset-shadow-sm rounded-xl p-12`}
      >
        <div
          onClick={() => toggleContactModal()}
          className={`${!submittedName && !isSubmitting || submittedName && !isSubmitting ? "opacity-100" : "opacity-0 pointer-events-none"  } absolute text-4xl text-teal-950 hover:text-teal-300 hover:scale-120 active:text-teal-600 active:scale-95  transition-all duration-300 font-extrabold top-4 right-4 `}
        >
          X
        </div>

        <form
          className={`${
            submittedName && "opacity-0 pointer-events-none scale-75"
          } transition-all duration-300 flex flex-col items-center text-[#dbdbdb]`}
          onSubmit={handleFormSubmit}
          action={myAction}
        >
          <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold underline tracking-wide mb-8 text-[#fdfdfd]">
            Let&rsquo;s Connect
          </h2>
          <div className="flex md:flex-row flex-col md:w-auto w-full md:gap-8 gap-2 ">
            <div className="flex flex-col">
              <h3 className="md:text-2xl text-xl font-bold mb-2"><span className="text-blue-300">*</span>Company:</h3>
              <input
                required
                type="text"
                className="text-teal-950 text-lg w-full placeholder:text-[#dbdbdb] outline-none focus:border-b-3 border-teal-900 px-2 py-0.5 font-semibold rounded-sm bg-teal-600 inset-shadow-teal-500 inset-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="md:text-2xl text-xl font-bold mb-2"><span className="text-blue-300">*</span>Name:</h3>

              <input
                onChange={(e) => setInputValue(e.target.value)}
                required
                name="name"
                value={inputValue}
                type="text"
                className="text-teal-950 text-lg w-full placeholder:text-[#dbdbdb] outline-none focus:border-b-3 border-teal-900 px-2 py-0.5 font-semibold rounded-sm bg-teal-600 inset-shadow-teal-500 inset-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="md:text-2xl text-xl font-bold mb-2"><span className="text-blue-300">*</span>Email:</h3>
              <input
                required
                type="email"
                className="text-teal-950 text-lg w-full placeholder:text-[#dbdbdb] outline-none focus:border-b-3 border-teal-900 px-2 py-0.5 font-semibold rounded-sm bg-teal-600 inset-shadow-teal-500 inset-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="md:text-2xl text-xl font-bold mb-2">Phone:</h3>
              <input
                placeholder="Optional"
                type="tel"
                className="text-teal-950 text-lg w-full placeholder:text-[#dbdbdb] outline-none focus:border-b-3 border-teal-900 px-2 py-0.5 font-semibold rounded-sm bg-teal-600 inset-shadow-teal-500 inset-shadow-sm"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-6">
            <h3 className="md:text-2xl text-xl font-bold mb-2"><span className="text-blue-300">*</span>Message:</h3>
            <textarea
              required
              rows={4}
              placeholder="What is you and your company's mission?"
              name="messagebox"
              id="contactmessage"
              className="text-teal-950 text-lg w-full placeholder:text-[#dbdbdb] outline-none focus:border-b-3 border-teal-900 px-2 py-0.5 font-semibold rounded-sm bg-teal-600 inset-shadow-teal-500 inset-shadow-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            id="contact-submit"
            className="hover:bg-teal-700 hover:border-white hover:text-teal-100 hover:shadow-teal-700 active:border-gray-300 active:bg-teal-800 active:text-teal-200 active:shadow-none active:translate-y-2 transition-all duration-300 shadow-xl/30 shadow-teal-950 bg-teal-900 border-teal-950 border-2 mt-6 py-3 w-full max-w-72 rounded-lg font-bold tracking-wide text-2xl text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
