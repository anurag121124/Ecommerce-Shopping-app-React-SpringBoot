import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import '../../../../src/App.css'
// Styled component for the product card
const ProductCardWrapper = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 5px; 
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ProductCard = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 products at once
    slidesToScroll: 1,

  };

  return (
    <div className="max-w-screen-xl mx-auto mt-2" style={{ alignItems: 'flex-start' }}>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="mx-1">
            <ProductCardWrapper>
              <img className="object-cover object-top w-full h-30 imageclass" src={product.imageUrl} alt={product.title} />

              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{product.description}</p>
              <div className="mt-2 text-gray-900 font-semibold">${product.price.toFixed(2)}</div>
            </ProductCardWrapper>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCard;
