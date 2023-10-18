import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useQuery } from 'react-query';
import {  MoonLoader } from 'react-spinners';

function CategoriesSlider() {

function getALLcatgroy (){

 return  axios.get('https://route-ecommerce.onrender.com/api/v1/categories')
}

const{data , isLoading ,  } = useQuery('CategoriesSlider', getALLcatgroy,{
  refetchOnMount:false
})



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false
  };

if(isLoading){
  return  <MoonLoader color="#36d7b7" />

}

return  <>
  <div>
  <h2 className='mincolor'>CategoriesSlider</h2>
    <Slider {...settings}>
    {data?.data.data.map((Categorie,idx)=><div key={idx}>
      <img  style={{width:'100%', height:'300px'}}  src={Categorie.image} alt="slider"  />
      <h6 className='my-4'>{Categorie.name}</h6>
      </div>)}
    </Slider>
  </div>
</>;
}

export default CategoriesSlider
