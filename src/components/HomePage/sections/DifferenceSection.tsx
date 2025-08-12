import React from "react";
import BenefitsCard from "../BenefitsCard";

const DifferenceSection = () => {
  return (
    <section id="our_difference">
      <div className="bg-gray-100 py-12">
        <div className="flex flex-col items-center justify-center gap-x-12 px-7 text-center md:px-12 lg:px-20">
          <div className="mb-16 flex w-full flex-col items-center md:w-[95%] lg:w-[70%]">
            <h2 className="mb-4 font-bold tracking-wide text-teal-800">
              Connecting Businesses Coast-to-Coast with Care
            </h2>
            <h3 className="mb-4 text-3xl font-bold sm:mb-12 md:text-4xl md:font-semibold lg:text-5xl xl:text-6xl">
              What Sets Us Apart
            </h3>
            <p className="text-md w-full leading-5 font-semibold sm:text-lg sm:leading-9 md:w-[90%] lg:text-2xl lg:font-normal">
              At LBB Logistics, we stand out for our personalized service,
              real-time tracking, reliable carrier network, speedy quotes, 24/7
              availability, compliance-first mindset, flexible freight options,
              owner-operated values, tech-supported operations, focus on
              long-term partnerships, and industry experience. Our dedication to
              customer satisfaction drives us to continuously improve and adapt
              to meet evolving industry needs, ensuring seamless logistics
              solutions for our clients. With a strong emphasis on transparency
              and communication, we prioritize building trust and lasting
              relationships with our partners, making us a reliable and trusted
              logistics provider in the industry.
            </p>
          </div>
          <h4 className="mb-4 text-3xl font-bold tracking-widest capitalize md:text-4xl md:font-semibold lg:text-5xl xl:text-6xl">
            Superior customer service
          </h4>
          <div className="flex flex-col gap-4 md:flex-row">
            <BenefitsCard
              title={"Nationwide Reach"}
              desc={
                "Every shipment receives care and attention, ensuring a tailored experience for each client across the nation."
              }
            />
            <BenefitsCard
              title={"Real-Time Tracking"}
              desc={
                "Stay informed at every step with transparent tracking, supported by a network of high-performing carriers for consistent service quality."
              }
            />
            <BenefitsCard
              title={"24/7 Availability"}
              desc={
                "Get quick and accurate quotes, access round-the-clock support, and rest assured with our compliance-first approach for peace of mind."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
