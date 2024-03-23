"use client";

import PageTransition from "@/components/PageTransition";
import React from "react";
import ClientCard from "@/components/ClientCard";

import DON from "../../images/DoNInviteNoText.png";
import Eden from "../../images/Eden_Logo_Concept_5.png";

const clients = [
  {
    name: "Dead of Night Productions",
    src: DON,
    websiteUrl: "https://www.youtube.com/@deadofnightproductions",
  },

  { name: "Eden", src: Eden, websiteUrl: "https://twitter.com/edenaudiodrama" },
];

const ClientsPage = () => {
  return (
    <PageTransition>
      <div className="flex flex-wrap flex-col items-center justify-center">
        <h2 className="font-light text-4xl mb-4">Our Clients</h2>
        <div className="flex flex-row flex-wrap">
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              name={client.name}
              src={client.src}
              websiteUrl={client.websiteUrl}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default ClientsPage;
