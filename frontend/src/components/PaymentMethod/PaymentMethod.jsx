import React from "react";
import {AiOutlineDelete} from 'react-icons/ai'

export default function PaymentMethod() {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-gray-800 pb-2">
          Payment Methods
        </h1>
        <div
          className="w-[150px] bg-black h-[50px] my-3 flex
             items-center justify-center cursor-pointer rounded-lg"
        >
          <span className="text-white hover:text-xl">Add New</span>
        </div>
      </div>
      <br />
      <div
        className="w-full bg-white h-[70px] rounded-[4px] flex 
        items-center px-3 shadow justify-between pr-10"
      >
        <div className="flex items-center">
          <img
            src="http://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt=""
          />
          <h5 className="pl-5 font-[600]"> Ahmed Abdo</h5>
        </div>
        <div className="flex pl-8 items-center">
          <h6>123 **** *** ****</h6>
          <h5 className="pl-6">08/2023</h5>
        </div>
        <div className="min-w-[10%] felx items-center justify-between pl-8">
            <AiOutlineDelete size={25} className="cursor-pointer text-red-700   delete-icon"/>
        </div>
      </div>
    </div>
  );
}
