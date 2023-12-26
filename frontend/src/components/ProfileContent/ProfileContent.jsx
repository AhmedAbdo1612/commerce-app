import React, { useState } from "react";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import AllOrders from "../AllOrders/AllOrders";
import AllRefunedOrders from "../AllRefunedOrders/AllRefunedOrders";
import TrackOrder from "../TrackOrder/TrackOrder";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import Address from "../Address/Address";
export default function ProfileContent({ active }) {
  let user = useSelector((state) => state.user.user.currentUser);
  const [name, setName] = useState(user && user.user.name);
  const [email, setEamil] = useState(user && user.user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipcode, setZipCode] = useState();
  const [address1, setAddres1] = useState("");
  const [address2, setAddres2] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full 800px:w-[80%] mx-auto ml-5 mt-10 800px:mt-0">
      {/* Profile Page */}
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
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="w-full pb-3 800px:flex block ">
                <div className="w-[100%] 800px:w-[50%] ">
                  <label className="block pb-2 font-semibold ">Full Name</label>
                  <input
                    type="text"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="w-[100%] 800px:w-[50%] mt-3 800px:mt-0">
                  <label className="block pb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={email}
                    onChange={(e) => setEamil(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full pb-3 block 800px:flex ">
                <div className="w-[100%] 800px:w-[50%] ">
                  <label className="block pb-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="w-[100%] 800px:w-[50%] ">
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
              <div className="w-full pb-3 800px:flex block">
                <div className="800px:w-[50%] w-[100%]">
                  <label className="block pb-2 font-semibold">Address 1</label>
                  <input
                    type="address"
                    className="w-[95%] border p-1 rounded-[5px] py-2 rounded-r-lg pl-2 focus:outline-blue-700 "
                    required
                    value={address1}
                    onChange={(e) => setAddres1(e.target.value)}
                  />
                </div>

                <div className="800px:w-[50%] w-[100%]">
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
              <input
                type="submit"
                value="Update"
                required
                className=" hover-update-user-form w-[250px] h-[40px] border border-blue-800 bg-white text-center text-blue-800 
              rounded-md mt-8 cursor-pointer hover:text-white hover:bg-blue-700 "
              />
            </form>
          </div>
        </>
      )}
      {/* All Orders  */}
      {active === 2 && (
        <div className="bg-white rounded-md">
          <AllOrders />
        </div>
      )}
      {/* Refun  */}
      {active === 3 && (
        <div className="bg-white rounded-md">
          <AllRefunedOrders />
        </div>
      )}
      {/* Track Orders  */}
      {active === 5 && (
        <div className="bg-white rounded-md">
          <TrackOrder />
        </div>
      )}

      {/* Payment Method */}
      {active === 6 && (
        <div className="bg-white rounded-md">
          <PaymentMethod />
        </div>
      )}
      {/* Address */}
      {active === 7 && (
        <div className="bg-white rounded-md">
          <Address />
        </div>
      )}
    </div>
  );
}
