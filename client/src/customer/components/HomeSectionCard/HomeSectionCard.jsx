import React from 'react';

const ProductCard = ({ product }) => {
const { imageUrl, title, description, price } = product;

  return (
    <div className="product-card cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img className="object-cover object-top w-full h-full" src={imageUrl} alt={title} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <p className="mt-2 text-sm text-gray-700">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
