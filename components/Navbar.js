"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-500 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">MicroLinks</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <Link href="/">
            <li className="hover:text-red-200 transition cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/shorten">
            <li className="hover:text-red-200 transition cursor-pointer">
              Shorten
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:text-red-200 transition cursor-pointer">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-red-200 transition cursor-pointer">
              Contact Us
            </li>
          </Link>
          <Link href="https://github.com/Ameer114" target="_blank">
            <button className="bg-red-400 px-4 py-1 rounded-md hover:bg-red-300 transition font-semibold">
              Github
            </button>
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-500 text-white px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <p className="hover:text-red-200 transition cursor-pointer">Home</p>
          </Link>
          <Link href="/shorten" onClick={() => setIsOpen(false)}>
            <p className="hover:text-red-200 transition cursor-pointer">
              Shorten
            </p>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <p className="hover:text-red-200 transition cursor-pointer">
              About
            </p>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <p className="hover:text-red-200 transition cursor-pointer">
              Contact Us
            </p>
          </Link>
          <a
            href="https://github.com/Ameer114"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full bg-red-400 px-4 py-2 rounded-md hover:bg-red-300 transition font-semibold text-center block"
          >
            Github
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
