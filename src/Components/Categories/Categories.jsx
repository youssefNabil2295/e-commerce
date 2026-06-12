import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { MoonLoader } from 'react-spinners';

const Categories = () => {

 function getCategories(){

 return axios.get( 'https://ecommerce.routemisr.com/api/v1/categories')

}

const{ data ,  isLoading  } = useQuery("allCategories" , getCategories, {
  cacheTime:3000  
});
 

 if (isLoading){
return <div className="vh-100 d-flex justify-content-center align-items-center">
  
  

<MoonLoader color="#36d7b7" />



</div>

 }
  return <>
<Helmet>
    <title>Categories - Fresh Cart</title>
    <meta name="description" content="Browse all product categories at Fresh Cart. Find electronics, clothing, beauty, and more." />
  </Helmet>
       <div className="container py-2">
  
  <div className="row">
  {data?.data.data.map(function (Categories,idx){return  <div  key={idx} className="col-md-3 ">
  
  <div className="Categories  ">
  
  <img style={{width:'100%', height:'400px'}} src={Categories.image} alt={Categories.name}  className='w-100  ' />

  <h6 className='mincolor'>{Categories.name}</h6>
  <h4>{Categories.slug}</h4>


  </div>
  
  
  </div>})}


  
  </div>
  
  </div> 




</>
  
}

export default Categories;
