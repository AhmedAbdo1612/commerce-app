import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[70vh] w-full bg-no-repeat flex items-center`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className="w-11/12 mx-auto w-[90%] 800px:w-[60%]">
        <h1
          className="text-[35px] leaidn-[1.2] 800px:text-[60px]
             text-gray-800 font-[700] capitalize"
        >
          Best collection for <br /> home decoration{" "}
        </h1>
        <p className="pt-5 text-[18px] font-[400] text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          corporis pariatur, dicta culpa, dolore fugit est nihil in nesciunt
          repellendus perspiciatis! Fuga alias suscipit recusandae odio? Esse
          omnis quidem possimus.
        </p>
        <Link to={"/products"} className="inline-block">
          <div className=" mt-5 w-[150px] bg-black h-[50px] my-3 flex 
          items-center justify-center rounded-xl cursor-pointer"> 
          <span className="text-white font-Roboto font-400 text-[18px]">
            Shop Now 
          </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
