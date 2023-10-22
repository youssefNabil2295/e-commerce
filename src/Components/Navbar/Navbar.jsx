 import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/freshcart-logo.svg'
import { CounterCountText } from '../../CountText/CounterCountText';
import { CartContext } from '../../CountText/CartContext';



const Navbar = () => {

const {numOfCartItems} =  useContext (CartContext)
 const{token,settoken}= useContext(CounterCountText)
  const navgaite=useNavigate()
    function logout (){

      localStorage.removeItem('tkn')
      settoken (null)
      navgaite('/login')
    }


  return <div className=''>
    
  <nav className="navbar navbar-expand-lg bg-body-tertiary position-relative">
  {/* <i   class="fa-solid fa-cart-shopping fa-lg  position-absolute top-10 start-10 position-fixed" style= {{color:"#0aad0a"}}> {numOfCartItems} </i>    */}

  <div className="container">
    <Link className="navbar-brand" to="/">
    
      <img src={logo} width={100} alt="fresh market logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              {token?<>   
                <li className="nav-item position-relative">
                <i   class="fa-solid fa-cart-shopping fa-lg  position-absolute top-50 start-0 position-fixed" style= {{color:"#0aad0a"}}> {numOfCartItems} </i>   

          <Link className="nav-link btn btn-light" to="/Home">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link btn btn-light" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  btn btn-light" to="/Categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-light" to="/Brands">Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-light position-relative" to="/Cart">Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {numOfCartItems}
    <span class="visually-hidden">unread messages</span>
  </span>
          </Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link  btn btn-light" to="/AllOrders">AllOrders</Link>
        </li>
        </> 
        :''
      }
           
      
        

      
    
    
      </ul>




      <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
        {token?<>    <li className="nav-item">

        
      <Link onClick={logout} className="nav-link btn btn-outline-danger" > 
      <i class="fa-solid fa-right-from-bracket "> Logout</i>
      
      
      
      </Link>
      
    </li>    
       
  <li className="nav-item">
    <Link className="nav-link btn btn-light" to="/profile"> 
    <i class="fa-regular fa-user"> profile </i></Link>
  </li> 
</>: <>
    <li className="nav-item mx-2">
          <Link className="nav-link btn bg-color text-white" to="/Login">
          <i class="fa-solid fa-right-to-bracket">Login  </i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn  bg-color text-white " to="/Register">Register</Link>
        </li>
        
        </>  }
     
    
    
    <li className="nav-item d-flex align-items-center">
          <i className='fab fa-facebook mx-2'></i>
          <i className='fab fa-whatsapp mx-2'></i>
          <i className='fab fa-youtube mx-2'></i>
          <i className='fab fa-twitter mx-2'></i>

        </li>
    
  
      
        
      
    
      </ul>
    </div>
  </div>

   {/* <i   class="fa-solid fa-cart-shopping fa-lg  position-fixed" style= {{color:"#0aad0a"}}> {numOfCartItems} </i> */}
        
</nav>
    
  </div>
}

export default Navbar;
