import React from "react";
import RoutUnderHeader from "../RoutUnderHeader";

import aboutImg from "../../../images/Routes/About/about.jpg";
import SubTitle from "../../MAin/SubTitle/SubTitle";


import leftImg from "../../../images/Routes/About/AboutImages/leftImageMobile.png"
import mainImg from "../../../images/Routes/About/AboutImages/mainImageMobile.png"
import rightImg from "../../../images/Routes/About/AboutImages/rightImageMobile.png"

export default function About() {
  const contentData = [
    {
      text: `Who are we? "Forward, Ukraine" Ministries is a 501(c)3 non-profit organization that supports Ukrainians in need. We want to take Ukraine forward in small steps. A small victory in someone's life is a victory for the great Ukraine.`,
      isBold: true,
    },
    {
      text: `We want to help Ukrainians to live better, get out of poverty, get an education and get a chance to improve their lives. We try to help people who suffer daily from military aggression, for whom every day can be the last, we have already made a large number of humanitarian trips to some of the hottest spots in Ukraine.`,
      isBold: false,
    },
    {
      text: `Thanks to caring people, without whom we could not do this, we have been able to help thousands of people and we are helping now and encourage you to do the same, everyone can be useful where they are. At the very beginning of the war, we were involved in the evacuation of people to safe places, and we also try to help people who are left without heat due to the constant shelling of the enemy - firewood, and those who are unable. to process it, our team fully prepares it for use by these people. If you don't know how you can help Ukraine, then you've come to the right place!`,
      isBold: false,
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <RoutUnderHeader title="who we are" banner={aboutImg}/>
      <article
        className="flex flex-col sm:flex-col-reverse lg:flex-row-reverse lg:flex-1 gap-8 sm:gap-[24px] lg:gap-[0px] xl:justify-around items-center justify-center self-stretch px-4 sm:px-9 md:px-11 lg:px-[44px] py-16 sm:py-[72px] md:py-[96px] ">
        <div className="flex items-center justify-center w-full mx-au to relative max-w-[500px] md:max-w-[800px] lg:flex-1 lg:ml-6 xl:max-w-[950px]">
          <img
            className="overflow-hidden object-cover absolute rounded-[10px] left-0 w-[167.52px] h-[221.63px] md:w-[313.36px] md:h-[448.82px] lg:w-[314px] xl:items-center xl:justify-center "
            src={leftImg}
            alt=""
          />

          <img
            className="overflow-hidden object-cover rounded-[10px] z-20 w-[225.67px] h-[269.45px] md:w-[457.61px] md:h-[546.39px] lg:w-[246px] xl:w-[443px]  "
            src={mainImg}
            alt=""
          />

          <img
            className="overflow-hidden object-cover rounded-[10px] absolute right-0 w-[167.52px]  h-[221.63px] md:w-[313.36px] md:h-[448.82px] lg:w-[270px]   "
            src={rightImg}
            alt=""
          />
        </div>

        <section
          className=" w-full md:w-full lg:w-[450px] xl:w-[650px] flex flex-col items-start  gap-[29.793px]">
          <div className="pl-4 border-l-[1px] border-l-[#4177EC] ">
            <SubTitle color="black" title="About us"/>
          </div>
          <ul
            className="flex flex-col items-start gap-[14.897px] self-stretch text-base leading-6 text-[#3F424B] font-sans ">
            {contentData.map((item, index) => (
              <li key={index}>
                <p className={item.isBold ? "font-bold " : "text-light"}>
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

      </article>
    </main>
  );
}