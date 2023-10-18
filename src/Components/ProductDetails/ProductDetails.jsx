import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { MoonLoader, SyncLoader } from 'react-spinners';
import { CartContext } from '../../CountText/CartContext';
import toast from 'react-hot-toast';




const ProductDetails = () => {
  const [sendingLoader, setsendingLoader] = useState(false);

  const {addprodutctocart} = useContext( CartContext )
  
                 
  async function addProdutct(id){
  
  
    setsendingLoader(true)
  
  const res =  await  addprodutctocart(id) 
  
  
  if (res.status === "success") {
    toast.success(res.message ,{
      position:"top-center",
      duration:2000 ,
      
    })
  }
  else{
    toast.error("error happend ")
  }
  setsendingLoader(false)
  }

  //  let {addprodutctocart}= useContext(CartContext)
  
  let {id} = useParams()


// async  function addproduct(id){
//   await  addprodutctocart(id)
//   }

function getProductDetails (id){
  return axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
}

let {data ,  isLoading}  = useQuery('ProductDetails', ()=> getProductDetails(id) )
console.log(data);

if(isLoading){
  return <div className="vh-100 d-flex justify-content-center align-items-center">
  
  <MoonLoader color="#36d7b7" />
  
  </div>
}


return <>
<div className='container py-5 '>

<div className="row align-items-center shadow-lg">


<div className="col-md-3">
<figure>
<img className='w-100' src={data.data.data.imageCover} alt={data.data.data.title} />
</figure>
</div>
<div className="col-md-9">
<div className="detels text-center">

<h2>{data.data.data.title}</h2>
<p className='text-muted'> {data.data.data.description}</p>
<h5> price :  {data.data.data.price}  EG 
<button  onClick=  { ()=> addProdutct (data.data.data.id)}  className=' btn w-100 p-2 m-3 bg-min text-white'>

{sendingLoader?   <SyncLoader color="#fff" /> :"Add to cart"}


</button>
</h5>
</div>
</div>
  
</div>


</div>
</>
}

export default ProductDetails;
// onClick={()=> addproduct(data.data.data.id)} 