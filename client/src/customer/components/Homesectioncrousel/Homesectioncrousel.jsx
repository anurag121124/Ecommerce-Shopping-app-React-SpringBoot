  import React from 'react';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'; // Corrected component name
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Homesectioncrousel = () => {
  const productData = [
    {
      id: 1,
      imageUrl: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/r/a/c/-original-imagg44kreytceyz.jpeg?q=70',
      title: 'NoFilter',
      description: 'Men Printed Pure Cotton Straight Kurta',
      price: 39.99,
    },
    // Add more product objects
  ];

  const numberOfCopies = 8;

  const duplicatedProducts = Array.from({ length: numberOfCopies }, (_, index) => ({
    ...productData[0], // Assuming you want to duplicate the first product
    id: index + 1,
  }));
  const collections = ["Men's Collection", "Women'Collection", "Kids Collection"];

  return (
    <div>
      <HomeCarousel />
      <div >
        <div>
        {collections.map((collectionTitle, index) => (
          <HomeSectionCard key={index} products={duplicatedProducts} collectionTitle={collectionTitle} />
        ))}
      </div>
      <div>
        {collections.map((collectionTitle, index) => (
          <HomeSectionCard key={index} products={duplicatedProducts} collectionTitle={collectionTitle} />
        ))}
      </div>

      </div>
    </div>
  );
};

export default Homesectioncrousel;
