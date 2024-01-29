import React from "react";

export default function Title(props) {
  return (
    <h1 className="flex text-white self-stretch not-italic  font-playfair font-semibold  text-[34px] leading-[47.6px] sm:leading-[59.8px] md:leading-[67.2px] md:text-[46px] lg:text-[58px] xl:text-[56px] tracking-wide uppercase">
   {props.text}
    </h1>
  );
}