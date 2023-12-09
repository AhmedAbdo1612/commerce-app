import React from "react";
import { useNavigate } from "react-router-dom";
export default function DropDown({ categoriesData, setDropDown }) {
  const navigate = useNavigate();
  function handleSubmit(i) {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  }
  return (
    <div className="pb-4 w-[270px] bg-white absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center"
              onClick={() => handleSubmit(item)}
            >
              <img
                src={item.image_Url}
                style={{
                  widows: "25px",
                  height: "25px",
                  objectFit: "contain",
                  marginLeft: "10px",
                  userSelect: "none",
                }}
                alt=""
              />
              <h3 className="m-3 cursor-pointer select-none">{item.title}</h3>
            </div>
          );
        })}
    </div>
  );
}
