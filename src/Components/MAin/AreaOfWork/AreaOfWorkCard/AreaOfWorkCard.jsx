import React from "react";
import DonateButton from "../../../UI/DonateButton/DonateButton";

export default function AreaOfWorkCard(props) {
  const { title, text, img } = props.contentData;

  return (
    <li className="flex flex-col shadow-cardShadow  rounded-xl h-[479px]">
      {/* <figure className="flex items-center justify-center h-[220px]"> */}
        <img
          className="max-h-[220px] object-contain"
          src={img}
          alt={props.alt}
        />
      {/* </figure> */}
      <section className="flex flex-col justify-between h-[259px] px-8 pt-8 pb-10  flex-shrink-0 self-stretch  ">
        <ul className="flex flex-col  gap-4">
          <li>
            <h4 className="font-playfair text-[18px] font-bold leading-[23.4px] tracking-wider text-left uppercase whitespace-nowrap ">
              {title}
            </h4>
          </li>
          <li>
            <p className="font-inter text-base font-light leading-6 tracking-normal text-left ">
              {text}
            </p>
          </li>
        </ul>
        <DonateButton helping="Support" bgColor="[#4177ec]" color="white" />
      </section>
    </li>
  );
}
