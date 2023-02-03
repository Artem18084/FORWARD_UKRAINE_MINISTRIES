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
        className="absolute top-0  right-0 z-0 w-full hidden md:block"
      />
      {/* <img
        // src={sunsetTablet}
        alt="mainImg"
        className="absolute top-0  right-0 z-0  w-full md:hidden"
      /> */}
      <img
        src={imgHandsPhone}
        alt="mainImg"
        className="absolute top-0  right-0 z-0  w-full md:hidden h-[100vh]"
      />
       <h1 className=" md:hidden absolute text-white top-[45vh] right-[50%] translate-x-[50%] z-10 xl:text-9xl lg:text-4xl  text-2xl   font-semibold md:font-normal uppercase pt-10">
            Who we are{" "}
          </h1>
      <div className="hidden md:block relative w-full   ">
        <div className=" z-10 flex flex-col items-center text-white md:pt-[10rem]">
          <h1 className=" xl:text-6xl lg:text-4xl md:text-2xl text-xl   font-semibold md:font-normal uppercase pt-10">
            Who we are{" "}
          </h1>
        </div>
      </div>
      {/* <section className=" w-full items-center  justify-around flex flex-row max-[768px]:flex-col ">
        <article className="flex flex-col items-center ">
          <h2 className="text-2xl max-[1024px]:text-sm">Founder of the fund</h2>
          <h1 className="text-5xl max-[1024px]:text-lg py-5 max-[1024px]:py-1">
            Yevgeniy Ustenko
          </h1>
        </article>

        <img
          className=" w-[30vw] max-[768px]:w-[50vw] h-full rounded-2xl hover:scale-110 duration-1000"
          src={imgFounder}
          alt="founder"
        />
      </section> */}
      <section className="md:flex items-center justify-center mt-[105vh] md:mt-72">
        <article className="md:w-[50vw] flex  items-center md:items-start flex-col pl-16 max-[768px]:px-6 pb-10 md:pb-20 text-sm md:text-base  ">
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
        <div className=" flex items-center justify-center md:w-[45vw] mb-5 md:mb-0  ">
          <img
            src={igmGroupLeft}
            alt="people "
            className=" md:w-[6vw] md:h-[40vh]  w-[9vw] h-[25vh] rounded-l-xl "
          />
          <img
            src={imgMen}
            alt="men"
            className="  md:w-[27vw] md:h-[55vh] h-[30vh] rounded-xl "
          />
          <img
            src={imgPeopleRight}
            alt="group  "
            className=" md:w-[6vw] md:h-[40vh] w-[9vw] h-[25vh] rounded-r-xl"
          />
        </div>
      </section>
    </main>
  );
}
