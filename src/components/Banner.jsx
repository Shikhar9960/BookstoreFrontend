import React from 'react'
import three from '../../public/three.png'

const Banner = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
            
            <div className='order w-full md:w-1/2 flex'>
                <img src={three} alt="img" className='m-auto h-96 opacity-90' />
            </div>
            <div className='order-2 md:order-1 w-full md:w-1/2 md:mt-24 mt-12'>
                <div className='space-y-12'>
                    <h1 className='text-4xl font-bold'>Hello , welcome here to learn something <span className='text-blue-400'> new everyday !!!</span></h1>
                    <p className='text-xl '>Welcome to our SJ-bookstore, where every shelf holds a new adventure. Discover timeless classics, modern bestsellers, and hidden gems. Let your imagination soar as you explore our carefully curated collection. Happy reading! 📚✨</p>
                    <label className="input input-bordered flex items-center gap-2 outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 outline-none"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
                <button className="mt-6 btn bg-[#111515] px-4 py-2 h-8 cursor-pointer flex-wrap  duration-500">Subscribe</button>
            </div>
        </div>
    )
}

export default Banner
