import React, { useEffect, useState } from 'react'
import TableHeader from './TableHeader'
import { COLUMNS, User_DATA } from '../utils/constants';
import DataTable from 'react-data-table-component';

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
    <div className="sm:mx-16">
        <TableHeader/>
        <DataTable className="mt-10 border rounded-lg border-gray-200" columns={COLUMNS} data={users} />
    </div>
  )
}

export default Body