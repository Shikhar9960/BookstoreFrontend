

import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstorebackend-qdmu.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className='bg-gradient-to-r from-blue-900 to-black text-white max-w-screen-2xl mx-auto container md:px-20 px-4'>
        {/* Heading Section */}
        <div className='mt-20 text-center'>
          <h1 className='text-3xl md:text-5xl font-semibold text-white'>
            We're delighted to have you <span className='text-blue-400'>here :)</span>
          </h1>
          <p className='mt-8 text-lg md:text-xl text-gray-300'>
            Explore our collection of amazing books from various genres. Whether you're into fiction, non-fiction, or educational reads, we have something for everyone!
            <br />
            Dive in and find your next favorite read.
          </p>
          <Link to="/">
            <button className='mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300'>
              Back to Home
            </button>
          </Link>
        </div>

        {/* Books Grid Section */}
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6'>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;

