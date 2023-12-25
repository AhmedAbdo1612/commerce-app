import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../../redux/user/user-slice.js";
import "../../App.css";
import axios from "axios";
import { server } from "../../server.js";
import { toast } from "react-toastify";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    dispatch(signInStart());
    try {
      const res = await axios.post(`${server}/user/signin`, formData, {withCredentials: true,});
      console.log(res);
      dispatch(signInSuccess(res.data));
      toast.success("Login Success");
      navigate("/");
      window.location.reload()
    } catch (error) {
      setLoading(false);
      dispatch(signInFailure("Falied"));
      console.log(error);
      toast.error("Failed");
    }
  }
  return (
    <div
      className="min-h-screen mx-auto signin-background
     flex  flex-col justify-start py-12 sm:px-6 lg:px-8 "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-white mt-6 text-center text-4xl font-extrabold">
          Login to Your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                autoComplete="email"
                required
                className="border border-gray-300
                 rounded-md shadow-sm mt-3 p-2 w-full placholder:gray-400
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  value={FormData.password}
                  onChange={handleChange}
                  type={visible ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  required
                  className="border border-gray-300
                 rounded-md shadow-sm mt-3 p-2 w-full placholder:gray-400
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-5 cursor-pointer "
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-5 cursor-pointer "
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <input type="checkbox" className="w-5 h-5" id="remember-me" />
                <label htmlFor="remember-me" className="font-semibold">
                  {" "}
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className=" font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="sweet-loading"></div>
              {loading ? (
                <PulseLoader color="#36d7b7" />
              ) : (
                <button
                  type="submit"
                  className="group relative  w-full py-4
             flex justify-center border-transparent font-bold
              rounded-lg  text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign in
                </button>
              )}
            </div>
            <div className="flex items-center justify-center">
              <h3>Don't have account?</h3>
              <Link
                to={"/sign-up"}
                className="text-blue-600 pl-3 font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
