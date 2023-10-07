import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

import OMS from './oms_temp.png';
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Open Mic Studios",
  description: "A casting studio created to put voice actors on center stage."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Link rel="icon" type="image/png" href={OMS} as="image" />
      </Head>

      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
