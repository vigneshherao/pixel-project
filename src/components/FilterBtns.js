import React, { useState } from 'react'
import DropDown from './DropDown'
import useUserInfo from '../utils/useUserInfo'



const FilterBtns = () => {

  //state variable for toggle filter button
  const [isCountry,SetIsCountry] = useState(false);
  const [isGender,SetIsGender] = useState(false); 

  //Destructing the user info from the useUserInfo Custom Hook
  const [countries,genders] = useUserInfo();


  //function which handles the toggle
  const toggleCountryBtn = () =>{
      SetIsCountry(!isCountry);
  }
  
  const toggleGenderBtn = () =>{
    SetIsGender(!isGender);
}


  return (
    <div className="flex justify-between">
        <DropDown name={"Country"} filterLists={countries} isOpen={isCountry} toggleBtn={toggleCountryBtn}/>
        <DropDown name={"Gender" } filterLists={genders} isOpen={isGender} toggleBtn={toggleGenderBtn} />
    </div>
  )
}

export default FilterBtns;