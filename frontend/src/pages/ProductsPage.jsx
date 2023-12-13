import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { productData } from "../static/data";
import ProductCard from "../components/ProductCard/ProductCard";
export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);

      setData(d);
    } else {
      const d =
        productData &&
        productData.filter((item) => item.category === categoryData);
      setData(d);
     
    }

  }, [categoryData]);
 
  return (
    <div className="h-[107vh] bg-gray-200">
      
      <Header activeHeading={3} />
      <br />
      <br />
      <div className="w-[90%] mx-auto">
        <div
          className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px]
             lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12"
        >
          {data && data.length > 0
            ? data.map((item, index) => <ProductCard key={index} data={item} />)
            : null}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full flex justify-center font-semibold text-[22px]">
            No Products Found!
          </h1>
        ) : null}
      </div>
    </div>
  );
}
