import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

export default function Address() {
  return (
<div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-gray-800 pb-2">
          My Addresses
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
          <h5 className="pl-5 font-[600]"> Fefault</h5>
        </div>
        <div className="flex pl-8 items-center">
          <h6>New Damietta, Damuat, Egypt</h6>
        </div>
        <div className="flex pl-8 items-center">
          <h6>123456798011</h6>
        </div>
        <div className="min-w-[10%] felx items-center justify-between pl-8">
            <AiOutlineDelete size={25} className="cursor-pointer text-red-700   delete-icon"/>
        </div>
      </div>
    </div>
  )
}
