"use client";
import PageTransition from "@/components/PageTransition";
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
    <PageTransition>
      <main className="flex mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section
            style={{
              background: `url(${heroImage}) no-repeat center center fixed`,
              backgroundSize: "cover",
            }}
            className="bg-hero-image bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="text-white bg-clip-text text-7xl font-light leading-tight  z-10 relative">
              Open Mic Studios
            </h1>
            <p className="text-4xl text-white font-semilight text-center z-10 relative text-shadow">
              Putting You On
              <br />
               Center Stage
            </p>

            {/* New Buttons */}
            <div className="mt-6 z-10 relative flex space-x-4">
              <ScrollLink to="who" spy={true} smooth={true} duration={500}>
                <button className="bg-slate-500 hover:bg-slate-900 text-white text-3xl font-light py-2 px-4 mx-2 rounded">
                  About Us
                </button>
              </ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
                <button className="bg-slate-500 hover:bg-slate-900 text-white text-3xl font-light py-2 px-4 mx-2 rounded">
                  Contact
                </button>
              </ScrollLink>
            </div>
            <Image
              src={heroImage}
              layout="fill"
              objectFit="cover"
              alt="Open Mic Studios"
              className="filter blur-md" // Add the "filter blur-md" class to apply the blur effect
            />
          </section>
        </motion.div>

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
    </PageTransition>
  );
}
