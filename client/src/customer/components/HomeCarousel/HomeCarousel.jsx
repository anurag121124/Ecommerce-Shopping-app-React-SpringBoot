import React from "react";
import styled from "styled-components";
import { Carousel } from "@material-tailwind/react";

const StyledCarousel = styled(Carousel)`
  border-radius: 0; /* Remove border radius */
`;

const HomeCarousel = () => {
  return (
    <StyledCarousel
    className="rounded-xl"
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
  >
    <img
      src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg"
      alt="image 1"
      className="h-full w-full object-cover"
    />
    <img
      src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg"
      alt="image 2"
      className="h-full w-full object-cover"
    />
    <img
      src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg"
      alt="image 3"
      className="h-full w-full object-cover"
    />
    </StyledCarousel>
  );
};

export default HomeCarousel;
