import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">Connect with us:</p>
          <div className="flex mt-2">
            <a
              href="https://discord.com/your-discord-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 mr-4"
            >
              Discord
            </a>
            <a
              href="https://twitter.com/your-twitter-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Twitter
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
