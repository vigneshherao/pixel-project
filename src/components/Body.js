import React, { useEffect, useState } from 'react'
import TableHeader from './TableHeader'
import { User_DATA } from '../utils/constants';

const Body = () => {

  //State varible for the users list
  const [users,setUsers] = useState([]);

  console.log(users)

  //Adding useEffect for Api call for fecthing the user's list
  useEffect(()=>{
    userData();
  },[])

  //Function which fetch the details from api and storing in users state variable
  const userData = async () => {
    const data = await fetch(User_DATA);
    const dataJson = await data.json();
    setUsers(dataJson.users);
  };

  return (
    <div>
        <TableHeader/>

    </div>
  )
}

export default Body