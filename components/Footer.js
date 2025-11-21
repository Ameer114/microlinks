import React from "react";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-2">MicroLinks</h2>
          <p className="text-gray-100">
            Making long links short, sharp, and share-ready.  
            Quick. Simple. Zero drama.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-red-200 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-200 transition">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-200 transition">Contact</Link>
            </li>
            <li>
              <Link href="/shorten" className="hover:text-red-200 transition">Shorten URL</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/ambivert_114/" target="_blank" className="hover:text-red-200 transition"><FaInstagram size={22} /></a>
            <a href="https://x.com/AmeerNagar76085" target="_blank" className="hover:text-red-200 transition"><FaTwitter size={22} /></a>
            <a href="https://github.com/Ameer114" target="_blank" className="hover:text-red-200 transition"><FaGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/ameer-nagarasi/" target="_blank" className="hover:text-red-200 transition"><FaLinkedin size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-red-500 mt-6 pt-4 text-center text-gray-100 text-sm">
        &copy; {new Date().getFullYear()} MicroLinks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
