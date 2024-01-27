import React from "react";

export default function Name(props) {
  return (
    <h3 className=" flex gap-[4px] text-[#1c1c1c] text-center font-playfair font-bold text-2xl leading-[24px] whitespace-nowrap	">
      {props.name}
    </h3>
  );
}
