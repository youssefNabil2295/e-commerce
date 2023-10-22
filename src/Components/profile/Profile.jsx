import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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

  return (<>

    <Helmet>
    <title>Profile</title>
  </Helmet>
  <>
  <header>
  
    <div
      className="view  vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          'url("https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div className="mask rgba-black-light align-items-center">
        {/* Content */}
        <div className="container">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-12 mb-4 white-text text-center">
              <h1
                className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown"
                data-wow-delay="0.3s"
              >
                <strong className="text-white">{name}</strong>
              </h1>
              <hr
                className="hr-light my-4 wow fadeInDown"
                data-wow-delay="0.4s"
              />
              <h5
                className="text-uppercase mb-4 white-text wow fadeInDown"
                data-wow-delay="0.4s"
              >
                <strong className="text-bg-dark">hello </strong>
              </h5>
            
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Content */}
      </div>
    </div>
  </header>


</>
  
    {/* <div className='vh-100 d-flex justify-content-center align-items-center img-b'>
    <h1> Hello {name}</h1>
    </div> */}
  </>);
}

export default Profile;
