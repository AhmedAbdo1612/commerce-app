import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetailsInfo({ data }) {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-gray-100 px-3 800px:px-10 py-2 rounded-t-lg ">
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
            <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[#dc1461]" />
          ) : null}
        </div>

        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 
          font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[#dc1461]" />
          ) : null}
        </div>

        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 
          font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[#dc1461]" />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur ex rerum non, voluptate at quo aliquam, reiciendis neque
            corporis nulla distinctio, animi perspiciatis cumque magni labore
            amet. Optio, assumenda maiores.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            harum quaerat. Distinctio numquam magnam suscipit dignissimos qui
            pariatur. Aperiam provident sunt eaque molestias iste consequuntur
            laborum adipisci excepturi eum magni.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            iusto voluptate saepe repellat, reiciendis nihil iure dicta nam
            vitae, voluptatum quam officiis rem non harum hic, doloremque quos
            deserunt. Modi.
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <div className="w-full flex justify-center items-center min-h-[40vh]">
          <p className="text-lg">No Reviews yet!</p>
        </div>
      ) : null}
      {active === 3 ? (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={data.shop.shop_avatar.url}
                alt=""
              />
              <div className="pl-3">
                <h3 className="pt-3 text-[15px] text-blue-400 pb-3">
                  {data.shop.name}
                </h3>
                <h5 className="pb-2 text-[15px]">
                  ( {data.shop.ratings}) Ratings
                </h5>
              </div>
            </div>
            <p className="pt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              blanditiis unde incidunt consectetur reprehenderit! Atque eum
              dolores ratione eius nihil qui quisquam vitae nesciunt rerum totam
              maiores, hic quas vero.
            </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-center">
              <h5 className="font-[600]">
                Joined on: <span className="font-[500]"> 14 March, 2023</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products: <span className="font-[500]"> 1,223</span>
              </h5>
              <h5 className="font-[600] pt-3">
                    Total Reviews: <span className="font-[500]">324</span>
                </h5>
                <Link to='/'>
                    <div className="w-[150px] bg-black h-[50px] my-3 flex 
                    items-center justify-center rounded-xl cursor-pointer">
                        <h4 className="text-white hover:text-xl"> Visit Shop</h4>
                    </div>
                </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
