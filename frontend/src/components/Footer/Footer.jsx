import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import {
  footerProductLinks,
  footercompanyLinks,
  footerSupportLinks,
} from "../../static/data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black text-white ">
      <div
        className="md:flex md:items-center md:justify-between 
         sm:pb-12 px-4 bg-blue-800 py-7"
      >
        <h2 className="lg:text-5xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-green-400">Subscripe</span> us to get news{" "}
          <br />
          <span className="text-yellow-500"> events and offers</span>
        </h2>
        <div>
          <input
            type="text"
            required
            placeholder="Enter you email..."
            className="text-gray-800 sm:w-72 w-full  sm:mr-5 mr-1 lg:mb-0 mb-4 
                py-2.5  rounded px-2 focus:outline-none"
          />
          <button
            className="bg-green-400 hover:bg-teal-500 duration-300
                px-5 py-2.5 rounded-md text-white md:w-auto w-full "
          >
            Submit
          </button>
        </div>
      </div>
      {/* the footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-6  sm:px-8 px-5  py-16 sm:text-center ">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>The home and elements needed to create the beautiful products.</p>
          <div className="flex items-center mt-[15px] gap-4">
            <AiFillFacebook size={30} className="cursor-pointer" />
            <AiOutlineTwitter size={30} className=" cursor-pointer" />
            <AiFillInstagram size={30} className=" cursor-pointer" />
            <AiFillYoutube size={30} className=" cursor-pointer" />
          </div>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-xl"> Company</h1>
          {footerProductLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400
                 hover:text-teal-400 duration-500 text-md cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-xl"> Shop</h1>
          {footercompanyLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400
                 hover:text-teal-400 duration-500 text-md cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-xl"> Support</h1>
          {footerSupportLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400
                 hover:text-teal-400 duration-500 text-md cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div
        className="flex w-full justify-between pt-2 flex-wrap sm:flex-row gap-3 md:px-6 text-gray-400  text-sm pb-8"
      >
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span>Terms Privacy Policy</span>
        <div className="sm:block flex items-center justify-center ">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
      </div>
  
  );
}
