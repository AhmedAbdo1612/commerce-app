import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMessage,
} from "react-icons/ai";
import ProductDetailsInfo from "../ProductDetailsInfo/ProductDetailsInfo";
export default function ProductDetails({ data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigat = useNavigate();
  const handleMeaageSubmit = () => {
    navigat("/inpox?conversation=23effvre4");
  };

  return (
    <div className="bg-white">
      {data && (
        <div className="unset w-[90%] 800px:w-[80%] mx-auto">
          <div className="w-full py-5">
            <div className="block w-full 800px:flex ">
              <div className="w-full 800px:w-[50%] 800px:pl-12">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : null
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>

                  <div
                    className={`${
                      select === 1 ? "border" : null
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className="text-[25px] font-[600] font-Roboto text-[#333]">
                  {data.name}
                </h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className="font-bold text-[18px] text-[#333] font-Roboto">
                    {data.discount_price}$
                  </h4>
                  <h3 className="font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through">
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12  pr-3  justify-evenly">
                  <div className="">
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
                  </div>
                  <div className="">
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
                <div
                  className=" bg-black  my-3  w-full 800px:w-[80%] mx-auto
                  flex rounded-xl justify-center text-xl cursor-pointer
                   mt-9 h-11 items-center"
                >
                  <span className="text-white  p-5 py-4">Add to cart </span>
                  <AiOutlineShoppingCart className="text-white" size={25} />
                </div>
                <div className="flex items-center pt-8 flex-wrap">
                  <img
                    src={`${data.shop.shop_avatar.url}`}
                    alt=""
                    className="rounded-full w-[50px] h-[50px] mr-2"
                  />
                  <div className="pr-8">
                    <h3 className="pt-1 text-[15px] text-blue-400 pb-1">
                      {data.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">({data.shop.ratings}) Ratings</h5>
                  </div>
                  <div onClick={handleMeaageSubmit}
                    className="w-[170px] bg-indigo-800 h-14 my-3 flex ml-8
                   items-center justify-center rounded-xl cursor-pointer mt-4 "
                  >
                    <span className="text-white items-center flex">
                      Send Message
                      <AiOutlineMessage size={24} className="ml-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data}/>
          <br />
          <br />
        </div>
      )}
    </div>
  );
}
