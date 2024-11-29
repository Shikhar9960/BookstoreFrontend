

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstorebackend-qdmu.onrender.com/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl text-white">Login</h3>

            {/* Email */}
            <div className="mt-6 space-y-4">
              <div>
                <span className="text-white">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border-2 border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div>
                <span className="text-white">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border-2 border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Login Button */}
              <div className="flex justify-between items-center mt-6">
                <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 rounded-md hover:from-pink-700 hover:to-pink-800 transition duration-300">
                  Login
                </button>
              </div>

              {/* Signup Link */}
              <div className="mt-4 text-center text-white">
                <p className="text-lg">
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-400 underline cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

