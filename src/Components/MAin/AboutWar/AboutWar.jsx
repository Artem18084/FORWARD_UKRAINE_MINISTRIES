import React from "react";
import { useSelector } from "react-redux";
import solder from "../../../images/main/AboutWar/solder.png";
import rightDestroyed from "../../../images/main/AboutWar/rightImg.png";
import leftDestroyed from "../../../images/main/AboutWar/leftImg.png";
import SubTitle from "../SubTitle/SubTitle";

export default function AboutWar() {
  const currentTextData = useSelector((state) => state.language.textJson);
  const contentDataText = currentTextData.main.aboutWar.contentData;
  const time = currentTextData.main.aboutWar.time;
  const title = currentTextData.main.aboutWar.title;

  return (
    <div className="flex items-center justify-center">
      <article className=" flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:items-center lg:justify-between bg-white text-[#3f424b] md:gap-[40px] lg:gap-[60px] md:px-9 lg:px-11 xl:px-[72px] md:py-[72px] lg:py-24 max-w-[1440px]">
        <div className=" flex items-center justify-center md:gap-6 md:max-h-[433.945px]  lg:max-w-[438px] xl:max-w-[618px]  rounded-[12px]">
          <img
            className="  hidden md:block md:max-w-[96.64px] lg:max-w-[60.8px] xl:max-w-[85.81px] md:h-[356.45px]  leading-[12px]"
            src={leftDestroyed}
            alt="leftHouseDestroyed"
          />
          <img
            src={solder}
            alt="solder"
            className="w-full md:max-w-[457.42px] lg:max-w-[287.86px] xl:max-w-[406.15px] md:h-[433.94px]  md:leading-[12px] rounded-[12px]"
          />
          <img
            className=" hidden md:block md:max-w-[96.64px] lg:max-w-[60.8px] xl:max-w-[85.81px]  md:h-[356.45px]   leading-[12px]"
            src={rightDestroyed}
            alt="rightHouseDestroyed"
          />
        </div>
        <section className="flex gap-[60px] py-12 px-4 md:py-0 md:px-0 lg:max-w-[438px] xl:max-w-[618px] ">
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-4 border-l-[#4177ec] border-l-[1px] pl-4 font-semibold text-sm leading-4 ">
              <li>
                <time
                  className=" text-[#4177ec] font-serif text-sm font-semibold leading-4 tracking-normal text-left"
                  dateTime="2022-10-10"
                >
                  {time}
                </time>
              </li>
              <li>
                <SubTitle title={title} color="black" />
              </li>
            </ul>
            <ul className="flex flex-col gap-4 text-base font-light ">
              {contentDataText.map((item, index) => (
                <li key={index}>
                  <p className={item.isBold ? "font-bold" : "text-normal"}>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
