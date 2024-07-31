import useFetchAPi from "./useFetchAPI";


const useUserInfo = () =>{

    //fetching the users infomation from the custom hook api (useFetchAPI- reusable)
    const users = useFetchAPi();

    //we are creating an array and using set for the no dupilcates values will stored in the data
    const countries = Array.from(new Set(users.map(user => user.address.country)));
    const genders = Array.from(new Set(users.map(user => user.gender)));

    //return countries and genders
    return [countries,genders];

}

//Normal Export
export default useUserInfo;