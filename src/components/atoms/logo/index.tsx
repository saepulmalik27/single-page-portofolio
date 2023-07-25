"use client"
import React from "react";
import SVG from "react-inlinesvg";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <SVG
      src="icons/logo.svg"
      className="w-12 h-12 md:w-16 md:h-16  aspect-square cursor-pointer"
      onClick={handleClick}
    />
  );
};

export default Logo;
