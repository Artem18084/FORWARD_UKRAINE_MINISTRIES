import React from "react";

export default function SubTitle(props) {
  return (
    <h2
      className={` font-playfair text-2xl sm:text-[30px] md:text-4xl  font-bold leading-[33.6px] sm:leading-[42px] md:leading-[50.4px] tracking-tight text-left uppercase  text-${props.color}`}
    >
      {props.title}
    </h2>
  );
}
