import React from "react";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/ProductCard";
export default function FeaturedProduct() {
  return (
    <div className="">
      <div className="w-[90%] mx-auto">
        <div className="text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]">
          Featured Product
        </div>
        <div
          className="grid grid-cols-1 gap-[5px] md:grid-cols-2 
        md:gap-[10px] lg:grid-cols-4 lg:gap-[20px]
        xl:grid-cols-5 xl:gap-[30px]"
        >
          {productData&& productData.map((item, index)=>(
            <ProductCard  data={item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
