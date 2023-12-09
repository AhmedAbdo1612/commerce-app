import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard'


export default function ProductCard({ data }) {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg  shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={`${data.image_Url[0].url}`}
            className="w-full h-[170px] object-contain"
            alt=""
          />
        </Link>
        <Link to={"/"}>
          <h5 className="pt-3 text-[15px] text-blue-400 pb-3">
            {data.shop.name}
          </h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="flex">
            <AiFillStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
            <AiOutlineStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className="font-bold text-[18px] text-[#333] font-Roboto">
                {data.price === 0 ? data.price : data.discount_price}$
              </h5>
              <h4 className="font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through">
                {data.price ? data.price + "$" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-green-500">
              {data.total_sell} sold
            </span>
          </div>
        </Link>
        {/*Side options  */}
        <div className="flex flex-col items-center gap-5 absolute top-5 right-2">
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer "
              onClick={() => setClick(!click)}
              color={click ? "red" : "blue"}
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer "
              color={click ? "red" : "black"}
              onClick={() => setClick(!click)}
            />
          )}
          <AiOutlineEye size={22} 
          onClick={()=>setOpen(!open )}
          title="Quick view"/>
          <AiOutlineShoppingCart size={25} title="Add to cart" />
          {
            open? (<ProductDetailsCard  setOpen = {setOpen} data = {data}/>) :null
          }
        </div>
      </div>
    </>
  );
}
