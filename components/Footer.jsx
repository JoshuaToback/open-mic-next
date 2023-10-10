import React from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 h-full text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <div className="flex justify-center">
            <a
              href="https://discord.gg/2YtK56zNbn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 mx-4"
            >
              <FaDiscord className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/castingopenmic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 mx-4"
            >
              <FaTwitter className="text-3xl" />
            </a>
          </div>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Open Mic Studios</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
