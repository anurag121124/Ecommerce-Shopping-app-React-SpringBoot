import React from 'react';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'; // Corrected component name
import "react-multi-carousel/lib/styles.css";
import { kurtaPage1 } from '../../../data/Kurta/kurta';
import { mensPantsPage1 } from '../../../data/pants/men_page1';
import { mens_kurta } from '../../../data/Men/men_kurta';

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
  const kurtaProducts = kurtaPage1; // Assuming kurtaPage1 contains product data
  const mensPantsProducts = mensPantsPage1;
  const menKurtaProduct = mens_kurta; // Assuming mensPantsPage1 contains product data

  const collections = ["Men's Collection", "Women's Collection"];

  return (
    <div>
      <HomeCarousel responsive={responsive} />
      <div>
        {collections.map((collectionTitle, index) => (
          <HomeSectionCard
            key={index}
            products={collectionTitle === "Men's Collection" ? menKurtaProduct : kurtaProducts}
            collectionTitle={collectionTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Homesectioncrousel;
