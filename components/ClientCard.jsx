// src/components/ClientCard.js
import Image from 'next/image';
import React from 'react';

const ClientCard = ({ name, src, websiteUrl }) => {
  return (
    <div className="w-64 p-4 m-4 border rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={name}
          className="w-auto h-auto object-cover rounded-lg hover:grow"
        />
        <h2 className="mt-2 text-xl font-semibold">{name}</h2>
      </a>
    </div>
  );
};

export default ClientCard;
