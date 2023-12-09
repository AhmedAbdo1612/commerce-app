import React from "react";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

export default function Navabr({ active }) {
  return <div className="flex items-center px-3">
    {
        navItems && navItems.map((item,index)=>(
            <div className="flex" key={index}>
                <Link  to={item.url} 
                className= {`${active ===index+1? "bg-gray-900 text-white ":"text-white"} font-[600] px-6 cursor-pointer p-2  rounded-lg hover:bg-black`}>
                {item.title}
                </Link>
            </div>
        ))
    }
  </div>;
}
