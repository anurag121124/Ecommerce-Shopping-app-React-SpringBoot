import React from 'react'
import "./Productpagecrad.css"
const ProductPageCard = () => {
  return (
    <div className='productcard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/r/a/c/-original-imagg44kreytceyz.jpeg?q=70" alt="" />
      </div>
      <div className='textpart bg-white p-3'>
        <div className=''> 
        <p className='font-bold opacity-60'>UniversalSoft</p>
        <p className=''>Men Printed Pure Cotton Straight Kurta</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>$199</p>
          <p className='line-through opacity-50' >$1999</p>
          <p className='text-green-600 font-semibold'>70%</p>

        </div>
      </div>

    </div>
  )
}

export default ProductPageCard;