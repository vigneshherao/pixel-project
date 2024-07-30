import React from 'react'
import DropDown from './DropDown'

const FilterBtns = () => {
  return (
    <div className="flex justify-between">
        <DropDown/>
        <DropDown/>
    </div>
  )
}

export default FilterBtns