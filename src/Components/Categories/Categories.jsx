import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { MoonLoader } from 'react-spinners';

const Categories = () => {

 const [allCategories, setallCategories] = useState(null)

 function getCategories(){

 return axios.get( 'https://route-ecommerce.onrender.com/api/v1/categories')


   setallCategories(data.data)
}

const{ data ,  isLoading , refetch  } = useQuery("allCategories " , getCategories, {
  cacheTime:3000  
  // refresh update 
});
 

 useEffect (function (){getCategories() },[]);

 if (isLoading){
return <div className="vh-100 d-flex justify-content-center align-items-center">
  
  
  
<MoonLoader color="#36d7b7" />



</div>

 }
  return <>

       <div className="container py-2">
  
  <div className="row">
  {data?.data.data.map(function (Categories,idx){return  <div  key={idx} className="col-md-3 ">
  
  <div className="Categories  ">
  
  <img style={{width:'100%', height:'400px'}} src={Categories.image} alt=""  className='w-100  ' />

  <h6 className='mincolor'>{Categories.name}</h6>
  <h4>{Categories.slug}</h4>


  </div>
  
  
  </div>})}


  
  </div>
  
  </div> 
  




</>
  
}

export default Categories;
