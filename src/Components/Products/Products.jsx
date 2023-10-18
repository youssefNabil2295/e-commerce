import axios from 'axios';
 import React, { useContext, useEffect, useState } from 'react';
import {  MoonLoader } from 'react-spinners';
import HomeSlider from '../homeSLIDER/HomeSlider';
import { Link } from 'react-router-dom';
import x from './Products.module.css'
import { useQuery } from 'react-query';
import { CartContext } from '../../CountText/CartContext';
import toast from 'react-hot-toast';

const Products = () => {



const {addprodutctocart ,} = useContext (CartContext)

async  function wish(id){
const res =  await  addprodutctocart(id)
if (res.status === "success") {
<i  id='i2' class="fa-solid fa-hear  d-none   " style={{color: "#eb0046"}}></i>  
}

}
async function addproduct(id){
const res =   await addprodutctocart(id)

    if (res.status === "success") {
      toast.success(res.message , {  
        position:"top-center",  duration:2000 , 
        
        
      }  )
      // setwish(res.status === "success",true)

    }
  

      else{
        toast.error("error happend ")
      }
}



  function GetProducts(){
return axios.get('https://route-ecommerce.onrender.com/api/v1/products')
  }

const {isLoading, data} = useQuery("allProducts" ,GetProducts,{
  cacheTime:3000
} )


console.log(data);



// const [allpro , setallpro] = useState(null)



// async function getpro(){


// const {data} = await axios.get( 'https://route-ecommerce.onrender.com/api/v1/products')


// setallpro(data.data)
// }

// useEffect(function(){

//   getpro()
// },[])
if(isLoading){
return <div className="vh-100 d-flex justify-content-center align-items-center">
<MoonLoader color="#36d7b7" />
</div>
}
  return <>
<div className="container py-5 ">

<div className="row gx-2 mb-5 ">
<div className="col-sm-9">
<HomeSlider/>

</div>
<div className="col-sm-3">
<img  style={{width:"100%" , height:'200px'}} src={ require('../../Assets/images/grocery-banner-2.jpeg')} alt=""  />
<img style={{width:"100%" , height:'200px'}} src={ require('../../Assets/images/grocery-banner.png')} alt=""  />

</div>
</div>


<div className="row " >
{data?.data.data.map((pro,idx)=>


<div className= {`col-md-2 shadow `} key={idx} >
<Link  to={`/ProductDetails/${pro.id}`}>

<div className={`product cursor-pointer py-3  px-2 ${x.joo} `} >



{/* <div className='d-flex justify-content-between align-items-center'>
<i id='i1' class="fa-solid fa-heart d-none" style={{color: "#eb0046"}}></i>
<i id='i2' class="fa-regular fa-heart "></i>
</div> */} 
 
<img src ={pro.imageCover}   className='w-100 ' alt="product" /> 










<h6 className='mincolor fw-bolder'>{pro.category.name}</h6>
<h5>{pro.title.split(' ').slice(0,2).join(" ")}</h5>
<div className="d-flex justify-content-between align-items-center">
<p>{pro.price} EGP </p>
<p> <span>  <i className='fa-solid fa-star color'> </i> </span>{pro.ratingsAverage} </p>
</div>

</div></Link>

<button  onClick={()=> addproduct(pro.id)  }


className={`${x.btn} btn bg-min text-white  p-2 mb-4 mt-3 w-100`}>  

<i  id='i2' class="fa-solid fa-hear  d-none   " style={{color: "#eb0046"}}>{wish}</i>
ADD +




 </button>







</div> )}



</div>



</div>

   {/* {allpro? <div className="container py-5 ">




    <div className="row gx-2 mb-5 ">
    <div className="col-sm-9">
    <HomeSlider/>
    
    </div>
    <div className="col-sm-3">
    <img  style={{width:"100%" , height:'200px'}} src={ require('../../Assets/images/grocery-banner-2.jpeg')} alt=""  />
    <img style={{width:"100%" , height:'200px'}} src={ require('../../Assets/images/grocery-banner.png')} alt=""  />
    
    </div>
    </div>


<div className="row  " >
{allpro.map((pro,idx)=><div className= {`col-md-2 shadow `} key={idx} >
<Link  to={`/ProductDetails/${pro.id}`}>
<div className={`product cursor-pointer py-3  px-2 ${x.joo} `} >

<img src ={pro.imageCover}  className='w-100 ' alt="product" />

<h6 className='mincolor fw-bolder'>{pro.category.name}</h6>
<h5>{pro.title.split(' ').slice(0,2).join(" ")}</h5>
<div className="d-flex justify-content-between align-items-center">
<p>{pro.price} EGP </p>
<p> <span>  <i className='fa-solid fa-star rating-color'> </i> </span>{pro.ratingsAverage} </p>
</div>

<button className={`${x.btn} btn bg-min text-white p-0 mb-4 w-100`}>ADD +</button>
</div></Link>






</div> )}



</div>



</div> : <div className="vh-100 d-flex justify-content-center align-items-center">

 <MoonLoader color="#36d7b7" />

 </div>} */}

    </>
  
}

export default Products;
