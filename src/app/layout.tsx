import type { Metadata } from "next";
import { Inter, Spectral } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ModalProvider } from "./providers/ContactModalProvider";
import Navbar from "@/components/Layouts/Navbar/Navbar";
import Footer from "@/components/Layouts/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LBB Logistics LLC - National Freight Transportation Company",
  description:
    "LBB Logistics is a trusted freight brokerage and logistics services company dedicated to providing efficient and customized freight solutions nationwide.",
};

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
        <ModalProvider>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
