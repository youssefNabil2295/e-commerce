import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { MoonLoader } from 'react-spinners'

const AllOrders = () => {

const [userid, setuserid] = useState(null)



useEffect(() => {
  const res =  jwtDecode(localStorage.getItem('tkn'))

  getuserorders(res.id)
}, [])
  


async function getuserorders(id){
   try {

    const {data}   =   await  axios.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${id}`)
        console.log(data);
            setuserid(data);
   } 
   
   catch (error) {
    console.log(error,"err");
   }
} 


if(userid === null){
  return <div className="vh-100 d-flex justify-content-center align-items-center">
  <MoonLoader color="#36d7b7" />
  </div>


}
  return <>

  <Helmet>
    <title>AllOrders</title>
  </Helmet>

    <div className="container ">
    <div className="row d-flex   justify-content-center align-items-center py-3">


        {userid.map(  function( order){ 
          
          return <div className="col-md-7 g-3 " >
        <div className="order  rounded-4 bg-main-light my-3 py-3 shadow">


              <div className='container  '>
                <div className="row">
                    {order.cartItems?.map(function(item){
                return <div className='col-sm-3 py-2'>  <div className='border-1 border bg-dark-subtle my-2'>
                <img className='w-100' src={item.product.imageCover} alt={item.product.title} />
                <h7>{item.product.title.split( ' ').slice(0,2).join(" ")}</h7>
                  <h5> count : {item.count} </h5>
                  <h5> price : {item.price} </h5>
                </div></div>
                
              

            })}
                </div>
              </div>



          
              <h7 >Oreder sent to user with phone {order.shippingAddress.phone} 
                    and with detalis  {order.shippingAddress.details}  at  {order.shippingAddress.city} 
              
              </h7>
                  <h4> payment method : {order.paymentMethodType}</h4>
                  <h4> total price : {order.totalOrderPrice}</h4>
        </div>

         
      </div>

        }  )}


      
    </div>

    </div>


  </>;
}

export default AllOrders;
