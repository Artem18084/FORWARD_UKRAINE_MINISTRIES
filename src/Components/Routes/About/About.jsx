import React from "react";

import imgHands from "../../../images/Needs/hands.png";
import imgHandsPhone from "../../../images/Needs/handsPhone.png";

import igmGroupLeft from "../../../images/Needs/leftSidePhoto.png";
import imgMen from "../../../images/Report/report26.JPG";
import imgPeopleRight from "../../../images/Needs/rightSidePhoto.png";

export default function About() {
  return (
    <main className="relative w-full  flex flex-col  items-center  text-black  item-center justify-center  bg-white ">
      <img
        src={imgHands}
        alt="mainImg"
        className="absolute top-0  right-0 z-0 w-full hidden   md:block"
      />

      <img
        src={imgHandsPhone}
        alt="mainImg"
        className="absolute top-0  right-0 z-0  w-full md:hidden h-[100vh]"
      />
      <h1 className=" md:hidden absolute text-white top-[45vh] right-[50%] translate-x-[50%] z-10 xl:text-9xl lg:text-4xl  text-2xl   font-semibold md:font-normal uppercase pt-10">
        Who we are{" "}
      </h1>

      <div className=" z-10  hidden md:flex relative w-full   flex-col items-center text-white md:pt-[5rem] lg:pt-[10rem]  ">
        <h1 className=" xl:text-6xl lg:text-4xl md:text-2xl text-xl   font-semibold md:font-normal uppercase pt-10">
          Who we are{" "}
        </h1>
      </div>

      <section className="xl:flex items-center justify-center mt-[105vh]  md:mt-[11vh]  lg:mt-[20vh] xl:mt-[25vh] 2xl:mt-[40vh]  pt-30 w-full">
        <article className="xl:w-[50vw] flex  items-center xl:items-start flex-col pl-16  md:px-8 max-[768px]:px-6 pb-10 xl:pb-20 text-sm xl:text-base  ">
          <h2 className="text-xl md:text-3xl font-semibold mb-5">About us</h2>
          <p className="mb-5 font-bold ">
            Who are we? "Forward, Ukraine" Ministries is a 501(c)3 non-profit
            organization that supports Ukrainians in need. We want to take
            Ukraine forward in small steps. A small victory in someone's life is
            a victory for the great Ukraine.
          </p>

          <p className="mb-5 ">
            {" "}
            We want to help Ukrainians to live better, get out of poverty, get
            an education and get a chance to improve their lives. We try to help
            people who suffer daily from military aggression, for whom every day
            can be the last, we have already made a large number of humanitarian
            trips to some of the hottest spots in Ukraine.
          </p>

          <p className="">
            {" "}
            Thanks to caring people, without whom we could not do this, we have
            been able to help thousands of people and we are helping now and
            encourage you to do the same, everyone can be useful where they are.
            At the very beginning of the war, we were involved in the evacuation
            of people to safe places, and we also try to help people who are
            left without heat due to the constant shelling of the enemy -
            firewood, and those who are unable. to process it, our team fully
            prepares it for use by these people. If you don't know how you can
            help Ukraine, then you've come to the right place!
          </p>
        </article>
        <div className=" flex items-center justify-center xl:w-[45vw] mb-5 md:mb-10 xl:mb-0  ">
          <img
            src={igmGroupLeft}
            alt="people "
            className=" xl:w-[6vw] xl:h-[40vh] md:h-[40vh] w-[10vw] h-[25vh] rounded-l-xl "
          />
          <img
            src={imgMen}
            alt="men"
            className="  xl:w-[25vw] md:h-[50vh] md:w-[60vw] xl:h-[55vh] w-[45vw] h-[30vh] rounded-xl "
          />
          <img
            src={imgPeopleRight}
            alt="group  "
            className=" xl:w-[6vw] md:h-[40vh] xl:h-[40vh] w-[10vw] h-[25vh] rounded-r-xl"
          />
        </div>
      </section>
    </main>
  );
}
