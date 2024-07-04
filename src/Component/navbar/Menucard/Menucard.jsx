import React from 'react'
import menu1 from '../../../assets/menu1.jpeg'
import menu2 from '../../../assets/menu2.jpeg'
import "slick-carousel/slick/slick.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Slider from "react-slick";
const Menucard = () => {
  
    const settings = {
     
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
   

      };
  return (
    <div className='bg-menu  bg-no-repeat bg-center bg-cover h-screen '>
        <div>
            <h1 className='text-center text-3xl font-extrabold  text-white py-8'>Menu</h1>
        </div>

   <div className='max-w-container mx-auto'>
   <div className="slider-container py-14 ">
      <Slider {...settings}>
        <div className=''>
         <img className='w-[400px] ' src={menu1}/>

        </div>

        <div className=''>
        <img className='w-[400px]' src={menu2}/>
        </div>
        <div className=''>
        <img className='w-[400px]' src={menu1}/>
        </div>
       
      </Slider>
    </div>
   </div>
   

    </div>
  )
}

export default Menucard