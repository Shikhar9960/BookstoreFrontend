

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useAuth } from '../Context/Authprovider';
import Logout from './Logout';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`max-w-screen-2xl mx-auto px-4 md:px-20 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? 'bg-black shadow-lg duration-300 transition-all ease-in-out'
          : 'bg-gray-900'
      }`}
    >
      <div className="navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52 text-white"
            >
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/Book">BOOKS</Link>
              </li>
              <li>
                <Link to="/Contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/About">ABOUT</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold text-white">
            E-LIBRARY
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-white space-x-6">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Book">BOOKS</Link>
            </li>
            <li>
              <Link to="/Contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/About">ABOUT</Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center">
          {/* Search Bar */}
          <div className="hidden md:block px-3">
            <label className="flex items-center bg-gray-800 rounded-full px-3 py-2">
              <input
                type="text"
                className="bg-transparent outline-none text-white placeholder-gray-400"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* Auth Buttons */}
          {authUser ? (
            <Logout />
          ) : (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-600 transition duration-300"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Login
            </button>
          )}
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

