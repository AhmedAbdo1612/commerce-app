import React, { useState, } from "react";
import {PulseLoader}  from "react-spinners";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "../../App.css";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

export default function Signup() {
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  async function handleSubmit(event) {
    setLoading(true);  
    event.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const res = await axios.post(
        `${server}/user/signup`,
        { ...formData, file: avatar },
        config
      );
      const data = res.data;
      setLoading(false)
      toast.success(data.message);
      setFormData({ email: "", password: "", name: "" });
    } catch (error) {
      setLoading(false)
      toast.error(error.response.data.message);
      console.log(error);
    }
  }
  function handleFileUpload(e) {
    const file = e.target.files[0];
    setAvatar(file);
  }
  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }
  return (
    <div
      className="min-h-screen mx-auto signin-background
     flex  flex-col justify-start py-12 sm:px-6 lg:px-8 "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-white mt-6 text-center text-4xl font-extrabold">
          SignUp
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                autoComplete="name"
                required
                className="border border-gray-300
                 rounded-md shadow-sm mt-3 p-2 w-full placholder:gray-400
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
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
              <div className="">
                <label
                  htmlFor="avatar"
                  className="text-sm font-semibold block text-color-gray-700"
                >
                  <div className=" mt-2 flex items-center ">
                    <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                      {avatar ? (
                        <img
                          src={URL.createObjectURL(avatar)}
                          alt="avatar"
                          className="h-full w-full object-cover rounded-full"
                        />
                      ) : (
                        <RxAvatar className="h-8 w-8" />
                      )}
                    </span>
                    <label
                      htmlFor="file-input"
                      className="ml-5 flex items-center justify-center px-4  py-3 
                    border border-gray-300 rounded-md shadow-md text-sm font-medium
                    text-gray-700 bg-white hover:bg-gray-100"
                    >
                      <span>Upload a file </span>
                      <input
                        type="file"
                        name="avatar"
                        id="file-input"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </label>
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
                  Sign Up
                </button>
              )}
            </div>
            <div className="flex items-center justify-center">
              <h3>Already have account?</h3>
              <Link to={"/signin"} className="text-blue-600 pl-3 font-semibold">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
