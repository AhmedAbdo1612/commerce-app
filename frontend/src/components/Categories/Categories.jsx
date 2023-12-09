import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../static/data";
export default function Categories() {
    const navigate = useNavigate()
  return (
    <>
      <div className="w-11/12 mx-auto hidden sm:block">
        <div className="branding flex justify-between w-full shadow-sm bg-white p-5 rounded-md">
          {brandingData &&
            brandingData.map((item, index) => (
              <div className="flex items-start" key={index}>
                {item.icon}
                <div className="px-3 ">
                  <h3 className="font-bold tex-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm">{item.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-11/12 mx-auto bg-white p-6 rounded-lg mb-12 mt-3"
      id="cateogories">
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 
        md:gap-[10px] lg:grid-cols-4 lg:gap-[20px]
        xl:grid-cols-5 xl:gap-[30px]">
            {
                categoriesData && categoriesData.map((item,index)=>{
                    const handleSubmit = (i)=>{
                        navigate(`/products?category=${item.title}`)
                        
                    }
                    return(
                        <div className="w-full h-[100px] flex items-center justify-between cursor-pointer 
                        overflow-hidden" onClick={handleSubmit(item)} key={index }>
                            <h5 className={`text-[18px] leadin-[1.3]`}>{item.title}</h5>
                            <img src={`${item.image_Url}`} 
                            className="w-[120px] object-cover" alt="" />
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  );
}
