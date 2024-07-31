import React from "react";
import { FaAngleDown } from "react-icons/fa6";

//Filter Button with the DropDown Items
const DropDown = ({ name, filterLists }) => {
  return (
    <div className="relative flex justify-center items-center border w-28 p-1 text-red-500 mr-2 rounded-md">
      <button className="mr-1">{name}</button>
      <FaAngleDown />
      <div className="absolute top-full left-0 mt-1 w-28 bg-white border rounded-md shadow-lg z-10">
        <ul className="list-none p-2 m-0">
          {filterLists.map((list, index) => {
            return (
              <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                {list}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
