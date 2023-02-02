import React from "react";
import Title from "../Title/Title";

export default function FirstArticleOnSection(props) {
  return (
    <article
      className={` ${props.selfClassFlexReverse} flex justify-between ${props.selfReverse} flex-col  items-center`}
    >
      <div
        className={` flex flex-col w-full md:w-[50%] items-center pb-[1rem] ${props.selfClassPaddingP} `}
      >
        <h4
          className={` ${props.selfClassHidden} pb-2 text-xs text-yellow-500`}
        >
          October-10-2022
        </h4>
        <Title title={props.title} selfClass="pb-2 sm:pb-4 md:pb-6 lg:pb-8" />
        <p className={`${props.selfClassMarginImg}`}>{props.massage}</p>
      </div>
      <div className={`w-full md:w-[40%] `}>
        <img
          className={` rounded-xl ${props.selfShadow}`}
          src={props.img}
          alt={props.alt}
        />
      </div>
    </article>
  );
}
