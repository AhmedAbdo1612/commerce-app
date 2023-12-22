import React, { useState } from "react";
import Header from "../components/Header/Header";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import ProfileContent from "../components/ProfileContent/ProfileContent";

export default function ProfilePage() {
    const [active,setActive] = useState(1)
  return (
    <div className=" bg-gray-200">
      <Header />
      <div className="w-11/12 mx-auto flex py-10">
        <div className="w-[335px]">
          <ProfileSidebar active = {active} setActive = {setActive} />
        </div>
        <ProfileContent  active = {active} />
      </div>
    </div>
  );
}
