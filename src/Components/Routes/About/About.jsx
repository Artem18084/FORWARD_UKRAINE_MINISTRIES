import React from "react";

import imgHands from "../../../images/Needs/hands.png";
import imgHandsPhone from "../../../images/Needs/handsPhone.png";

import igmGroupLeft from "../../../images/Needs/leftSidePhoto.png";
import imgMen from "../../../images/Report/report26.JPG";
import imgPeopleRight from "../../../images/Needs/rightSidePhoto.png";

export default function About() {
  return (
    <main className="w-full  flex flex-col  items-center  text-black  item-center justify-center  bg-white ">
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
        className="absolute top-0  right-0 z-0  w-full md:hidden h-screen"
      />
      <div className="relative w-full   ">
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
      <section className="flex items-center justify-center mt-72">
        <article className="w-[50vw] flex  items-start flex-col pl-16 max-[768px]:pl-6 pb-20 text-base md:text-xl ">
          <h2 className="text-xl md:text-3xl font-semibold mb-5">About us</h2>
          <p className="mb-5 font-bold">
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
        <div className=" flex items-center justify-center w-[50vw]  ">
          <img
            src={igmGroupLeft}
            alt="people "
            className=" w-[6vw] h-[40vh] rounded-l-xl "
          />
          <img
            src={imgMen}
            alt="men"
            className="  w-[27vw] h-[55vh] rounded-xl "
          />
          <img
            src={imgPeopleRight}
            alt="group  "
            className="  w-[6vw] h-[40vh] rounded-r-xl"
          />
        </div>
      </section>
    </main>
  );
}
