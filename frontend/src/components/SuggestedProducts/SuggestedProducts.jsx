import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import ProductCard from '../ProductCard/ProductCard'
export default function SuggestedProducts({ data }) {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const d =
      productData &&
      productData.filter((item) => item.category === data.category);
    setProducts(d);
  }, []);
  return <div>
    {
        data&&(
            <div className="p-4 w-11/12 mx-auto">
                <h2 className=" text-center md:text-start
                 font-[600] font-Roboto pb-[20px] text-[25px] border-b mb-5 "> 
                    Related Products 
                </h2>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px]
                lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 x;:gap-[30px] mb-12">
                    {
                        products && products.map((item,index)=>(
                            <ProductCard data={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        )
    }
    </div>;
}
