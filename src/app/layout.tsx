import { Inter, Spectral } from "next/font/google";
import "./globals.css";
import MidBg from "../assets/MidBg.webp"
import Image from "next/image";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  variable: '--font-spectral',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spectral.variable} font-sans antialiased`}
      >
        <Image className="fixed w-full h-full -z-1"  alt="Global Transportation Expertise Background Image" src={MidBg}></Image>
        <nav className="backdrop-blur-sm bg-linear-to-tl from-teal-400/80 to-teal-950/80 text-white shadow-xl/30  w-full h-f py-4 px-6 -mb-2 fixed top-0 z-20 rounded-b-sm flex justify-between">
          <div className=" flex items-center gap-x-2">
            <div className=" bg-teal-950 rounded-full p-6 relative">
              <h3 className="absolute top-[50%] left-[50%] translate-[-50%]">
                logo
              </h3>
            </div>
            <h3 className="font-semibold ml-1 text-[20px]">LBB Logistics, LLC</h3>
          </div>
          <div className="font-bold flex items-center text-teal-950 text-[20px]">
            <a className="px-5" href="#">
              <h3 className="link__hover-effect link__hover-effect-teal">Home</h3>
            </a>
            <a className="px-5" href="#about">
              <h3 className="link__hover-effect link__hover-effect-teal">About</h3>
            </a>
            <a className="px-5" href="#services">
              <h3 className="link__hover-effect link__hover-effect-teal">Services</h3>
            </a>
            <a className="px-5" href="#our_difference">
              <h3 className="link__hover-effect link__hover-effect-teal">What Sets Us Apart</h3>
            </a>
            <a className="px-5" href="">
              <h3 className="link__hover-effect link__hover-effect-teal">Contact</h3>
            </a>
          </div>
        </nav>
        {children}

        <footer className=" shadow-xl/30 bg-linear-to-tl from-teal-950 to-teal-700 w-full py-4 px-6 rounded-t-lg text-white">
          <div className="flex justify-center items-center">
            <div className="flex gap-x-2">
              <h3 className="text-lg link__hover-effect link__hover-effect-teal font-extrabold">
                Terms of Service
              </h3>
              <h3 className="text-lg link__hover-effect link__hover-effect-teal font-extrabold">FAQ</h3>
            </div>
            <div className="relative items-center flex-col flex">
              <figure className="p-8 max-w-8 rounded-full bg-teal-950"></figure>
              <h3
                className="text-white text-sm font-bold w-full text-center max-w-36 absolute top-[48%] left-[50%] translate-[-50%] bg-teal-700 rounded-2xl px-2"
              >
                LBB Logistics, LLC
              </h3>
              <h3 className="text-xs mt-1">Copyright © LBB Logistics, LLC</h3>
            </div>

            <div className="flex gap-x-2">
              <h3 className="text-lg link__hover-effect link__hover-effect-teal font-extrabold">Contact Us</h3>
              <h3 className="text-lg link__hover-effect link__hover-effect-teal font-extrabold">Cookies</h3>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
