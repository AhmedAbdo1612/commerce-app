import React from "react";
import CountDown from "../CountDown/CountDown";

export default function EventCard({active}) {
  return (
    <div className={`w-full bg-white rounded-lg ${active?"unset":"mb-12"} lg:flex p-2
    sm:w-[80%] sm:mx-auto`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:w-[50%] m-auto flex flex-col justify-center">
        <h2 className="text-[25px] font-[600] font-Roboto text-[#333]">
          Iphone 14pro max
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          temporibus doloremque vitae excepturi tempora, reiciendis dolorum ut
          ipsa laudantium itaque iure explicabo quo quisquam. Voluptatum illo
          distinctio libero aliquam delectus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          temporibus doloremque vitae excepturi tempora, reiciendis dolorum ut
          ipsa laudantium itaque iure explicabo quo quisquam. Voluptatum illo
          distinctio libero aliquam delectus.
        </p>
        <div className="flex py-2 justify-between">
            <div className="flex">
                <h5 className="font-500 text-[18px] text-orange-700 pr-3 line-through">
                    1099$
                </h5>
                <h5 className="font-bold text-[20px] text-gray-900">
                    999$
                </h5>
            </div>
            <span className="pr-3 font-[400] text-[17px] text-green-600">120 sold</span>
        </div>
        <CountDown/>
      </div>
    </div>
  );
}
