import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleWhatsAppClick = () => {
        const phoneNumber = '8303279507'; // Replace with your WhatsApp phone number
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        )}`;
        window.open(url, '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWhatsAppClick();
    };

    return (
        <>
        <Navbar/>
        <div className="bg-transparent p-6 sm:p-10 mt-16">
            <div className="max-w-4xl mx-auto bg-[#1b1b1b9a] text-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder='Enter Name'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder='Enter Email'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder='Enter Message'
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Send via WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ContactUs;
