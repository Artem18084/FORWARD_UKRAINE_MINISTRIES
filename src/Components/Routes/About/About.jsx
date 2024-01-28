import React from "react";
import RoutUnderHeader from "../RoutUnderHeader";

import aboutImg from "../../../images/Routes/About/about.jpg";
import SubTitle from "../../MAin/SubTitle/SubTitle";

import leftImgMobile from "../../../images/Routes/About/AboutImages/leftImageMobile.png";
import mainImgMobile from "../../../images/Routes/About/AboutImages/mainImagesMobile.png";

import rightImgMobile from "../../../images/Routes/About/AboutImages/rightImageMobile.png";

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
      <RoutUnderHeader title="who we are" banner={aboutImg} />
      <article className="flex flex-col sm:flex-col-reverse md:   gap-8 sm:gap-[24px] l:gap-[110px]  items-center justify-center self-stretch px-4 sm:px-9 md:px-11 l:px-[72px] py-16 sm:py-[72px] md:py-[96px] ">
      <div className="flex items-center justify-center w-[343px] sm:w-[696px] md:w-[642px]  h-[270px] sm:h-[546px] md:h-[504px]  mx-au to relative">
          <img
            className="absolute left-0 w-[167.52px] sm:w-[339.72px] md:w-[313.36px]  h-[221.63px] sm:h-[448.82px]  md:h-[414px]  "
            src={leftImgMobile}
            alt=""
          />

          <img
            className="z-20 w-[225.67px] h-[269.45px] sm:w-[457.61px] md:w-[246px] l:w-[422.21px]   sm:h-[546.39px] md:h-[504px]"
            src={mainImgMobile}
            alt=""
          />

          <img
            className="absolute right-0 w-[167.52px] sm:w-[339.72px] md:w-[313.36px]  h-[221.63px] sm:h-[448.82px]  md:h-[414px] "
            src={rightImgMobile}
            alt=""
          />
        </div>
        
        <section className=" w-full md:w-[455px] l:w-[526px] flex flex-col items-start md:items-center md:justify-center gap-[29.793px]">
          <div className="pl-4 border-l-[1px] border-l-[#4177EC] ">
            <SubTitle color="black" title="About us" />
          </div>
          <ul className="flex flex-col items-start gap-[14.897px] self-stretch text-base leading-6 text-[#3F424B] font-inter ">
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
