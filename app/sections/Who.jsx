"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Image from "next/image";
import mic from "@/images/microphone.jpg";

import micIcon from "@/images/mic.png";
import netIcon from "@/images/network.png";
import anonIcon from "@/images/anon.png";
import theater from "@/images/theater.png";

const Who = () => {
  const AnimatedGridItem = ({ children }) => {
    const controls = useAnimation();

    useEffect(() => {
      const handleScroll = () => {
        // Adjust the threshold as needed
        if (window.scrollY > 100) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [controls]);
  

    return (
      <motion.div
        className="md:col-span-1 bg-slate-200 text-center flex flex-col items-center justify-center rounded-xl p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {children}
      </motion.div>
    );

    
  };

  return (
    <section className="py-16" id="who">
      <div className="container mx-auto">
        <h2 className="text-5xl font-semibold mb-4">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1 bg-white rounded-xl p-4">
            <Image
              src={mic}
              alt="microphone"
              width={700}
              height={700}
              className="rounded-full"
            />
          </div>
          {/* Text */}
          <div className="md:col-span-3 bg-white rounded-xl p-4">
            <p className="text-gray-700 font-light">
              Open Mic Studios is a casting studio that focuses on putting your
              voice on center stage! We priortize curating the best casting
              roster on the planet, made up of voice actors of every skill
              level! Founded in 2023, we're a group of casting directors, voice
              actors and artists who want to help game developers, animators,
              and project leads of all kinds create long lasting connections to
              fresh talent!
            </p>
          </div>
          {/* Additional Grid Items */}
          <AnimatedGridItem>
            <h3 className="text-3xl font-semibold">Casting and Directing</h3>
            <Image src={micIcon} alt="micIcon" width={100} height={100} />
            <p className="text-2xl font-light pt-5">
              We offer thoughtful and passionate casting and directing from
              industry creators and professionals who love voice acting as much
              as you do!
            </p>
          </AnimatedGridItem>

          <AnimatedGridItem>
            <div className="md:col-span-1 bg-slate-200 text-center flex flex-col items-center justify-center rounded-xl p-4">
              <h3 className="text-3xl font-semibold">Networking</h3>
              <Image src={netIcon} alt="net" width={100} height={100} />
              <p className="text-2xl font-light pt-5">
                Using our Discord server and talent pool, we can connect
                directors with a curated and passionate pool of vetted voice
                actors!
              </p>
            </div>
          </AnimatedGridItem>

          <AnimatedGridItem>
            <div className="md:col-span-1 bg-slate-200 text-center flex flex-col items-center justify-center rounded-xl p-4">
              <h3 className="text-3xl font-semibold">Anonymous Casting</h3>
              <Image src={anonIcon} alt="anon" width={100} height={100} />
              <p className="text-2xl font-light pt-5">
                We use a dedicated casting system to make sure new voices that
                have been approved by our voice team can take center stage!
              </p>
            </div>
          </AnimatedGridItem>

          <AnimatedGridItem>
            <div className="md:col-span-1 bg-slate-200 text-center flex flex-col items-center justify-center rounded-xl p-4">
              <h3 className="text-3xl font-semibold">Classes and Workshops</h3>
              <Image src={theater} alt="theatre" width={100} height={100} />
              <p className="text-2xl font-light pt-5">
                Within our server we host mixers, workshops, and 1 on 1 coaching
                sessions with our staff to help our curated roster grow!
              </p>
            </div>
          </AnimatedGridItem>
        </div>
      </div>
    </section>
  );
};

export default Who;
