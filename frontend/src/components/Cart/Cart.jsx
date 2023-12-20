import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
export default function Cart({ setOpenCart }) {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 gb ssd 8 gb ram silver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd 8 gb ram silver color",
      description: "test",
      price: 356,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd 8 gb ram silver color",
      description: "test",
      price: 722,
    },
  ];
  return (
    <div className="absolute top-0 left-0 w-full bg-black h-screen  z-10 bg-opacity-20 ">
      <div
        className=" absolute top-0 right-0 h-full w-full sm:w-[25%] 
     bg-white flex flex-col justify-between shadow-md rounded-t-xl"
      >
        <div className="">
          <div className="flex w-full justify-end pt-5 pr-5 ">
            <RxCross1
              size={25}
              onClick={() => setOpenCart(false)}
              className="cursor-pointer"
            />
          </div>
          {/* items list  */}
          <div className="flex items-center  p-4">
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-xl font-[500]"> 3 items</h5>
          </div>
          {/* Cart */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((item, index) => (
                <CartSingle data={item} key={index} />
              ))}
          </div>
        </div>
        <div className="px-5 mb-3">
            <Link to={'/checkout'}>
                <div className="h-[45px] flex items-center justify-center first-letter:w-[100]
                bg-red-600 rounded-[5px]">
                    <h2 className="text-xl text-white
                    ">Checkout Now (USD$1080)</h2>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = value * data.price;

  return (
    <div className="border-b p-4 py-7">
      <div className="w-full flex items-center">
        <div className="">
          <div
            className="bg-red-500 border-red-900 rounded-full w-[27px]
                    h-[27px] flex flex-col items-center justify-center cursor-pointer text-white"
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={25} />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-gray-700 border-red-900 rounded-full w-[27px]
                    h-[27px] flex flex-col items-center justify-center cursor-pointer text-white"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiMinus size={25} />
          </div>
        </div>
        <img
          src="https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-3"
        />
        <div className="pl-[5px]">
          <h2 className="font-semibold">{data.name}</h2>
          <h4 className="font-[400] text-[14px] text-gray-700">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-orange-700 font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" size={20}/>
      </div>
    </div>
  );
};
