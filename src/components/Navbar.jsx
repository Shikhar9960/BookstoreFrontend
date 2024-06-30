import React, { useState, useEffect } from 'react'
import Login from './Login'
import { useAuth } from '../Context/Authprovider'
import Logout from './Logout'
import { Link } from 'react-router-dom'

function Navbar() {
  const [authUser, setAuthUser] = useAuth()

  const [sticky, setsticky] = useState(false)

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 0) {
        setsticky(true)
      }
      else {
        setsticky(false)
      }

      window.addEventListener('scroll', handlescroll)

      return () => {
        window.removeEventListener('scroll', handlescroll)
      }
    }
  }, []);


  return (
    <div className={`max-w-screen-2xl mx-auto container md:px-20 z-50 px-4 bg-gray-900 fixed top-0 left-0 right-0 
    ${sticky ? "sticky-navbar shadow-md bg-black duration-300 trasition-all ease-in-out " : ""}`}>
      <div className="navbar p-0 bg-gray-900">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>HOME</Link></li>

              <li><Link to='/Book'>BOOKS</Link></li>
              <li><Link to='/Contact'>CONTACT</Link></li>

              <li><Link to='/About'>ABOUT</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">SJ-BOOKS</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold text-xl">
              <li><Link to='/'>HOME</Link></li>

              <li><Link to='/Book'>BOOKS</Link></li>
              <li><Link to='/Contact'>CONTACT</Link></li>

              <li><Link to='/About'>ABOUT</Link></li>
            </ul>

          </div>
          <div className='hidden md:block px-3'>
            <label className="input h-10 after:border-transparent border-none   flex items-center gap-2">
              <input type="text" className="grow outline-none" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
          </div>
          {
            authUser ?(<Logout />)  :(
               <div >
              <a className="bg-[#1d232a] px-4 py-2 h-8 cursor-pointer flex-wrap  duration-500" 
              onClick={() => 
              document.getElementById('my_modal_3').showModal()
              }>Login</a>
              <Login />
            </div>)
          }
         


        </div>
      </div></div>
  )
}

export default Navbar
