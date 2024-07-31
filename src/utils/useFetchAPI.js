import { useEffect, useState } from "react";
import { User_DATA_API  } from "./constants";

const useFetchAPi = () => {
  //State varible for the users list
  const [users, setUsers] = useState([]);

  //Adding useEffect for Api call for fecthing the user's list
  useEffect(() => {
    userData();
  }, []);

  //Function which fetch the details from api and storing in users state variable
  const userData = async () => {
    const data = await fetch(User_DATA_API);
    const dataJson = await data.json();
    setUsers(dataJson.users);
  };

  return users;
};


export default useFetchAPi;