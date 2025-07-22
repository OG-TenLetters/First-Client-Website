import Image from "next/image";
import AboutImg from "../assets/Home_Office_Logistics_Working.webp";
import VideoBg from "@/components/VideoBg";
import ServiceCard from "@/components/ServiceCard";
import BenefitsCard from "@/components/BenefitsCard";
import PhoneSvg from "../assets/Phone.svg";
import EmailSvg from "../assets/Email.svg";
import TransportImg from "../assets/Transport-logistics.jpg";
import FacebookF from "../assets/facebookF.webp"
import InstagramSVG from "../assets/instagram.svg"

export default function Home() {
  return (
    <div className=" flex flex-col">
      <section id="landing-page" className=" relative">
        <VideoBg />
        <div className="relative z-10 pt-70 pb-50 bg-gray-800/60">
          <div className=" bg-linear-to-r from-[#0f3b46cb] w-[50%] text-white rounded-2xl py-8 px-10 ml-20 font-semibold">
            <h4 className="mb-1 text-xl text-teal-400 font-[400]">
              Delivering Dependable Freight Solutions
            </h4>
            <h2 className="text-4xl font-bold tracking-wider mb-4">
              LBB Logistics, LLC
            </h2>
            <h3 className="text-xl mb-4">
              LBB Logistics is a trusted freight brokerage and logistics
              services company dedicated to providing efficient and customizedd
              freight solutions nationwide.
            </h3>
            <button className="cursor-pointer active:translate-y-2 active:shadow-none ml-6 shadow-xl/20 bg-teal-950/30 shadow-teal-950 transition-all ease-in-out duration-300 hover:bg-teal-300 hover:border-teal-300 hover:text-teal-800 uppercase py-3 px-8 border-3 border-white mt-2 rounded-[12px] text-2xl font-bold">
              Contact US
            </button>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="py-12 bg-gray-100">
          <div className="px-20 flex items-center gap-x-12">
            <div className="w-[60%]">
              <h4 className=" text-teal-600 font-semibold mb-4">
                Specializing in Omnitransportation
              </h4>
              <h1 className="text-6xl font-semibold mb-12">
                Connecting Businesses <br /> Across the Country
              </h1>
              <p className="text-2xl leading-9 w-[90%]">
                LBB Logistics was founded with a vision to simplify and
                strengthen supply chain connections. Our commitment to
                integrity, transparency, and consistency drives us to go above
                and beyond for our customers, building long-term partnerships
                through personalized service and industry expertise. With a
                focus on innovation and continuous improvement, we strive to
                exceed expectations and set new standards in the logistics
                industry. Our dedication to reliability and customer
                satisfaction forms the cornerstone of our approach to every
                shipment we handle.
              </p>
            </div>
            <figure className="flex w-[40%] rounded-3xl overflow-hidden shadow-2xl/40">
              <Image
                className="w-full"
                src={AboutImg}
                alt="Hard at work preview"
              ></Image>
            </figure>
          </div>
        </div>
      </section>
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
              LBB Logistics offers a wide range of freight brokerage and
              logistics services tailored to meet your shipping needs. Our team
              of experienced professionals is dedicated to providing customized
              solutions that streamline your supply chain operations and ensure
              timely deliveries. With a focus on efficiency and
              cost-effectiveness, we work closely with our clients to understand
              their unique requirements and deliver tailored logistics
              solutions. Whether you require full truckload coordination,
              specialized freight services, or supply chain optimization, we
              have the expertise to meet your demands. At LBB Logistics, we are
              committed to excellence in every aspect of our service, from
              initial consultation to final delivery, to help your business
              thrive in today’s competitive market.
            </p>
          </div>
        </div>
      </section>
      <section id="our_difference">
        <div className="py-12 bg-gray-100">
          <div className="px-20 flex flex-col text-center justify-center items-center gap-x-12">
            <div className="w-[70%] flex flex-col items-center mb-16">
              <h4 className="mb-4 font-bold text-teal-600">
                Connecting Businesses Coast-to-Coast with Care
              </h4>
              <h1 className="text-6xl font-semibold mb-12">
                What Sets Us Apart
              </h1>
              <p className="text-2xl leading-9 w-[90%]">
                At LBB Logistics, we stand out for our personalized service,
                real-time tracking, reliable carrier network, speedy quotes,
                24/7 availability, compliance-first mindset, flexible freight
                options, owner-operated values, tech-supported operations, focus
                on long-term partnerships, and industry experience. Our
                dedication to customer satisfaction drives us to continuously
                improve and adapt to meet evolving industry needs, ensuring
                seamless logistics solutions for our clients. With a strong
                emphasis on transparency and communication, we prioritize
                building trust and lasting relationships with our partners,
                making us a reliable and trusted logistics provider in the
                industry.
              </p>
            </div>
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
      <section id="connect">
        <div className="bg-gray-800 py-12 px-20 flex justify-between items-center text-white">
          <div className="w-[60%] max-w-200">
            <h1 className="text-6xl mb-4">Let's Connect</h1>
            <p className="text-2xl mb-4">
              We invite you to contact LBB Logistics for all your freight needs.
              Our team is available 24/7 to provide you with reliable and
              efficient logistic solutions.
            </p>
            <div className="text-2xl flex gap-x-1 mb-1">
              <Image className="w-8" src={PhoneSvg} alt="Phone Icon"></Image>:
              +1 (916)-249-0449
            </div>
            <div className="text-2xl flex gap-x-1 mb-6">
              <Image className="w-8" src={EmailSvg} alt="Email Icon"></Image>:
              sommonne@lbblogists.org
            </div>
            <div className="flex items-center gap-x-12">
              <button className="active:shadow-none active:translate-y-2 active:text-teal-700 active:border-teal-700 shadow-xl/20 shadow-blue-950 uppercase cursor-pointer hover:border-teal-300 hover:bg-transparent hover:text-teal-300 transition-all duration-300 bg-[#1d7ea5] rounded-xl border-4 border-[#1d7ea5] text-black font-bold text-2xl tracking-wider px-5 py-3">
                Contact Us
              </button>

              <div className="flex gap-x-4">
                <div className="font-extrabold text-3xl flex justify-center items-center p-2 w-12 h-12 rounded-full bg-blue-500">
                  <Image className="text-white" alt="facebook" src={FacebookF}></Image>
                </div>
                <div className="text-black font-bold text-3xl flex justify-center items-center p-2 w-12 h-12 rounded-full bg-[#0a5ac4]">
                  in
                </div>
                <div className="font-bold text-3xl flex justify-center items-center p-2 w-12 h-12 rounded-full bg-pink-800">
                  <Image className="text-white w-8 h-8" alt="instagram" src={InstagramSVG}></Image>
                </div>
              </div>
            </div>
          </div>
          <figure className="rounded-4xl w-[40%] overflow-hidden">
            <Image src={TransportImg} alt="Multi-Transportation Image"></Image>
          </figure>
        </div>
      </section>
    </div>
  );
}
