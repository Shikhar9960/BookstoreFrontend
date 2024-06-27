import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Books = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-seven-chi.vercel.app/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log("error: ", error)
      }
    }
    getBook();
  }, [])

  return (
    <>
      <div className='max-w-screen-2xl mx-auto container md:px-20 z-50 px-4 text-white'>
        <div className='mt-28 justify-center items-center text-center'>
          <h1 className='text-2xl  md:text-4xl '>We're delighted to have you <span className='text-pink-500'>here :)</span></h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum inventore ullam recusandae, reiciendis voluptates quasi, exercitationem illo quos aspernatur consequatur culpa eaque neque autem dolores atque, amet quo at Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae molestiae, ab reiciendis quisquam libero a aut deserunt alias? Optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facere id pariatur. Nisi dolore placeat vitae blanditiis consequuntur id cumque!
          </p>
          <Link to="/">
            <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200'>Back</button>
          </Link>
        </div>
        <div className='mt-12 ml-3 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 p-10'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }

        </div>
      </div>
    </>
  )
}

export default Books
