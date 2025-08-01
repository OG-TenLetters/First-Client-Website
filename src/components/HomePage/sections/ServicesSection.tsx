import React from "react";
import ServiceCard from "../ServiceCard";

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="bg-linear-to-l from-black/90 to-[#0b333d69] lg:py-20 md:pl-8 md:py-12 py-7 lg:px-20 md:px-12 px-7 backdrop-blur-xs w-full flex md:flex-row flex-col-reverse justify-between text-white">
        <div className="md:w-[60%] w-full h-full sm:flex hidden flex-wrap md:flex-row flex-col justify-center gap-4 lg:pr-20 md:pr-8 sm:pr-7 pr-0">
          <ServiceCard
            title={
              "FTL & LTL Coordination"
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
            title={"Driver Communi-cation & Scheduling"}
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
        <div className="md:w-[40%] w-full bg-linear-to-l lg:p-10 md:pl-10 md:py-10 pr-4 sm:p-10 px-6 py-10 md:m-0 mb-12 rounded-2xl md:to-gray-800/80 to-black/70 from-gray-800/80">
          <h4 className="mb-4 md:text-left text-right text-teal-300">
            Reliable Logistics, Unmatched Service
          </h4>
          <h2 className=" md:text-left text-right xl:text-6xl lg:text-5xl md:text-4xl text-3xl md:mb-12 mb-4 font-semibold">Our Services</h2>
          <p className=" lg:text-2xl md:font-normal sm:text-lg text-md sm:font-semibold font-normal">
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
