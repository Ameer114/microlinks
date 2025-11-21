import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen animate-fadeIn bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-red-600 mb-6">
          About Us
        </h1>

        {/* Subtext / Highlight */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Long links are boring. They look messy. They break. They ruin the vibe.
        </p>

        {/* Main Content Box */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 shadow-md mb-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            That’s exactly why we built this URL Shortener — a clean and powerful tool
            that turns long, ugly URLs into short, sharp, and share-ready links.
            Whether you're sharing on Instagram, sending something to a friend, or
            running a campaign, we keep your links neat and professional.
            <br /><br />
            Quick. Simple. Zero drama.  
            <span className="text-red-600 font-semibold">
              Your link deserves better — and now it gets it.
            </span>
          </p>
        </div>

        {/* Contact Button */}
        <Link href="/contact">
          <button className="px-6 py-3 bg-red-600 cursor-pointer text-white rounded-xl text-lg font-semibold shadow-md hover:bg-red-700 transition-all">
            Contact Us
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Page;
