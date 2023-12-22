import React from "react";
import { useNavigate } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import { HiShoppingBag, HiOutlineReceiptRefund } from "react-icons/hi";
import { AiOutlineMessage,AiOutlineCreditCard, AiOutlineLogin} from 'react-icons/ai'
import {MdOutlineTrackChanges} from 'react-icons/md'
import {TbAddressBook } from  'react-icons/tb'

export default function ProfileSidebar({ active, setActive }) {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white shadow-md rounded-t-lg p-4 pt-8">
      <div
        className="flex items-center  cursor-pointer w-full mb-8 "
        onClick={() => setActive(1)}
      >
        <RxPerson size={25} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[red]" : ""
          } font-semibold text-lg`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 "
        onClick={() => setActive(2)}
      >
        <HiShoppingBag size={25} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[red]" : ""
          } font-semibold text-lg`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 "
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={25} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red]" : ""
          } font-semibold text-lg`}
        >
          Refunds
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 "
        onClick={() => setActive(4)||navigate('/inbox')}
      >
        <AiOutlineMessage size={25} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red]" : ""
          } font-semibold text-lg`}
        >
          Inbox
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 "
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={25} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[red]" : ""
          } font-semibold text-lg`}
        >
          Track Order
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 "
        onClick={() => setActive(6)}
      >
        <AiOutlineCreditCard size={25} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[red]" : ""
          } font-semibold text-lg`}
        >
         Payment Methods
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 "
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={25} color={active === 7? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red]" : ""
          } font-semibold text-lg`}
        >
        Address
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 "
        onClick={() => setActive(7)}
      >
        <AiOutlineLogin size={25} color={active === 7? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red]" : ""
          } font-semibold text-lg`}
        >
        Log out
        </span>
      </div>
    </div>
  );
}
