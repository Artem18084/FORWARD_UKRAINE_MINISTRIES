import React from "react";

export default function Name(props) {
  return (
    <h3 className=" flex gap-[4px] text-[#1c1c1c] text-center font-playfair font-bold text-[24px] leading-[24px] sm:leading-[27.5px]  whitespace-nowrap ">
      {props.name}
    </h3>
  );
}