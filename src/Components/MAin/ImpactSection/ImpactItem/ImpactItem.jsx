import React from "react";
import historyMobile from "../../../../images/Impact/historyMobile.svg";

export default function ImpactItem(props) {
  return (
    <li className="flex items-st art items-center gap-4 self-stretch text-Light  text-center font-Inter text-base font-normal leading-6">
      <figure className="h-[60px] w-[60px] lg:w-[80px] lg:h-[80px] flex flex-col items-center justify-center bg-myYellow rounded-full duration-500 hover:scale-110 transform">
        <img src={props.src} alt={props.alt} />
      </figure>

      <ul className="flex  flex-col items-start gap-3 whitespace-nowrap">
        <li>
          <h3 className="font-playfair text-[20px] lg:text-[32px]  font-bold leading-[26px] tracking-wide uppercase text-[#000E30]">
            {props.title}
          </h3>
        </li>
        <li>
          <p className="text-center font-inter text-[16px] font-normal leading-6 text-[#9AAAD7]">
            {props.text}
          </p>
        </li>
      </ul>
    </li>
  );
}
