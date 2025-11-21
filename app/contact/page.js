import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen animate-fadeIn bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full bg-red-50 border border-red-200 rounded-2xl shadow-md p-10">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-red-600 text-center mb-6">
          Contact Us
        </h1>

        {/* Small Subtitle */}
        <p className="text-gray-700 text-center mb-8">
          Have any questions, ideas, or suggestions?  
          We’d love to hear from you!
        </p>

        {/* Contact Form */}
        <form className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-red-300 bg-white rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-red-300 bg-white rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              className="w-full border border-red-300 bg-white rounded-xl p-3 h-32 resize-none outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-red-700 transition-all shadow-md"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactPage;
