import axios from 'axios';
import React, { useContext } from 'react';
import { CartContext } from '../../CountText/CartContext';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate =useNavigate()

const {cartId , setCartProducts
  , setTotalCartPrice
  , setnumOfCartItems} =  useContext(CartContext)

async function ConfirmCashPayment(){

const PhoneValue = document.querySelector('#Phone').value
const cityValue = document.querySelector('#city').value
const DetailsValue = document.querySelector('#Details').value


 let shippingAddress ={
  "shippingAddress":{
      "details": DetailsValue,
      "phone": PhoneValue,
      "city": cityValue
      }
}
 try {
  
  const {data} =  await axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/${cartId}`,  shippingAddress ,{
      headers:{ token: localStorage.getItem('tkn')  }
    })
     if(data.status === 'success'){
        toast.success('Order success initalized')
        setCartProducts([])
        setTotalCartPrice(0)
        setnumOfCartItems(0)
        navigate('/Products')
     }
     else{
      toast.error('error on creating order')

     }
 } catch (error) {
  console.log(error,'err');
 }


}







async  function ConfirmOnlinePayment(){
  const PhoneValue = document.querySelector('#Phone').value
const cityValue = document.querySelector('#city').value
const DetailsValue = document.querySelector('#Details').value


 const shippingAddress ={
  "shippingAddress":{
      "details": DetailsValue,
      "phone": PhoneValue,
      "city": cityValue
      }
}

try {
  const {data}=  await axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}` ,shippingAddress, {
    headers:{token: localStorage.getItem('tkn')},
    params:{ url:"http://localhost:3000" }
  });

window.open  (  data.session.url , '_blank' )
} catch (error) {
  console.log('err', error);
  
}

}






  return <div className='container mt-4 p-3 justify-content-center align-items-center vh-100'>

    <form >

      <label htmlFor="">Phone : </label>
      <input id='Phone' type="tel"  placeholder='Phone' className='mb-2  form-control'/>

      <label htmlFor="">city : </label>
      <input  id='city' type="text"  placeholder='city' className=' mb-2 form-control'/>


      <label htmlFor="">Details : </label>
      <textarea  id='Details' type="text"  placeholder='details' className=' mb-2  form-control'/> 


        <button  type= 'button' onClick={ConfirmCashPayment } className='mb-2 m-2 btn bg-color text-white '>
        
        <i class="fa-solid fa-money-bill-1-wave fa-beat fa-lg m-2" style={{color:"#ffffff"}}></i>
        Confirm Cash Payment</button>
        <button  type= 'button' onClick={ConfirmOnlinePayment } className='mb-2 m-2 btn btn-primary'>
        
        <i class="fa-regular fa-credit-card fa-flip m-2 fa-lg" style={{color: "#ffffff"}}></i>
        
        Confirm online Payment</button>
    

    </form>

  </div>
    
      

}

export default Payment;
