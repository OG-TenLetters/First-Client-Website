import Image from "next/image";
import AboutImg from "../assets/Home_Office_Logistics_Working.webp"

export default function Home() {
  return (
    <div className=" flex flex-col">
      <section id="landing-page" className="bg-gray-800">
        <div className="py-40">
          <div className="bg-teal-700 w-[50%] rounded-2xl p-4 ml-8 font-semibold">
            <h4 className="text-xs font-normal">
              Delivering Dependable Freight Solutions
            </h4>
            <h2 className="text-2xl tracking-wide my-1">LBB Logistics, LLC</h2>
            <h3 className="text-sm">
              LBB Logistics is a trusted freight brokerage and logistics
              services company dedicated to providing efficient and customizedd
              freight solutions nationwide.
            </h3>
            <button className="uppercase py-2 px-4 border-3 border-gray-900 mt-2 rounded-lg text-gray-900 font-bold">
              Contact US
            </button>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="py-12">
          <div className="px-12 flex gap-x-4">
            <div className="w-[60%]">
              <h1 className="text-6xl font-semibold mb-7">Connecting Businesses <br /> Across the Country</h1>
              <p className="text-3xl ">
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
            <figure className="flex w-[40%] rounded-3xl overflow-hidden"><Image className="w-full" src={AboutImg} alt="Hard at work preview">
              </Image></figure>
          </div>
        </div>
      </section>
    </div>
  );
}
