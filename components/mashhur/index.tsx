"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Mashhur = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5,
      spacing: 15,
    },
  });
  return (
    <div className="container py-7 px-3 hidden tablet:block">
      <h2>Bu yerda siz uchun mashhur toifalar tanlab olingan</h2>
      <div className="py-5">
        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide number-slide1 items-center">
            <div className="rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Smartfonlar
            </div>
          </div>
          <div className="keen-slider__slide number-slide2 items-center">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Noutbooklar
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Smart Watch
            </div>
          </div>
          <div className="keen-slider__slide number-slide4">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Ayollar uchun
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Krossovkalar
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Kitoblar
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Smartfonlar
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Erkaklar uchun
            </div>
          </div>
        </div>
      </div>
      <div className="py-1">
        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide number-slide1 items-center">
            <div className="rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Smartfonlar
            </div>
          </div>
          <div className="keen-slider__slide number-slide2 items-center">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Noutbooklar
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Smart Watch
            </div>
          </div>
          <div className="keen-slider__slide number-slide4">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Ayollar uchun
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Krossovkalar
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Kitoblar
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Smartfonlar
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className=" rounded-lg shadow-md text-center py-5 bg-white overflow-hidden">
              Erkaklar uchun
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mashhur;
