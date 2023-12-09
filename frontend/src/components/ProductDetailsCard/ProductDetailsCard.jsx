import React from "react";
import { useState } from "react";
import { AiOutlineMessage, AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
export default function ProductDetailsCard({ setOpen, data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  // const [select, setSelect] = useState(false);
  function handleSubmit() {}
  return (
    <div className="bg-white">
      {data ? (
        <div
          className="fixed w-full h-screen top-0 left-0 bg-gray-500 bg-opacity-50 z-40
             flex items-center justify-center"
        >
          <div
            className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh]
                bg-white rounded-md shadow-sm relative p-4"
          >
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img src={data.image_Url[0].url} alt="" />
                <div className="flex">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px]  rounded-full mr-2"
                  />
                  <div className="">
                    <h3 className="pt-3 text-[15px] text-blue-400 pb-3">
                      {data.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">
                      ( {data.shop.ratings}) Ratings
                    </h5>
                  </div>
                </div>
                <div
                  className="w-[150px] bg-black 
                    h-[50px] my-3 flex items-center justify-center
                     rounded-xl cursor-pointer mt-4 ml-3"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <span className="text-white flex items-center ">
                    Send Message <AiOutlineMessage className="ml-1" size={25} />
                  </span>
                </div>
                <h5 className="text-[16px] text-red-500">
                  {" "}
                  ({data.total_sell}) Sold out
                </h5>
              </div>
              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px] ">
                <h1 className="text-[25px] font-[600] font-Roboto text-[#333]">
                  {data.name}
                </h1>
                <p>{data.description}</p>
                <div className="flex pt-3 items">
                  <h4 className="font-bold text-[18px] text-[#333] font-Roboto">
                    {data.discount_price}$
                  </h4>
                  <h3 className="font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through">
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12  pr-3">
                  <button
                    className="bg-gradient-to-r from-teal-400 to-teal-600
                    text-white font-bold rounded-l px-4 py-2 shadow-lg 
                    hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                  <span className="px-4 py-2 bg-gray-200 text-gray-800 font-medium">
                    {count}
                  </span>
                  <button
                    className="bg-gradient-to-r from-teal-400 to-teal-600
                    text-white font-bold rounded-l px-4 py-2 shadow-lg 
                    hover:opacity-75 transition duration-300 ease-in-out
                   "
                    onClick={() => (count > 0 ? setCount(count - 1) : null)}
                  >
                    -
                  </button>
                  <div className="mx-auto">
                  {click ? (
                    <AiFillHeart
                      size={30}
                      className="cursor-pointer "
                      onClick={() => setClick(!click)}
                      color={click ? "red" : "blue"}
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      className="cursor-pointer "
                      color={click ? "red" : "black"}
                      onClick={() => setClick(!click)}
                    />
                  )}
                </div>
                </div>
               <div className="mt-12 flex gap-3 rounded-md p-3 text-lg
                bg-gray-900 justify-center text-white">
                <span className="">Add to cart </span>
                <AiOutlineShoppingCart size={30}/>
               </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
