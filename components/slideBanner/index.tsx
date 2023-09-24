// Slide.js
import Image from "next/image";
import React from "react";

const Slide = ({ slide, index }: any) => (
  <div className={`keen-slider__slide number-slide${index}`} key={index}>
    <Image
      className={`number-slide${index} w-100 rounded rounded-100 tablet:w-[100%]`}
      src={slide.image}
      alt={slide.alt}
      width={500}
      height={20}
    />
  </div>
);

export default Slide;
