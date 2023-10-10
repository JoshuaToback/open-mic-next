import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

import OMS from "@/public/oms_temp.png";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Open Mic Studios",
  description: "A casting studio created to put voice actors on center stage.",
  icons: {
    icon: './oms_temp.png',
}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={OMS} type="image/png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
