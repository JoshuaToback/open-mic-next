"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import OMS from "@/images/oms_temp.png"


const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navClasses = `flex items-center justify-between w-full pt-3 transition-all duration-300 border-gray-500 ${
    isSticky
      ? "sticky top-0 bg-background text-white shadow-md z-10 backdrop-filter backdrop-blur-md"
      : "bg-background text-white" 
  }`;

  const mobileMenuClasses = `sm:hidden ${
    isMobileMenuOpen ? "block" : "hidden"
  } absolute z-10 top-16 right-0 bg-black w-48 p-4 shadow-md text-white`; 

  return (
    <nav className={navClasses} >
      <div className="container mx-auto text-white">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex space-x-2">
            <Image
              alt="header text"
              src={OMS}
              className="sm:w-10 sm:h-10 w-9 h-9 rounded-xl"
              width={24}
              height={24}
            />
            <h1 className="sm:text-3xl text-xl font-semibold ml-2 tracking-tight">
              Open Mic Studios
            </h1>
          </Link>
          <div className="hidden  sm:flex space-x-3 p-8">
            <Link href="/about" className="block p-2 hover:text-gray-300">
              About
            </Link>
            <Link href="/people" className="block p-2 hover:text-gray-300">
              Clients
            </Link>

            <Link
              className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
              href="https://discord.gg/bTMU9EYFdY"
            >
              <p>Join Our Discord!</p>
            </Link>
          </div>
          <div className="sm:hidden flex items-center space-x-2 px-10">
            <button
              className="text-black hover:text-gray-300 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              Menu
            </button>
          </div>
        </div>
        <div className={mobileMenuClasses}>
          <Link href="/" className="block p-2 text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="block p-2 text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/people" className="block p-2 text-white hover:text-gray-300">
            Clients
          </Link>
          <Link href="https://discord.gg/AGZushveg5" className="block p-2 text-white hover:text-gray-300">
            Discord
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
