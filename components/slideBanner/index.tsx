// Slide.js
import React from "react";

const Slide = ({ slide, index }: any) => (
  <div className={`keen-slider__slide number-slide${index}`} key={index}>
    <img
      className={`number-slide${index} w-100 rounded rounded-100 tablet:w-[100%]`}
      src={slide.image}
      alt={slide.alt}
    />
  </div>
);

export default Slide;
