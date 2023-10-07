import React from "react";

import Josh from "@/images/headshot.png";
import Andrea from "@/images/andreareel.png";
import Violet from "@/images/violet.png";
import ghoul from "@/images/flgl.png";
import Chris from "@/images/falcon.png";
import RMM from "@/images/RMM.png";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      name: "Joshua Toback (JTVA)",
      title: "Project Lead and Casting Director",
      image: Josh,
      bio: "The founder of Open Mic Studios, Joshua began voice acting in 2007 when he recorded voice over for his LEGO stopmotion animations. Little did he know that the voice acting aspect would turn into his greatest passion. He is now a casting director aspiring to create a bridge for everyone to cross over into the voiceover industry!",
    },

    {
      name: "Gordon Williams (RedMufflerMan)",
      title: "Casting Director",
      image: RMM,
      bio: "Gordon is a Voice Actor, Casting director and Content Creator based in Houston TX.  With over 10+ years of production experience ranging from television, to advertising, to Youtube content creation, Gordon has the experience to help make your project a reality!",
    },

    {
      name: "Andrea Avery (DreyahVA)",
      title: "Casting Director and Voice Coach",
      image: Andrea,
      bio: "Andrea is a classically trained singer and actor with a passion for performance! She’s been voice acting for 3 years but has been an actor since childhood. She loves to direct and bring people into the voice over community. She is always around and willing to help!",
    },

    {
      name: "Violet (MetalFireVA)",
      title: "Casting Director",
      image: Violet,
      bio: "Violet is a longtime voice actress who's been a part of several projects since 2012. She hopes to bring her passion for voiceover and excitement regarding finding new talent to work with to OMS!",
    },

    {
      name: "Luis Luna (FLGL)",
      title: "Casting Director and Designer",
      image: ghoul,
      bio: "Luis is a longtime artist and voice actor who's a voice actor for fun and an artist for real! His passion for art of both digital and voice will paint a new picture for you!",
    },

    {
      name: "Christiaan Conners",
      title: "Casting Director",
      image: Chris,
      bio: "Starting his voice acting journey in 2014, Christiaan has kept chasing the dream to this day. He has joined OMS to help others chase said dream!",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-slate-300 rounded-lg shadow-md p-6">
            <Image
              src={member.image} 
              alt={member.name}
              width={128} 
              height={128} 
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <h3 className="text-xl text-gray-600 mb-2">{member.title}</h3>
            <p className="text-lg font-base text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
