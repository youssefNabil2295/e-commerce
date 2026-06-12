import axios from 'axios';
 import React, { useContext } from 'react';
import {  MoonLoader } from 'react-spinners';
import HomeSlider from '../homeSLIDER/HomeSlider';
import { Link } from 'react-router-dom';
import x from './Products.module.css'
import { useQuery } from 'react-query';
import { CartContext } from '../../CountText/CartContext';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { SearchContext } from '../../CountText/SearchContext';

const Products = () => {



const {addprodutctocart ,} = useContext (CartContext)
const {searchQuery} = useContext (SearchContext)


async function addproduct(id){
const res =   await addprodutctocart(id)

    if (res.status === "success") {
      toast.success(res.message , {  
        position:"top-center",  duration:2000 , 
        
        
      }  )

    }
  

      else{
        toast.error("error happend ")
      }
}



  function GetProducts(){
return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }

const {isLoading, data} = useQuery("allProducts" ,GetProducts,{
  cacheTime:3000
} )


console.log(data);



if(isLoading){
return <div className="vh-100 d-flex justify-content-center align-items-center">
<MoonLoader color="#36d7b7" />
</div>
}

const filteredProducts = data?.data.data.filter(pro => 
  pro.title.toLowerCase().includes((searchQuery || '').toLowerCase())
) || [];

  return <>
  <Helmet>
    <title>Products - Fresh Cart</title>
    <meta name="description" content="Browse our wide selection of fresh products. Find the best deals on groceries, electronics, and more at Fresh Cart." />
  </Helmet>

<div className="container py-5 ">

<div className="row " >
{filteredProducts.map((pro,idx)=>


<div className= {`col-md-2 shadow `} key={idx} >
<Link  to={`/ProductDetails/${pro.id}`}>

<div className={`product cursor-pointer py-3  px-2 ${x.joo} `} >



 
<img src ={pro.imageCover}   className='w-100 ' alt={pro.title} /> 









<h6 className='mincolor fw-bolder'>{pro.category.name}</h6>
<h5>{pro.title.split(' ').slice(0,2).join(" ")}</h5>
<div className="d-flex justify-content-between align-items-center">
<p>{pro.price} EGP </p>
<p> <span>  <i className='fa-solid fa-star color'> </i> </span>{pro.ratingsAverage} </p>
</div>

</div></Link>

<button  onClick={()=> addproduct(pro.id)  }


className={`${x.btn} btn bg-min text-white  p-2 mb-4 mt-3 w-100`}>  

ADD +




 </button>




</div> )}



</div>



</div>


    </>
  
}

export default Products;
