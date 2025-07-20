import Image from "next/image";
import AboutImg from "../assets/Home_Office_Logistics_Working.webp";
import VideoBg from "@/components/VideoBg";

export default function Home() {
  return (
    <div className=" flex flex-col mt-20">
      <section id="landing-page" className=" relative">
        <VideoBg/>
        <div className="relative z-10 py-40 bg-gray-800/60">
          <div className=" bg-linear-to-r from-teal-800 w-[50%] text-white rounded-2xl py-8 px-10 ml-20 font-semibold">
            <h4 className="mb-1 text-xl text-teal-400 font-[400]">
              Delivering Dependable Freight Solutions
            </h4>
            <h2 className="text-4xl font-bold tracking-wider mb-4">LBB Logistics, LLC</h2>
            <h3 className="text-xl mb-4">
              LBB Logistics is a trusted freight brokerage and logistics
              services company dedicated to providing efficient and customizedd
              freight solutions nationwide.
            </h3>
            <button className="active:translate-y-2 active:shadow-none ml-6 shadow-xl/20 bg-teal-950/30 shadow-teal-950 transition-all ease-in-out duration-300 hover:bg-teal-300 hover:border-teal-300 hover:text-teal-800 uppercase py-3 px-8 border-3 border-white mt-2 rounded-[12px] text-2xl font-bold">
              Contact US
            </button>
          </div>
        </div>
      </section>
      <section id="about" className="bg-gray-50">
        <div className="py-12">
          <div className="px-20 flex gap-x-12">
            <div className="w-[60%]">
              <h1 className="text-6xl font-semibold mb-12">
                Connecting Businesses <br /> Across the Country
              </h1>
              <p className="text-3xl">
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
    </div>
  );
}
