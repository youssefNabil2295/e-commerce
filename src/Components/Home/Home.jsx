import React from 'react';
import CategoriesSlider from '../../CategoriesSlider/CategoriesSlider';
import Products from '../Products/Products';
import Brands from '../Barnds/Brands';
import { Helmet } from 'react-helmet';
import HomeSlider from '../homeSLIDER/HomeSlider';
import groceryBanner2 from '../../Assets/images/grocery-banner-2.jpeg';
import groceryBanner from '../../Assets/images/grocery-banner.png';

const Home = () => {
  
  return <>
    <Helmet>
    <title>Home - Fresh Cart | Online Grocery Shopping</title>
    <meta name="description" content="Welcome to Fresh Cart - your one-stop online grocery store. Browse categories, discover brands, and shop the freshest products delivered to your door." />
  </Helmet>
    <div className='container'>
    
    <div className="row gx-2 mb-5 mt-4">
      <div className="col-sm-9">
        <HomeSlider/>
      </div>
      <div className="col-sm-3">
        <img style={{width:"100%", height:'200px'}} src={groceryBanner2} alt="Grocery banner" />
        <img style={{width:"100%", height:'200px'}} src={groceryBanner} alt="Grocery promotion" />
      </div>
    </div>

    <CategoriesSlider/>
    <Products/>
    <Brands/>
    </div>
    </>;
}

export default Home;
