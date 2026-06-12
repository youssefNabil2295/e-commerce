import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sliderImage1 from "../../Assets/images/slider-image-1.jpeg";
import sliderImage3 from "../../Assets/images/slider-image-3.jpeg";
import slider2 from "../../Assets/images/slider-2.jpeg";
import sliderImage2 from "../../Assets/images/slider-image-2.jpeg";
import blogImg1 from "../../Assets/images/blog-img-1.jpeg";
import groceryBanner from "../../Assets/images/grocery-banner.png";



export default function HomeSlider() {



  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    };



  return  <>
    <div>
      <Slider {...settings}>
        <div>
          <img  style={{width:'100%', height:'400px'}}  src={sliderImage1} alt="slider"  />
        </div>
        <div>
        <img style={{width:'100%', height:'400px'}} src={sliderImage3} alt="slider"  />
        </div>
        <div>
        <img src={slider2} style={{width:'100%', height:'400px'}} alt="slider"  />
        </div>
        <div>
        <img style={{width:'100%', height:'400px'}} src={sliderImage2} alt="slider"  />
        </div>
        <div>
        <img src={blogImg1} style={{width:'100%', height:'400px'}} alt="slider"  />
        </div>
        <div>
        <img src={groceryBanner} style={{width:'100%', height:'400px'}} alt="slider"  />
        </div>
      </Slider>
    </div>
  </>;
}


