

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post('https://bookstorebackend-qdmu.onrender.com/user/signup', userInfo)
      .then((res) => {
        if (res.data) {
          toast.success('Signup Successfully!');
          navigate(from, { replace: true });
        }
        localStorage.setItem('Users', JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error('Error: ' + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-black to-blue-800">
      <div className="w-[600px] p-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
        <div className="modal-box p-8 bg-gray-900 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl text-white">Signup</h3>
            <div className="mt-4 space-y-4">
              <div>
                <span className="text-white">Name</span>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border-2 border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                  {...register('fullname', { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              <div>
                <span className="text-white">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border-2 border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              <div>
                <span className="text-white">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border-2 border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              <div className="flex justify-between items-center mt-6">
                <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 rounded-md hover:from-pink-700 hover:to-pink-800 transition duration-300">
                  Signup
                </button>
              </div>

              <div className="mt-6 text-center text-white">
                <p className="text-lg">
                  Already have an account?{' '}
                  <button
                    className="text-blue-400 underline cursor-pointer"
                    onClick={() =>
                      document.getElementById('my_modal_3').showModal()
                    }
                  >
                    Login
                  </button>
                </p>
                <Login />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

