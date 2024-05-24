 "use client";

import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./HeroCaraousel.css";


const HeroCaraousel = () => {
  const images = [
    // Add your image URLs here
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
  ];

  const generateSlides = () => {
    const slides = [];
    for (let i = 0; i < images.length; i++) {
      slides.push({
        src: images[i],
        alt: `Slide ${i + 1}`,
        title: `Slide ${i + 1}`,
        description: `This is the description for slide ${i + 1}.`,
        buttonText: 'Shop Now',
      });
    }
    return slides;
  };

  const options = {
    type: 'loop',
    autoWidth: true,
    focus: 0,
    omitEnd: true,
    autoplay: true,
    resetProgress: false,
    arrows: false,
    pagination: true,
    perPage: 1,
    perMove: 1,
    interval: 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnTrim: true,
    waitForTransition: true,
    keyboard: true,
    drag: true,
    dragAngleThreshold: 30,
    swipeDistanceThreshold: 150,
    flickVelocityThreshold: 3,
    trimSpace: true,
    trimFractions: true,
    updateOnMove: false,
    throttle: 100,
    TimeRanges: 5000,
    height: '30rem',

  };

  return (
    <div className="home-banner">
      <div className="wrapper">
        <Splide options={options} hasTrack={false}>
          <div style={{ position: 'relative' }}>
            <SplideTrack>
              {generateSlides().map((slide, index) => (
                <SplideSlide key={index}>
            
                  <img src={slide.src} alt={slide.alt} />
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default HeroCaraousel;