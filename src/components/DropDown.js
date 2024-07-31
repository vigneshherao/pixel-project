import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'


//Filter Button with the DropDown Items
const DropDown = ({name}) => {
  return (
    <div className="relative flex justify-center items-center border w-28 p-1 text-red-500 mr-2 rounded-md">
        <button className="mr-1">
          {name}
        </button>
        <FaAngleDown />
      </div>
  )
}

export default DropDown