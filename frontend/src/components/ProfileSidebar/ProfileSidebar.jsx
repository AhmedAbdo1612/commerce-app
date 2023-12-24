import React from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { HiShoppingBag, HiOutlineReceiptRefund } from "react-icons/hi";
import { AiOutlineMessage,AiOutlineCreditCard, AiOutlineLogin} from 'react-icons/ai'
import {MdOutlineTrackChanges} from 'react-icons/md'
import {TbAddressBook } from  'react-icons/tb'
import axios from 'axios'
import { server } from "../../server";
import {toast} from 'react-toastify'
import { signOutUserSuccess } from "../../redux/user/user-slice";
import {useDispatch} from 'react-redux'
export default function ProfileSidebar({ active, setActive }) {
  const dispatch = useDispatch()
  const logoutHandller = ()=>{
   
    axios.get(`${server}/user/logout`,{withCredentials:true}).then((res)=>{
      dispatch(signOutUserSuccess())
      window.location.reload(true)
      navigate('/signin')
    }).catch((err)=>{
      console.log(err)
      toast.error(err.response.data.message)
    })
  }
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 pt-8 min-h-[80vh] ">
      <div
        className="flex items-center  cursor-pointer w-full mb-8 pt-1"
        onClick={() => setActive(1)}
      >
        <IoPersonSharp size={25} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[red]" : ""
          } font-semibold text-lg hidden 800px:block`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 pt-1"
        onClick={() => setActive(2)}
      >
        <HiShoppingBag size={25} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[red]" : ""
          } font-semibold text-lg  hidden 800px:block`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 pt-1"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={25} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red]" : ""
          } font-semibold text-lg  hidden 800px:block`}
        >
          Refunds
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 pt-1"
        onClick={() => setActive(4)||navigate('/inbox')}
      >
        <AiOutlineMessage size={25} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red]" : ""
          } font-semibold text-lg  hidden 800px:block`}
        >
          Inbox
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 pt-1"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={25} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[red]" : ""
          } font-semibold text-lg  hidden 800px:block`}
        >
          Track Order
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 pt-1"
        onClick={() => setActive(6)}
      >
        <AiOutlineCreditCard size={25} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[red]" : ""
          } font-semibold text-lg  hidden 800px:block`}
        >
         Payment Methods
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 pt-1 "
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={25} color={active === 7? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red]" : ""
          } font-semibold text-lg hidden 800px:block`}
        >
        Address
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 pt-1"
        onClick={() => setActive(8) || logoutHandller()}
      >
        <AiOutlineLogin size={25} color={active === 8? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[red]" : ""
          } font-semibold text-lg hidden 800px:block`}
        >
        Log out
        </span>
      </div>
    </div>
  );
}
