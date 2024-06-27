import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
    return (
        <>
        <Navbar/>
        <div className='min-h-screen mt-14 '>
        <div className="bg-transparent text-white p-6 sm:p-10   ">
            <div className="max-w-7xl mx-auto">
                <section className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">About Us</h1>
                    <p className="text-lg sm:text-xl text-white text-center">
                        Welcome to our Book Store! We are dedicated to helping you achieve your Mental goals
                        with top-notch Books and Comics.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6">Our Mission</h2>
                    <p className="text-lg sm:text-xl text-white text-center">
                        Our mission is to provide a friendly, inclusive, and motivating environment
                        where everyone can improve their physical and mental well-being. We believe
                        in the power of community and strive to support each member on their learning journey.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6">Meet Our Team</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-gray-600 p-6 rounded-lg shadow-md text-center">
                                <img
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJtv72esjEWvfSpkux9LhOEGiBQ5vuR8drQ&s"
                                    alt="Team Member"
                                />
                                <h3 className="text-xl font-semibold mb-2">Shikhar</h3>
                                <p className="text-white">Head Trainer</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-gray-600 p-6 rounded-lg shadow-md text-center">
                                <img
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJtv72esjEWvfSpkux9LhOEGiBQ5vuR8drQ&s"
                                    alt="Team Member"
                                />
                                <h3 className="text-xl font-semibold mb-2">john</h3>
                                <p className="text-white">Nutritionist</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-gray-600 p-6 rounded-lg shadow-md text-center">
                                <img
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJtv72esjEWvfSpkux9LhOEGiBQ5vuR8drQ&s"
                                    alt="Team Member"
                                />
                                <h3 className="text-xl font-semibold mb-2">Alice</h3>
                                <p className="text-white">Fitness Coach</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default AboutPage;
