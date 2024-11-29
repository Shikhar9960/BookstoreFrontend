
import React from 'react';
import three from '../../public/three.png';

const Banner = () => {
    return (
        <div className=' mt-5 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  bg-gradient-to-b from-blue-900 to-black p-10 rounded-xl shadow-xl'>
            {/* Image Section */}
            <div className='w-full md:w-1/2 flex justify-center md:order-1 order-2'>
                <img src={three} alt="img" className='m-auto h-96 rounded-lg shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-300' />
            </div>

            {/* Text Section */}
            <div className='w-full md:w-1/2 md:mt-24 mt-12 flex flex-col justify-center items-start md:order-2 order-1 space-y-8'>
                <h1 className='text-5xl font-extrabold text-white leading-tight'>
                    Hello, welcome here to learn something
                    <span className='text-yellow-300'> new every day!!!</span>
                </h1>
                <p className='text-xl text-white'>
                    Welcome to our E-Library, where every shelf holds a new adventure. Discover timeless classics, modern bestsellers, and hidden gems. Let your imagination soar as you explore our carefully curated collection. Happy reading! 📚✨
                </p>

                {/* Input Section */}
                <div className="flex items-center space-x-3">
                    <label className="input input-bordered text-black flex items-center gap-2 rounded-md px-4 py-2 outline-none shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" className="grow text-black p-2 rounded-md" placeholder="Enter your Email" />
                    </label>

                    <button className=" btn bg-yellow-500 text-black px-8 py-2 rounded-lg shadow-lg transition duration-300 hover:bg-yellow-400 transform hover:scale-105">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;

