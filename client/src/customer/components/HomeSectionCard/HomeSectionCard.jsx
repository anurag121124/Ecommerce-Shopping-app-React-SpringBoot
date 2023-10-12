import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import "../../../../src/App.css";
import { kurtaPage1 } from "../../../data/Kurta/kurta";
import "../HomeSectionCard/HomesectionCard.css"
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

const ProductCard = ({ products, collectionTitle }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 3000, // superLargeDesktop
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // desktop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 464, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="max-w-screen-xl mx-auto mt-2"
      style={{ alignItems: "flex-start" }}
    >
      <h2
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        {collectionTitle}
      </h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="mx-1">
            <ProductCardWrapper>
              <div className="productcard w-[13rem] m-3 transition-all cursor-pointer">
                <div className="h-[16rem]">
                  <img
                    className="h-full w-full object-cover object-left-top"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="textpart bg-white p-3">
                  <div className="">
                    <p className="font-bold opacity-60">{product.title}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="font-semibold">${product.selling_price}</p>
                    <p className="line-through opacity-50">{product.price}</p>
                    <p className="text-green-600 font-semibold">
                      {product.disscount}
                    </p>
                  </div>
                </div>
              </div>
            </ProductCardWrapper>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCard;
