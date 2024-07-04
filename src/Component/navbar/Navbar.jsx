import React from 'react'
import { IoMdCall } from "react-icons/io";
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div  className="bg-baner  bg-no-repeat bg-center bg-cover h-screen">
      <div className='py-4 flex justify-center gap-x-2'>
        <IoMdCall className='text-white font-bold text-xl mt-1' />
        <p className='text-white font-bold text-base '>+61 3 5208 1317</p>
      </div>

      <div className='w-full h-[3px] bg-[#bc9b75]'>

      </div>

      <div className='w-[500px] mx-auto py-24'>
        <img className='' src={logo} alt="" />
        <p className='text-[#ffb766] font-bold text-2xl text-center '> Since 2019</p>
       
      </div>
     

   
      </div>
  )
}

export default Navbar