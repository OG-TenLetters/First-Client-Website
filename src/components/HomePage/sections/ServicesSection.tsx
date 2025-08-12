import React from "react";
import ServiceCard from "../ServiceCard";

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="flex w-full flex-col-reverse justify-between bg-linear-to-l from-black/90 to-[#0b333d69] px-7 py-7 text-white backdrop-blur-xs md:flex-row md:px-12 md:py-12 md:pl-8 lg:px-20 lg:py-20">
        <div className="hidden h-full w-full flex-col flex-wrap justify-center gap-4 pr-0 sm:flex sm:pr-7 md:w-[60%] md:flex-row md:pr-8 lg:pr-20">
          <ServiceCard
            title={"FTL & LTL Coordination"}
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
        <div className="mb-12 w-full rounded-2xl bg-linear-to-l from-gray-800/80 to-black/70 px-6 py-10 pr-4 sm:p-10 md:m-0 md:w-[40%] md:to-gray-800/80 md:py-10 md:pl-10 lg:p-10">
          <h2 className="mb-4 text-right font-semibold tracking-wide text-teal-300 md:text-left">
            Reliable Logistics, Unmatched Service
          </h2>
          <h3 className="mb-4 text-right text-3xl font-semibold md:mb-12 md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
            Our Services
          </h3>
          <p className="text-md font-normal sm:text-lg sm:font-semibold md:font-normal lg:text-2xl">
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
            delivery, to help your business thrive in today&rsquo;s competitive
            market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
