import React from 'react';
import "./Productpagecrad.css";
import { productData } from '../../../data/mens_kurta';

const ProductPageCard = ({ product }) => {
  return (
    <div className='productcard w-[13rem] m-3 transition-all cursor-pointer'>
      <div className='h-[16rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
      </div>
      <div className='textpart bg-white p-3'>
        <div className=''> 
          <p className='font-bold opacity-60'>{product.title}</p>
          <p className=''>{product.description}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>${product.price}</p>
          <p className='line-through opacity-50' >$1999</p>
          <p className='text-green-600 font-semibold'>70%</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPageCard;
