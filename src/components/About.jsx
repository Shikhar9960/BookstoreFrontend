

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen  bg-gradient-to-r from-blue-900 mt-14 via-gray-900 to-black">
                <div className="text-white p-6 sm:p-10">
                    <div className="max-w-7xl mx-auto">
                        {/* About Section */}
                        <section className="mb-12">
                            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">About Us</h1>
                            <p className="text-lg sm:text-xl text-white text-center">
                                Welcome to our Book Store! We are dedicated to helping you achieve your Mental goals
                                with top-notch Books and Comics.
                            </p>
                        </section>

                        {/* Mission Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6">Our Mission</h2>
                            <p className="text-lg sm:text-xl text-white text-center">
                                Our mission is to provide a friendly, inclusive, and motivating environment
                                where everyone can improve their physical and mental well-being. We believe
                                in the power of community and strive to support each member on their learning journey.
                            </p>
                        </section>

                        {/* Team Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6">Meet Our Team</h2>
                            <div className="flex flex-wrap justify-center gap-8">
                                {/* Team Member 1 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="bg-gray-600 p-6 rounded-lg shadow-md text-center">
                                        <img
                                            className="w-24 h-24 rounded-full mx-auto mb-4" alt='photo'
                                            src="..\src\assets\shikhar.jpeg"
                                        />
                                        <h3 className="text-xl font-semibold mb-2">Shikhar</h3>
                                        <p className="text-white">Backend Developer</p>
                                    </div>
                                </div>

                                {/* Team Member 2 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="bg-gray-600 p-6 rounded-lg shadow-md text-center">
                                        <img
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                            src="..\src\assets\pranshu.jpeg"
                                           
                                        />
                                        <h3 className="text-xl font-semibold mb-2">Pranshu</h3>
                                        <p className="text-white">Hosting & Data</p>
                                    </div>
                                </div>

                                {/* Team Member 3 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="bg-gray-600 p-6 rounded-lg shadow-md text-center">
                                        <img
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                            src="..\src\assets\suraj.jpeg"
                                            alt="Alice"
                                        />
                                        <h3 className="text-xl font-semibold mb-2">Suraj</h3>
                                        <p className="text-white">Connecting Frontend & Backend</p>
                                    </div>
                                </div>

                                {/* Team Member 4 (New) */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="bg-gray-600 p-6 rounded-lg shadow-md text-center">
                                        <img
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                            src="..\src\assets\saif.jpeg"
                                            alt="New Team Member"
                                        />
                                        <h3 className="text-xl font-semibold mb-2">Saif</h3>
                                        <p className="text-white">Frontend Developer</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;

