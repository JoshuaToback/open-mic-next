import React from "react";

import micIcon from "@/images/mic.png";
import Image from "next/image";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="container mx-auto py-16">
          <h2 className="text-5xl font-light text-gray-800 mb-8">
            The Mic System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-md">
              <h3 className="text-4xl font-medium text-gray-800 mb-4">
                The Bronze Mic
              </h3>
              <Image
                src={micIcon}
                alt="micIcon"
                width={100}
                height={100}
                className="bg-amber-800 rounded-full"
              />

              <p className="text-gray-600 text-2xl font-extralight p-10 text-center">
                The starting tier that gets access to workshops, coaching and
                more!
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-md">
              <h3 className="text-4xl font-medium text-gray-800 mb-4">
                The Silver Mic
              </h3>
              <Image
                src={micIcon}
                alt="micIcon"
                width={100}
                height={100}
                className="bg-slate-500 rounded-full"
              />

              <p className="text-gray-600 text-2xl font-extralight p-10 text-center">
                The next level for people with verified setups! They get
                exclusive access to casting calls from both us and our clients!
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-md">
              <h3 className="text-4xl font-medium text-gray-800 mb-4">
                The Gold Mic
              </h3>
              <Image
                src={micIcon}
                alt="micIcon"
                width={100}
                height={100}
                className="bg-yellow-500 rounded-full"
              />

              <p className="text-gray-600 text-2xl font-extralight p-10 text-center">
                For professional voice actors who are established and ready to
                reach the stars! Gold Mics get feedback on every audition.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-5xl font-light text-gray-800 mb-8">
          The Casting System
        </h2>

        <p className="text-2xl text-center font-semilight text-gry-800 m-8">
          Using a numbered casting system, one person receives the auditions and
          removes any names from the file, but adds a number to it.Another
          casting director looks at the numbered audition files with the client
          and determines who is the best fit. If the unnamed and numbered
          audition is selected, it will be matched to the person who submitted!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Step 1 | General Casting
            </h3>
            <p className="text-gray-600 text-lg">
              Casting begins via form submission or submission via email. The
              casting lead of that project is selected from our moderator team
              and they duplicate and rename the auditions with numbers as they
              come in.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Step 2 | Casting Process
            </h3>
            <p className="text-gray-600 text-lg">
              With the client and moderator team, everyone listens to the
              numbered auditions and decides on the best fit.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Step 3 | Callbacks and Selection
            </h3> 
            <p className="text-gray-600 text-lg">
              After initial selections, the client and lead casting directors
              will notify the selected parties and establish contact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
