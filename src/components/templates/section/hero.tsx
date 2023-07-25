"use client";
import React from "react";
import SVG from "react-inlinesvg";
import { twMerge } from "tailwind-merge";

type BoxProps = {
  label: string;
  svg: string;
  className?: string;
};
const BoxContent: React.FC<BoxProps> = ({ label, svg, className }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col justify-between rounded-lg p-6",
        className
      )}
    >
      <div className="flex justify-end">
        <SVG src={svg} />
      </div>
      <h3 className={"text-white font-bold text-[24px]"}>{label}</h3>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="section-main flex flex-col justify-center items-center gap-20  mt-16">
      <div className="flex flex-col justify-center items-center gap-[23px] text-center">
        <h1 className=" text-[36px] md:text-[44px] font-bold lg:heading-lg ">
          Design solutions made easy
        </h1>
        <p className="text-main">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BoxContent
          label="Graphic Design"
          svg="/icons/pattern-graphic-design.svg"
          className="bg-galactic-blue w-[354px] h-[364px]"
        />

        <div className="grid grid-flow-row gap-6">
          <div className="grid grid-cols-2 gap-6 h-[182px]">
            <BoxContent
              className="bg-summer-yellow"
              label="UI/UX"
              svg="icons/pattern-ui-ux.svg"
            />
            <BoxContent
              className="bg-pink"
              label="Apps"
              svg="icons/pattern-apps.svg"
            />
          </div>
          <BoxContent
            className="bg-light-red"
            label="Illustrations"
            svg="icons/pattern-illustrations.svg"
          />
        </div>
          <div className="grid md:col-span-2 lg:col-span-1 grid-flow-row gap-6">
            <BoxContent
              className="bg-cyan h-[182px]"
              label="Photography"
              svg="icons/pattern-photography.svg"
            />
            <BoxContent
              className="bg-dark-purple h-[182px] lg:h-auto"
              label="Motion Graphics"
              svg="icons/pattern-motion-graphics.svg"
            />
          </div>
      </div>
    </section>
  );
};

export default Hero;
