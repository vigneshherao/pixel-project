import React from 'react'
import DropDown from './DropDown'



const FilterBtns = () => {
  return (
    <div className="flex justify-between">
        <DropDown name={"Country"}/>
        <DropDown name={"Gender"}/>
    </div>
  )
}

export default FilterBtns;