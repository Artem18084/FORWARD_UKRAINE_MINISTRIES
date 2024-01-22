import React from "react";
import historyMobile from "../../../../images/Impact/historyMobile.svg";

export default function ImpactItem(props) {
  return (
    <li className="flex items-start gap-4 self-stretch text-Light  text-center font-Inter text-base font-normal leading-6">
      <figure className="h-[60px] w-[60px] flex flex-col items-center justify-center  bg-myYellow rounded-full">
        <img src={props.src} alt={props.alt} />
      </figure>
      <ul className="flex  flex-col items-start gap-3">
        <li>
          <h3 className="font-playfair text-xl  font-bold leading-[26px] tracking-wide uppercase">{props.title}</h3>
        </li>
        <li>
          <p>{props.text}</p>
        </li>
      </ul>
    </li>
  );
}
