import React from "react";

import Image from "next/image";
import mic from "@/images/microphone.jpg";

const Who = () => {
  return (
    <section className="py-16">
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
              Open Mic Studios is a casting studio that focuses on
              putting your voice on center stage! We priortize curating the best
              casting roster on the planet, made up of voice actors of every
              skill level! Founded in 2023, we're a group of casting directors,
              voice actors and artists who want to help game developers,
              animators, and project leads of all kinds create long lasting
              connections to fresh talent!
            </p>
          </div>
          {/* Additional Grid Items */}
          <div className="md:col-span-1 bg-slate-200 rounded-xl p-4">
            {/* Content for the first grid item */}
          </div>
          <div className="md:col-span-1 bg-slate-200 rounded-xl p-4">
            {/* Content for the second grid item */}
          </div>
          <div className="md:col-span-1 bg-slate-200 rounded-xl p-4">
            {/* Content for the third grid item */}
          </div>
          <div className="md:col-span-1 bg-slate-200 rounded-xl p-4">
            {/* Content for the fourth grid item */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
