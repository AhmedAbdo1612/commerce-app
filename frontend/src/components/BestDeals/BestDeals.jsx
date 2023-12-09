import React from "react";
import { useState, useEffect } from "react";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/ProductCard";
export default function BestDeals() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = d.slice(0, 5);
    setData(firstFive);
  }, []);
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="">
            <h2 className="text-[27px] text-center
         md:text-start font-[600] font-Roboto pb-[20px]">Best Deals</h2>
            <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 
        md:gap-[10px] lg:grid-cols-4 lg:gap-[20px]
        xl:grid-cols-5 xl:gap-[30px]">
            {
                data && data.map((item,index)=>(<ProductCard data = {item}  key={index}/>))
            }
        </div>
         </div>
      </div>
    </div>
  );
}
