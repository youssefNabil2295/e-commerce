import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

const Profile = ( ) => {
  const [name, setname] = useState (null);
useEffect(
  ()=> {
  const x =  jwtDecode(localStorage.getItem('tkn'))

setname(x.name)

  },[] )
  

if(name === null ){
  return   <MoonLoader color="#36d7b7" />

}

  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
    <h1> Hello {name}</h1>
    </div>
  );
}

export default Profile;
