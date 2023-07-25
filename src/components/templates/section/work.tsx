"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import SVG from "react-inlinesvg";

const slides = [
    "/assets/image-slide-1.jpg",
    "/assets/image-slide-2.jpg",
    "/assets/image-slide-3.jpg",
    "/assets/image-slide-4.jpg",
    "/assets/image-slide-5.jpg",
]



const Work = () => {
    const ref = React.useRef({
        scrollLeft: 0,
    });

    const handleSlide = useCallback((direction: string) => {
        if (direction === "left") {
            ref.current.scrollLeft -= 540;
        }else if (direction === "right") {
            ref.current.scrollLeft += 540;
        }
    }, [ref])

  

  return (
    <section className="flex flex-col justify-center items-center gap-14 my-[88px]">
      <h1 className="heading-sm">My Work</h1>

      <div className="flex flex-row overflow-x-auto overflow-y-hidden gap-[30px]" ref={ref as any} >
        {
            slides.map((slide, index) => (
                <Image key={index} src={slide} width={540} height={360} alt="thumbnail" />
            ))
        }
      </div>

      <div className="flex flex-row justify-center items-center gap-4">
        <div onClick={() => {handleSlide("left")}} className="flex justify-center items-center w-16 h-16 aspect-square bg-black rounded-full cursor-pointer">
          <SVG src="icons/icon-arrow-left.svg" />
        </div>
        <div onClick={() => {handleSlide("right")}} className="flex justify-center items-center w-16 h-16 aspect-square bg-black rounded-full cursor-pointer">
          <SVG src="icons/icon-arrow-right.svg" />
        </div>
      </div>
    </section>
  );
};

export default Work;
