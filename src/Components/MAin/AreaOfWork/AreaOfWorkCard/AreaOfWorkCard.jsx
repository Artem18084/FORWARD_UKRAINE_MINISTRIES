import React from "react";

import SupportButton from "../../../UI/DonateButton/SupportButton";

export default function AreaOfWorkCard(props) {
  const { title, text, img } = props.contentData;

  return (
    <li className="flex flex-col items-center shadow-cardShadow rounded-xl h-[479px] md:h-auto flex-1 duration-300 hover:scale-105 transform">
      <div
        className="w-full h-[220px] overflow-hidden bg-center bg-cover rounded-t-[12px]"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <section className="flex flex-col items-start justify-between h-[259px] md:h-[362px] px-8 pt-8 pb-10 flex-shrink-0 self-stretch text-[#3f424b]">
        <ul className="flex flex-col gap-4">
          <li>
            <h4 className="font-serif text-[18px] font-bold leading-[23.4px] tracking-wider text-left uppercase whitespace-nowrap md:whitespace-normal text-[#000e30]">
              {title}
            </h4>
          </li>
          <li>
            <p className=" text-base font-light leading-6 tracking-normal text-left">
              {text}
            </p>
          </li>
        </ul>
        <SupportButton />{" "}
      </section>
    </li>
  );
}
