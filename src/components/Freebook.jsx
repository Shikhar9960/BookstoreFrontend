

import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const Freebook = () => {
  const [book, setBook] = useState([]);
  
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstorebackend-qdmu.onrender.com/book");
        const data = res.data.filter((data) => data.category === "free");
        setBook(data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getBook();
  }, []);
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-2xl mx-auto container md:px-20 px-4 bg-gradient-to-b from-black to-blue-900 p-10 rounded-xl shadow-lg'>
      <div className="text-white mb-8">
        <h1 className='font-semibold text-3xl pb-2 text-center'>Free Offered Books</h1>
        <p className='text-lg text-center'>
          Discover a world of free books that can take your reading experience to the next level. Whether you're into timeless classics or hidden gems, we've got you covered.
        </p>
      </div>

      <div className="slider-container ml-5">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;

