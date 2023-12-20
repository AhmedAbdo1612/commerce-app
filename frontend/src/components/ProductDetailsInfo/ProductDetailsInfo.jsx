import React, { useState } from "react";

export default function ProductDetailsInfo({ data }) {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-gray-100 px-3 800px:px-10 py-2 rounded-t-lg h-[40vh]">
      <div className="w-full flex justify-between border-b  pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 
          font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
