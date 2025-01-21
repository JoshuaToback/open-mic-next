"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

import Who from "./sections/Who";
import Services from "./sections/Services";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Contact from "./sections/Contact";

import heroImage from "../public/hero.jpg";

export default function Home() {
  return (
    <main className="flex mx-auto flex-col items-center justify-center py-2 min-h-screen">
  <section
  style={{
    background: `url(${heroImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
  }}
  className="h-screen w-screen flex flex-col justify-center items-center relative"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative z-10 text-center">
    <h1 className="text-white text-6xl md:text-7xl font-extrabold tracking-tight">
      Open Mic Studios
    </h1>
    <p className="text-white text-xl md:text-3xl font-light mt-4">
      Putting You On <br /> Center Stage
    </p>

    {/* Buttons */}
    <div className="mt-8 flex space-x-4 justify-center">
      <ScrollLink
        to="who"
        spy={true}
        smooth={true}
        duration={500}
        className="bg-blue-600 hover:bg-blue-800 text-white text-lg md:text-xl font-medium py-3 px-6 rounded-lg shadow-lg transition-all cursor-pointer"
      >
        About Us
      </ScrollLink>
      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className="bg-blue-600 hover:bg-blue-800 text-white text-lg md:text-xl font-medium py-3 px-6 rounded-lg shadow-lg transition-all cursor-pointer"
      >
        Contact
      </ScrollLink>
    </div>
  </div>
  <Image
          src={heroImage}
          layout="fill"
          objectFit="cover"
          alt="Open Mic Studios"
          className="filter blur-md" // Add the "filter blur-md" class to apply the blur effect
        />
</section>

      <motion.div>
        <Who />
      </motion.div>

      <motion.div>
        <Element name="services">
          <Services />
        </Element>
      </motion.div>

      <motion.div>
        <Element name="contact">
          <Contact />
        </Element>
      </motion.div>
    </main>
  );
}
