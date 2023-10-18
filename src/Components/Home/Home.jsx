import React from 'react';
import CategoriesSlider from '../../CategoriesSlider/CategoriesSlider';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div className='container'>
    <br />
    <CategoriesSlider/>
    <Products/>
    </div>
  );
}

export default Home;
