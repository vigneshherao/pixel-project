import React from 'react'
import DropDown from './DropDown'
import useUserInfo from '../utils/useUserInfo'



const FilterBtns = () => {

  //Destructing the user info from the useUserInfo Custom Hook
  const [countries,genders] = useUserInfo();

  
  return (
    <div className="flex justify-between">
        <DropDown name={"Country"}/>
        <DropDown name={"Gender"}/>
    </div>
  )
}

export default FilterBtns;