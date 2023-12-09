import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineSearch,AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {CgProfile} from 'react-icons/cg'
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { categoriesData, productData } from "../../static/data";
import DropDown from "../DropDown/DropDown";
import Navabr from "../Navbar/Navabr";

export default function Header({ activeHeading }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
    const filteredProducts =
      productData &&
      productData.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    setSearchData(filteredProducts);
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className="pt-5 px-5">
        {/* First section of search and logo part */}
        <div className=" 800px:h-[50px] 800px:flex  items-center justify-between">
          <div className="">
            <Link to={"/"}>
              <img
                className="w-20 h-15 rounded-md object-cover "
                src="https://www.shutterstock.com/shutterstock/photos/1540000625/display_1500/stock-vector-letter-e-online-shop-logo-vector-1540000625.jpg"
                alt=""
              />
            </Link>
          </div>
          {/* Search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product"
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-blue-800 border-[2px] rounded-md"
            />
            <AiOutlineSearch size={30} className="absolute top-2 right-2" />
            {searchData && searchData.length > 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData.map((item, index) => {
                  const d = item.name;
                  const product_name = d.replace(/\s+/g, "-");
                  return (
                    <Link to={`/product/${product_name}`} key={index}>
                      <div className="w-full flex items-start py-3">
                        <img
                          src={item.image_Url[0].url}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h2>{item.name}</h2>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className="">
            <Link to={"/seller"}>
              <h1 className="text-white flex items-center bg-black rounded-lg font-semibold py-3 px-2">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : "mt-4"
        }
     transition hidden 800px:flex items-center
      justify-between w-full bg-blue-800 h-[70px] `}
      >
        <div className="relative flex justify-between">
          {/* categories */}
          <div className="">
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block  1000px: ml-10">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button onClick={()=>setDropdown(!dropdown)}
                className={`h-[100%] w-full flex justify-between items-center pl-10
            bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Cateogries
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              />
              {dropdown && (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropdown}
                />
              )}
            </div>
          </div>
        </div>
        <div className="felx items-center justify-between ">
          <Navabr active={activeHeading} />
        </div>
        <div className=" flex">
          <div className="flex items-center">
            <div className="relative cursor-pointer mr-[15px]">
              <AiOutlineHeart size={30} 
              color="rgb(255 255 255 / 83%)"/>
              <span className="absolute right-0 top-0 rounded-full
               bg-black w-4 h-4 top right 
               p-0 m-0 text-white font-normal text-[12px] leading-tight text-center ">0</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative cursor-pointer mr-[15px]">
              <AiOutlineShoppingCart size={30} 
              color="rgb(255 255 255 / 83%)"/>
              <span className="absolute right-0 top-0 rounded-full
               bg-black w-4 h-4 top right 
               p-0 m-0 text-white font-normal text-[12px] leading-tight text-center ">1</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative cursor-pointer mr-[15px]">
             <Link to={'/signin'}>
             <CgProfile size={30} color="rgb(255 255 255 / 83%)"/>
             </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
