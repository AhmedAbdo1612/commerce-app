import React, { useState} from "react";
import Header from "../components/Header/Header";
import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import ProfileContent from "../components/ProfileContent/ProfileContent";

export default function ProfilePage() {


  const [active, setActive] = useState(1);
  document.title = "Profile"
  return (
    <div className=" bg-gray-200 min-h-[100vh]">
      <Header />
      <div className="w-11/12 mx-auto flex pt-10">
        <div className="w-[50px] 800px:w-[300px] ">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  );
}
