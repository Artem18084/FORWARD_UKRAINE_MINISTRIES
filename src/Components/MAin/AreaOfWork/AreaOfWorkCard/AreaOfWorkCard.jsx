import React from "react";
import DonateButton from "../../../UI/DonateButton/DonateButton";

export default function AreaOfWorkCard(props) {
  const { title, text, img ,alt} = props.contentData;

  return (
    <li className="flex flex-col items-center shadow-cardShadow  rounded-xl h-[479px] md:h-auto flex-1">
        {/* <img
          className="w-full h-auto md:h-[220px] overflow-hidden"
          src={img}
          alt={alt}
        /> */}
        <div className="w-full  h-[220px] overflow-hidden bg-center bg-cover rounded-t-[12px]"
              style={{ backgroundImage: `url(${img})` }}
              >

        </div>

      <section className="flex flex-col items-center lg:items-start justify-between  h-[259px] md:h-[362px] px-8 pt-8 pb-10  flex-shrink-0 self-stretch  text-[#3f424b] ">
        <ul className="flex flex-col  gap-4">
          <li>
            <h4 className="font-playfair text-[18px] font-bold leading-[23.4px] tracking-wider text-left uppercase whitespace-nowrap md:whitespace-normal text-[#000e30 ] ">
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
