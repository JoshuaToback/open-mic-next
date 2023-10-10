import React from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto p-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-600 text-2xl mb-8">
            Want to work together or join our community? Reach out and say hi!
          </p>
        </div>
        <div className="flex justify-center items-center mb-8">
          <form className="max-w-md w-full bg-white p-6 shadow-md rounded-lg">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border rounded-lg py-2 px-3 w-full h-32 focus:outline-none focus:border-blue-400 resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <a
              href="mailto:casting.openmicstudios@gmail.com"
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 text-center block w-full"
            >
              Send Email
            </a>
          </form>
        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-4">Connect with us on:</p>
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
      </div>
    </section>
  );
};

export default ContactSection;
