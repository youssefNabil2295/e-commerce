import React from 'react';
import CategoriesSlider from '../../CategoriesSlider/CategoriesSlider';
import Products from '../Products/Products';
import Brands from '../Barnds/Brands';
import { Helmet } from 'react-helmet';

const Home = () => {
  
  return <>
    <Helmet>
    <title>Home</title>
  </Helmet>
    <div className='container'>
    
    <CategoriesSlider/>
    <Products/>
    <Brands/>
    </div>
    </>;
}

export default Home;
