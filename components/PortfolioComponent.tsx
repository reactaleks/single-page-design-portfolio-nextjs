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
    align: "center",
    loop: true,
    skipSnaps: false,
    duration: 15,
    inViewThreshold: 0.7,
    startIndex: 3
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
    <div className="h-[338px] flex flex-col justify-between mt-16 md:h-[576px] md:mt-28 xl:h-[576px] xl:w-full ">
      <h2 className="text-[24px] font-bold text-center font-jakarta md:text-heading-s">My Work</h2>
      <div className={` max-w-[48rem] flex flex-col lg:max-w-full 4k:max-w-[1110px] 4k:mx-auto`}>
        <div className={` overflow-hidden `} ref={emblaRef}>
          <div className={`${styles.embla__container} flex`}>
            {portfolioImages.map((slide, index) => (
              <div key={index} className="shrink-0 grow-0 basis-[70%] md:basis-[540px] lg:basis-[40%] xl:basis-[40%] 2xl:basis-[25%] 4k:basis-[50%]">
                <div className=" p-2 flex justify-center">
                  <Image
                    src={slide}
                    className="w-[270px] h-[180px] rounded-xl md:w-[540px] md:h-[360px]"
                    alt=""
                    width={270}
                    height={180}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <div className={`w-[144px] h-[64px] mx-auto`}>
          <div className={`flex justify-between w-full  h-[64px]`}>
            <div className="w-[64px] h-[64px] bg-black rounded-full flex items-center justify-center hover:bg-galactic-blue"    onClick={onPrevButtonClick}>
              <Image
                src={slideControlLeft}
                className={`w-[14.81px] h-[16px]`}
                alt=""
             
              />
            </div>
            <div className="w-[64px] h-[64px] bg-black rounded-full flex items-center justify-center hover:bg-galactic-blue" onClick={onNextButtonClick}>
              <Image
                src={slideControlRight}
                className={`w-[14.81px] h-[16px]`}
                alt=""
                
              />
            </div>
          </div>
        </div>
    </div>
  );
}
