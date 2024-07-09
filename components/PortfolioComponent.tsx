"use client";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import {useCallback } from "react";
import slideControlLeft from "../public/assets/icon-arrow-left.svg";
import slideControlRight from "../public/assets/icon-arrow-right.svg";
import styles from "../components/PortfolioComponent.module.css"

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
    inViewThreshold: 0.7,
  });

  const onPrevButtonClick = useCallback(() => {
    console.log('Hello prev')
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    console.log('Hello next')
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

 

  return (
    <div className={` max-w-[48rem] mx-auto`}>
      <div className={` overflow-hidden`} ref={emblaRef}>
        <div className={`${styles.embla__container} flex`}>
          {portfolioImages.map((slide, index) => (
            <div key={index} className="shrink-0 grow-0 basis-[50%]">
                <Image src={slide} className="" alt="" width={250} height={250} />
            </div>
          ))}
        </div>
      </div>
      <div className={` h-[64px]`}>
        <div className={` w-[144px]`}>
          <Image
            src={slideControlLeft}
            className={`w-[64] h-[64] bg-black rounded-full  `}
            alt=""
            onClick={onPrevButtonClick}
          />
          <Image
            src={slideControlRight}
            className={`w-[64] h-[64] bg-black rounded-full  `}
            alt=""
            onClick={onNextButtonClick}
          />
        </div>
      </div>
    </div>
  );
}
