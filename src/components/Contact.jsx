

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppClick = () => {
    const phoneNumber = "8303279507"; // Replace with your WhatsApp phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.open(url, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppClick();
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-900 mt-10 via-gray-900 to-black min-h-screen flex items-center justify-center py-10 px-4">
        <div className="max-w-3xl w-full bg-black/70 backdrop-blur-lg text-white p-8 rounded-lg shadow-2xl border border-gray-700">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                placeholder="Write your message here..."
                rows="5"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition"
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

