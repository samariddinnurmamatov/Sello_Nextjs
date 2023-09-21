import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import banner7 from "@/assets/banner/banner7.png";
import { slideData } from "@/utils/slideData";
import SlideBanner from "@/components/slideBanner";

const Banner = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="bg-gray-100">
      <div className="flex container p-3 py-8 space-x-4">
        <div ref={sliderRef} className="keen-slider cursor-pointer">
          {slideData.map((slide, index) => (
            <SlideBanner slide={slide} index={index} key={index} /> // Slide komponentini ishtirok ettirish
          ))}
        </div>
        <div className="cursor-pointer banner_border laptop:block hidden">
          <Image
            className="rounded-lg"
            src={banner7}
            alt="banner1"
            width={750}
            height={310}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;


