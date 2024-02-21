import React from "react";
import evacImg from "../../../images/main/evacuation/evacuationCar.png";
import SubTitle from "../SubTitle/SubTitle";
import { useSelector } from "react-redux";

export default function Evacuation() {
  const currentTextData = useSelector((state) => state.language.textJson);
  const contentDataText = currentTextData.main.evacuation.contentData;
  const time = currentTextData.main.evacuation.time;
  const title = currentTextData.main.evacuation.title;
  return (
    <div className="flex lg:h-screen lg:max-h-[930px] items-center justify-center bg-dark-blue">
      <article className=" flex h-full  flex-col lg:items-center lg:flex-row bg-dark-blue md:gap-[72px] lg:gap-6 xl:gap-[110px] max-w-[1440px]">
        <div className="h-full   w-full lg:min-w-[500px] xl:min-w-[622px]">
          <img
            className=" w-full lg:min-h-full  object-cover"
            src={evacImg}
            alt="carEvacuation"
          />
        </div>

        <section className="flex  gap-[60px] py-12 px-4 md:px-9 md:pb-[72px] md:pt-0 lg:py-0 lg:pl-0 lg:pr-11 xl:pr-[72px] flex-grow">
          <div className="flex flex-col gap-8 lg:py-24">
            <ul className="flex flex-col gap-4 border-l-[#fff200] border-l-[1px] pl-4 font-semibold text-sm leading-4 ">
              <li>
                <time
                  className=" text-[#fff200] font-serif text-sm font-semibold leading-4 tracking-normal text-left"
                  dateTime="2022-10-10"
                >
                  {time}
                </time>
              </li>

              <li>
                <SubTitle title={title} color="white" />
              </li>
            </ul>
            <ul className="flex flex-col gap-4 text-base font-light text-[#9aaad7] ">
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
