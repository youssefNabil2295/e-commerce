// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";



// export let CartContext = createContext()

// export default function CartContextProvider(props) {


//     let [cartCount, setCartCount] = useState(0)
//     let headersData = {
//         token: localStorage.getItem("userToken")
//     }

//     useEffect(() => {
//         if (localStorage.getItem("userToken")) {
//             async function getData() {
//                 let { data } = await getAllCartData()
//                 console.log(data);
//                 setCartCount(data?.numOfCartItems)
//             }
//             getData()
//         }
//     }, [])

//     function deleteProduct(id) {
//         return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
//             headers: headersData
//         })
//     }
//     function getAllCartData() {
//         return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
//             headers: headersData
//         })

//     }
//     function addCart(id) {
//         let body = {
//             "productId": id
//         }
//         return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, body, {
//             headers: headersData
//         })
//     }

//     function checkPayment(id, shippingData) {

//         let body = {
//             shippingAddress: shippingData
//         }
//         return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`, body, {
//             headers: headersData
//         })

//     }
//     function updateProductQuantity(id, count) {
//         let body = {
//             "count": count
//         }
//         return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, body, {
//             headers: headersData
//         })
//     }
//     return <CartContext.Provider value={{ cartCount, setCartCount, checkPayment, addCart, getAllCartData, deleteProduct, updateProductQuantity }}>
//         {props.children}
//     </CartContext.Provider>
// }

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export let CartContext = createContext();


export  function CartContextProvider ({children}){

const [cartProducts, setCartProducts] = useState(null);
const [totalCartPrice, setTotalCartPrice] = useState(0);
const [numOfCartItems, setnumOfCartItems] = useState(0);
const [cartId, setcartId] = useState(null );



    async function addprodutctocart(productId){ 


  try {
    const {data}= await axios.post("https://route-ecommerce.onrender.com/api/v1/cart" , 
    {

      "productId":productId 
    },
         



     {  
      headers:{token:localStorage.getItem('tkn')}  
    }
   )
   getUserCart()

    // setnumOfCartItems (data.numOfCartItems);
    //   setTotalCartPrice(data.data.totalCartPrice)
      // setCartproducts(data.data.products)



return data;

    
  } 
  
  
  catch (error) {
    console.log('error', error);
    
  }

  }

      async function getUserCart (){
          try {
      const{data} =  await  axios.get("https://route-ecommerce.onrender.com/api/v1/cart" , {
              headers:{
                token :localStorage.getItem('tkn')
              }
            });
            
              setnumOfCartItems(data.numOfCartItems);
              setTotalCartPrice (data.data.totalCartPrice);
              setCartProducts(data.data.products);
                setcartId(data.data._id);

          } catch (error) {
            console.log(error, "err");
            
          }

      }




      async function removeCartData (){
        try {
    const{data} =  await  axios.delete("https://route-ecommerce.onrender.com/api/v1/cart" , {
            headers:{
              token :localStorage.getItem('tkn')
            }
          });
          
            setnumOfCartItems(0);
            setTotalCartPrice (0);
            setCartProducts([]);

        } catch (error) {
          console.log(error, "err");
          
        }

    }


      async function  DeleteProduct (productId){
try {
const {data}=  await axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,{
  headers:{token : localStorage.getItem('tkn')}
});
setnumOfCartItems(data.numOfCartItems);
setTotalCartPrice(data.data.totalCartPrice);
setCartProducts(data.data.products);

    return data;
  
} catch (error) {
  console.log('err', error);
}

      }

      async function UpdateCount (product ,count){

        try {
          const {data}=  await axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${product}`, {
                "count" : count
          }  ,{
            headers:{ token: localStorage.getItem('tkn') }
          } );

          setCartProducts(data.data.products)
          setTotalCartPrice(data.data.totalCartPrice)
          setnumOfCartItems(data.numOfCartItems)



          return data;

        } catch (error) {
          console.log(error,'err');
        }
      }

        useEffect(function (){ 
           getUserCart()  }
             ,[])

  return <CartContext.Provider value={{getUserCart,
   addprodutctocart 
   ,cartProducts
    , totalCartPrice 
    , numOfCartItems 
    , DeleteProduct 
    , UpdateCount
    , removeCartData
    ,cartId
    ,setCartProducts
, setTotalCartPrice
, setnumOfCartItems
    
    }}>
     
        {children}
  </CartContext.Provider>


}