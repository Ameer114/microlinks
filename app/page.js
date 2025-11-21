"use client";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-red-50 flex flex-col items-center justify-center overflow-hidden px-4 py-16">
      
      {/* Floating Balls */}
      <div className="absolute top-0 left-0 w-full h-full">
        <span className="absolute bg-red-400 w-6 h-6 rounded-full animate-bounce-slow top-10 left-10"></span>
        <span className="absolute bg-red-300 w-8 h-8 rounded-full animate-bounce-slower top-1/3 left-1/2"></span>
        <span className="absolute bg-red-500 w-4 h-4 rounded-full animate-bounce-fast top-2/3 left-2/3"></span>
        <span className="absolute bg-red-200 w-10 h-10 rounded-full animate-bounce-slowest top-1/4 left-3/4"></span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4 animate-fadeIn">
          Shorten Links Instantly
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fadeIn delay-200">
          Turn your long URLs into clean, memorable links — fast and easy.
        </p>
        <Link href="/shorten">
          <button className="cursor-pointer bg-red-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-red-600 transition transform hover:-translate-y-1 animate-fadeIn delay-400">
            Try Now
          </button>
        </Link>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn { animation: fadeIn 1s forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow { animation: bounce-slow 6s infinite ease-in-out; }

        @keyframes bounce-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .animate-bounce-slower { animation: bounce-slower 8s infinite ease-in-out; }

        @keyframes bounce-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-fast { animation: bounce-fast 3s infinite ease-in-out; }

        @keyframes bounce-slowest {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-bounce-slowest { animation: bounce-slowest 10s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Home;
