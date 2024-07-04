import React from 'react'
import c1 from '../../../assets/c1.png'
import c2 from '../../../assets/c2.jpg'
const Award = () => {
  return (
    <div className='bg-[#00061e] py-14'>
        <p className='font-extrabold text-center text-2xl text-white'>Awards for Rustic Ram Cafe and Restaurant</p>

        <div  className='py-8'>
         <div  className='flex justify-between'>
            <div className='w-1/5'>
            <img src={c1}/>
            </div>

            <div className='w-1/5'>
            <img src={c1}/>
            </div>

            <div className='w-1/5'>
            <img src={c2}/>
            </div>

            <div className='w-1/5'>
            <img src={c1}/>
            </div>

          



         </div>
        </div>
    </div>
  )
}

export default Award