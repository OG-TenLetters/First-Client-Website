import React from "react";
import ServiceCard from "../ServiceCard";

interface ServicesSectionProps {
  isContactModalOpen: boolean;
}

const ServicesSection = ({ isContactModalOpen }: ServicesSectionProps) => {
  return (
    <section id="services">
      <div className="bg-linear-to-l from-black/90 to-[#0b333d69] py-20 px-20 backdrop-blur-xs w-full flex justify-between text-white">
        <div className="w-[60%] h-full flex flex-wrap justify-center gap-4 pr-20">
          <ServiceCard
            title={
              "Full Truckload (FTL) & Less Than Truckload (LTL) Coordination"
            }
            desc={"Efficient coordination for all shipment sizes."}
          />
          <ServiceCard
            title={"Nationwide & Regional Coverage"}
            desc={"Extensive reach for seamless logistics."}
          />
          <ServiceCard
            title={"Load Planning & Dispatch"}
            desc={"Strategic planning for optimized routes."}
          />
          <ServiceCard
            title={"Route Optimization"}
            desc={"Maximizing efficiency in transportation."}
          />
          <ServiceCard
            title={"Driver Communication & Scheduling"}
            desc={"Smooth coordination for timely deliveries."}
          />
          <ServiceCard
            title={"Real-Time Shipment Tracking"}
            desc={"Stay informed every step of the way."}
          />
          <ServiceCard
            title={"Carrier & Shipper Management"}
            desc={"Building relationships with trusted partners."}
          />
          <ServiceCard
            title={"Supply Chain Solutions"}
            desc={"Tailored solutions for your supply chain needs."}
          />
          <ServiceCard
            title={"Freight Quote & Rate Analysis"}
            desc={"Competitive pricing and cost-saving analysis."}
          />
          <ServiceCard
            title={"Compliance & Documentation"}
            desc={"Ensuring regulatory compliance and dcumentation support."}
          />
          <ServiceCard
            title={"Specialized Freight Services"}
            desc={"Optional specialized services for unique cargo needs."}
          />
        </div>
        <div className="w-[40%] bg-linear-to-l p-10 rounded-2xl to-gray-800/80">
          <h4 className="mb-4 text-teal-300">
            Reliable Logistics, Unmatched Service
          </h4>
          <h1 className="text-6xl mb-12 font-semibold">Our Services</h1>
          <p className="text-2xl">
            LBB Logistics offers a wide range of freight brokerage and logistics
            services tailored to meet your shipping needs. Our team of
            experienced professionals is dedicated to providing customized
            solutions that streamline your supply chain operations and ensure
            timely deliveries. With a focus on efficiency and
            cost-effectiveness, we work closely with our clients to understand
            their unique requirements and deliver tailored logistics solutions.
            Whether you require full truckload coordination, specialized freight
            services, or supply chain optimization, we have the expertise to
            meet your demands. At LBB Logistics, we are committed to excellence
            in every aspect of our service, from initial consultation to final
            delivery, to help your business thrive in today’s competitive
            market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
