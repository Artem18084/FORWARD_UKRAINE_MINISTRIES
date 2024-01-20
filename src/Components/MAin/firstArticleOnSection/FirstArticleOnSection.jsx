import React from "react";
import Title from "../Title/Title";
// import leftCarSide from "../../../images/Disaster/carLeft.png";
// import rightCarSide from "../../../images/Disaster/carRight.png";

export default function FirstArticleOnSection(props) {
  return (
    <article
      className={` ${props.selfClassFlexReverse} flex justify-between  ${props.selfReverse} flex-col  items-center`}
    >
      <div
        className={` flex flex-col  w-full xl:w-[50%] items-center pb-[.5rem] md:pb-[1.5rem] ${props.selfClassPaddingP} `}
      >
        <h4 className={` ${props.selfClassHidden} pb-1 text-xs text-[#ff9731]`}>
          October-10-2022
        </h4>
        <Title title={props.title} selfClass="pb-2 sm:pb-4 md:pb-6 lg:pb-8" />
        <p className={`${props.selfClassMarginImg} ${props.mb} `}>
          {props.massage}
        </p>
      </div>
      <div
        className={` h-[30vh] xl:h-[50vh] flex  items-center justify-center  ${props.w} ${props.selfClassMargin}`}
      >
        <img
          src={leftCarSide}
          alt="leftCarSide"
          className={`${props.sideCar} mr-5 h-[27vh] xl:h-[45vh]`}
        />
        <img
          className={` rounded-xl h-full ${props.selfShadow}`}
          src={props.img}
          alt={props.alt}
        />
        <img
          src={rightCarSide}
          alt="rightCarSide"
          className={`${props.sideCar} ml-5 h-[27vh] xl:h-[45vh]`}
        />
      </div>
    </article>
  );
}
