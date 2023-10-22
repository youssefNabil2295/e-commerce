import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { MoonLoader } from 'react-spinners';

const Brands = () => {


async function getBrands(){

return await axios.get( 'https://route-ecommerce.onrender.com/api/v1/brands')


}

const {data , isError, isLoading , isFetching} = useQuery ("allBrands",getBrands)

if(isLoading){
  return <div className="vh-100 d-flex justify-content-center align-items-center">
  
  
  
  <MoonLoader color="#36d7b7" />
  
  
  
  </div>


}


  return <>
    <Helmet>
    <title>Brands</title>
  </Helmet>

     <div className="container py-2">
     <h1 className='mincolor text-center p-4'>All Prands</h1>

  <div className="row">
  {data?.data.data.map(function (Brands,idx){return  <div key={idx} className="col-md-3 ">
  
  <div className="Brands  ">
  <img src={Brands.image} alt={Brands.image}  className='w-100 rounded-circle border shadow p-3 mb-3 bg-white rounded  ' />

  <h4 className='mincolor text-center '>{Brands.name}</h4>


  </div>
  
  
  </div>})}


  
  </div>
  
  </div> 
  




</>
  
}

export default Brands;
