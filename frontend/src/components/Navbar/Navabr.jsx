import React from "react";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

export default function Navabr({ active }) {
  return <div className="block 800px:flex 800px:items-center px-3 md:gap-3">
    {
        navItems && navItems.map((item,index)=>(
            <div className="flex pb-6 800px:pb-0" key={index}>
                <Link  to={item.url} 
                className= {`${active ===index+1? "bg-gray-900 text-white":""} 800px:bg-blue-800  text-center text-black 800px:text-white font-[600]
                 px-6 cursor-pointer p-2  rounded-lg 800px:hover:bg-black`}>
                {item.title}
                </Link>
            </div>
        ))
    }
  </div>;
}
