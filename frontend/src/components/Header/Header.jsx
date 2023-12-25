import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { backend_url } from "../../server";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { categoriesData, productData } from "../../static/data";
import DropDown from "../DropDown/DropDown";
import Navabr from "../Navbar/Navabr";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

export default function Header({ activeHeading }) {
  let user = useSelector((state) => state.user.user.currentUser);
  const [open, setOpne] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
    const filteredProducts = productData && productData.filter((product) => {
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
      <div className="w-11/12 mx-auto ">
        {/* First section of search and logo part */}
        <div className=" hidden 800px:h-[50px] 800px:flex  items-center justify-between">
          <div className="">
            <Link to={"/"}>
              <img
                className="w-20 h-15 rounded-md object-cover "
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
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
            {searchData && searchData.length > 0 && searchTerm.length>0? (
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
      hidden 800px:flex items-center duration-[900]
      justify-between w-full bg-blue-800 h-[70px] header-transition`}
      >
        <div className="relative flex justify-between">
          {/* categories */}
          <div className="">
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block  1000px: ml-10">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                onClick={() => setDropdown(!dropdown)}
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
              <AiOutlineHeart
                size={30}
                color="rgb(255 255 255 / 83%)"
                onClick={() => setOpenWishlist(true)}
              />
              <span
                className="absolute right-0 top-0 rounded-full
               bg-black w-4 h-4 top right 
               p-0 m-0 text-white font-normal text-[12px] leading-tight text-center "
              >
                0
              </span>
            </div>
          </div>

          <div className="flex items-center" onClick={() => setOpenCart(true)}>
            <div className="relative cursor-pointer mr-[15px]">
              <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)" />
              <span
                className="absolute right-0 top-0 rounded-full
               bg-black w-4 h-4 top right 
               p-0 m-0 text-white font-normal text-[12px] leading-tight text-center "
              >
                1
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative cursor-pointer mr-[15px]">
              {user ? (
                <Link to={"/profile"}>
                  <img
                    src={backend_url + "/" + user.user.avatar.url}
                    alt=""
                    className="rounded-full w-[40px] h-[40px] object-cover"
                  />
                </Link>
              ) : (
                <Link to={"/signin"}>
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              )}
            </div>
          </div>
          {/* cart  popup */}
          {openCart && <Cart setOpenCart={setOpenCart} />}
          {openWishlist && <Wishlist setOpenWishlist={setOpenWishlist} />}
        </div>
      </div>
      {/* moblie  header */}
      <div className=" 800px:hidden w-full h-[70px] fixed  bg-gray-200 z-50 top-0 left-0 shadow-sm px-2">
        <div className="w-full flex items-center justify-between ">
          <div className="">
            <BiMenuAltLeft
              size={40}
              onClick={() => setOpne(true)}
              className="ml-4"
            />
          </div>
          <div>
            <Link to={"/"}>
              <img
                className=" cursor-pointer mt-3 object-cover "
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="relative mr-[20px]">
            <AiOutlineShoppingCart size={30} />
            <span
              className="absolute right-0 top-0 rounded-full
               bg-black w-4 h-4 top right 
               p-0 m-0 text-white font-normal text-[12px] leading-tight text-center "
            >
              1
            </span>
          </div>
        </div>
        {/* header sidebar */}
        {open && (
          <div className="fixed w-full bg-gray-300  h-full top-0 left-0">
            <div className=" fixed w-[60%] bg-white h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3 items-center">
                <div className="">
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span
                      className="absolute right-0 top-0 rounded-full
               bg-green-500 w-4 h-4 top right 
               p-0 m-0 text-white font-normal text-[12px] leading-tight text-center "
                    >
                      0
                    </span>
                  </div>
                </div>
                <RxCross1 size={30} onClick={()=>setOpne(false)}/>
              </div>
              <div className="my-8 w-[92%] m-auto h-[40px] relative ">
                 <input
              type="text"
              placeholder="Search Product"
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-blue-800 border-[2px] rounded-md"
            />
            {searchData && searchData.length > 0 && searchTerm.length>0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] pb-5 p-4">
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
            </div>
          </div>
        )}
      </div>
    </>
  );
}
