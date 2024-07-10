"use client";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { useCallback } from "react";
import slideControlLeft from "../public/assets/icon-arrow-left.svg";
import slideControlRight from "../public/assets/icon-arrow-right.svg";
import styles from "../components/PortfolioComponent.module.css";

export default function PortfolioComponent() {
  const portfolioImages: string[] = [
    "/assets/image-slide-1.jpg",
    "/assets/image-slide-2.jpg",
    "/assets/image-slide-3.jpg",
    "/assets/image-slide-4.jpg",
    "/assets/image-slide-5.jpg",
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.4,
  });

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={` max-w-[48rem] flex flex-col justify-center`}>
      <div className={` overflow-hidden `} ref={emblaRef}>
        <div className={`${styles.embla__container} flex items-center`}>
          {portfolioImages.map((slide, index) => (
            <div key={index} className="shrink-0 grow-0 basis-[100%] ">
              <div className="flex ">
                <Image
                  src={slide}
                  className="w-[540px]"
                  alt=""
                  width={540}
                  height={360}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={``}>
        <div className={`flex justify-center w-full  h-[64px]`}>
          <Image
            src={slideControlLeft}
            className={`w-[64px] h-[64px] bg-black rounded-full  `}
            alt=""
            onClick={onPrevButtonClick}
          />
          <Image
            src={slideControlRight}
            className={`w-[64px] h-[64px] bg-black rounded-full  `}
            alt=""
            onClick={onNextButtonClick}
          />
        </div>
      </div>
    </div>
  );
}
