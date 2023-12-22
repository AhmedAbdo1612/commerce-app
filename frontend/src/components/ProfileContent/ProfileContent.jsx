import React, { useState } from "react";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import AllOrders from "../AllOrders/AllOrders";
export default function ProfileContent({ active }) {
  let user = useSelector((state) => state.user.user.currentUser);
  const [name, setName] = useState(user && user.user.name);
  const [email, setEamil] = useState(user && user.user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipcode, setZipCode] = useState();
  const [address1, setAddres1] = useState("");
  const [address2, setAddres2] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <div className="w-full 800px:w-[80%] mx-auto ml-5">
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={backend_url + "/" + user.user.avatar.url}
                alt=""
                className="w-[150px] h-[150px] rounded-full object-cover 
                        border-[3px] border-green-500"
              />
              <div
                className="w-[30px] h-[30px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer
            absolute bottom-[5px] right-[5px]"
              >
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5 ">
            <form onSubmit={(e)=>handleSubmit(e)}> 
              <div className="w-full pb-3 flex ">
                <div className="w-[50%]">
                  <label className="block pb-2 font-semibold "> Full Name</label>
                  <input
                    type="text"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="w-[50%]">
                  <label className="block pb-2 font-semibold">Email Address</label>
                  <input
                    type="text"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={email}
                    onChange={(e) => setEamil(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full pb-3 flex ">
                <div className="w-[50%]">
                  <label className="block pb-2 font-semibold"> Phone Number</label>
                  <input
                    type="number"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="w-[50%]">
                  <label className="block pb-2 font-semibold">Zip Code</label>
                  <input
                    type="number"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={zipcode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full pb-3 flex ">
                <div className="w-[50%]">
                  <label className="block pb-2 font-semibold">Address 1</label>
                  <input
                    type="address"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={address1}
                    onChange={(e) => setAddres1(e.target.value)}
                  />
                </div>

                <div className="w-[50%]">
                  <label className="block pb-2 font-semibold">Address 2</label>
                  <input
                    type="address"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={address2}
                    onChange={(e) => setAddres2(e.target.value)}
                  />
                </div>
              </div>
              <input type="submit"  value="Update" required 
              className="w-[250px] h-[40px] border border-blue-800 bg-white text-center text-blue-800 
              rounded-md mt-8 cursor-pointer hover:text-white hover:bg-blue-700 " />
            </form>
          </div>
        </>
      )}
      {
        active ===2 &&(
            <div className="bg-white">
                <AllOrders/>
            </div>
        )
      }
    </div>
  );
}
