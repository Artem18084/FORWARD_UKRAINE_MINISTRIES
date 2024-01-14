import React from "react";

import imgKiev from "../../../images/Journey/Kiev.jpg";
import imgWood1 from "../../../images/Journey/wood1.jpg";
import imgWood2 from "../../../images/Journey/wood2.jpg";
import imgWood3 from "../../../images/Journey/wood3.jpg";
import imgWood4 from "../../../images/Journey/wood4.jpg";
import imgWood5 from "../../../images/Journey/wood5.jpg";
import imgWood6 from "../../../images/Journey/wood6.jpg";

import imgWoodRock from "../../../images/Journey/woodRock.jpg";
import FirstArticleOnSection from "../firstArticleOnSection/FirstArticleOnSection";

export default function JourneySection() {
  return (
    <section className="flex flex-col w-full h-full  px-[1rem] md:px-[2.5rem] md:pt-14 pt-6 items-center bg-gray-200">
      <FirstArticleOnSection
        alt="Independents square"
        selfClassPaddingP="xl:pr-12"
        selfClassMargin=" xl:ml-40"
        sideCar="hidden"
        selfReverse="xl:flex-row-reverse"
        selfShadow="xl:shadow-[-40px_40px_rgba(255,151,49,0.9)] "
        img={imgKiev}
        mb="mb-5"
        w="w-[90vw] h-[40vh]  xl:w-[30%]"
        title="Missionary journey"
        massage=" &nbsp; &nbsp; It was nice to spend time in Ukraine. Although waking up to explosions is not very pleasant. 
        October 10, 2022. That day, we saw with our own eyes the destroyed playgrounds near one of the Kyiv universities, crushed 
        cars, broken roads and the loss of lives in the middle of Kyiv. Russia bombed Ukraine with more than 80 missiles that day 
        and continues to do so every day. We, like most of Kyivans, spent that day in a bomb shelter, where there were many outsiders. 
        In our bomb shelter, everyone who was there was treated to coffee and goodies absolutely free of charge, and outside everything
         was closed and rockets were flying. When everything was over, we visited the places where the rockets fell and it was terrifying...."
      />

      <article className="flex flex-col w-full items-center  pt-6 sm:pt-8 md:pt-12 lg:pt-16  xl:pt-20 ">
        <p className="w-full  lg:px-16 xl:px-20  pb-8 md:pb-16 text">
          The main targets are civilians and critical infrastructure that
          ensures ordinary people are left without heat and electricity. We
          started buying firewood for people who cannot afford it and would be
          cold in winter if not for generous people. In addition to purchasing,
          our team helps to fully prepare them for use by people who are unable
          to do it themselves. As most Ukrainians say, time seems to have
          stopped, and winter is still here - February 24. Hundreds of days of
          heroism, hundreds of days of bombing, hundreds of days of people's
          deaths. But, like everything else, we get used to it. We get used to
          reading the news and hearing stories of tragedy, heroism and bravery.
          However, the war is not over! We can be exhausted and think that
          allies will provide all the needs, but that is simply not possible.
          Prices in Ukraine have risen sharply since the start of the war, and
          many ordinary people are struggling to make ends meet. They need our
          help - ordinary people living in peace. Please consider donating so we
          can continue to support the people of Ukraine. May God bless you!
        </p>
        <div className="flex gap-1 w-full h-[20vh] md:h-[25vh] xl:h-[35vh] [&>*]:inline whitespace-normal	overflow-x-auto  scrollbar-thin  md:scrollbar-thumb-gray-300">
          <img className="w-[50%] h-full" src={imgWood1} alt="wood" />
          <img className="w-[50%]h-full" src={imgWood4} alt="person" />
          <img
            className="w-[50%] h-full"
            src={imgWoodRock}
            alt="wood_done_Rock"
          />
          <img className="w-[50%] h-full" src={imgWood3} alt="wood" />
          <img className="w-[50%] h-full" src={imgWood2} alt="wood_done" />
          <img className="w-[50%] h-full" src={imgWood5} alt="wood" />
          <img className="w-[50%] h-full" src={imgWood6} alt="wood_done" />
        </div>
      </article>
    </section>
  );
}
