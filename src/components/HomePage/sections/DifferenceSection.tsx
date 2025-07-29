import React from "react";
import BenefitsCard from "../BenefitsCard";

interface DifferenceSectionProps {
  isContactModalOpen: boolean;
}

const DifferenceSection = ({ isContactModalOpen }: DifferenceSectionProps) => {
  return (
    <section id="our_difference">
      <div className="py-12 bg-gray-100">
        <div className="px-20 flex flex-col text-center justify-center items-center gap-x-12">
          <div className="w-[70%] flex flex-col items-center mb-16">
            <h4 className="mb-4 font-bold text-teal-600">
              Connecting Businesses Coast-to-Coast with Care
            </h4>
            <h1 className="text-6xl font-semibold mb-12">What Sets Us Apart</h1>
            <p className="text-2xl leading-9 w-[90%]">
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
            <h4 className="mb-4 tracking-widest capitalize font-semibold text-6xl">Superior customer service</h4>
          <div className="flex gap-x-4">
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
