import React from "react";
import Title from "../MAin/Title/Title";

export default function RoutUnderHeader(props) {
  return (
    <div
      className="h-[400px] w-full flex justify-center mt-[100px] pt-[130px] px-4 sm:px-[120px] bg-center  "
      style={{ backgroundImage: `url(${props.banner})` }}
    >
      <Title text={props.title} />
    </div>
  );
}
