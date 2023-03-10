import React from "react";
import MyButton from "../../UI/Button/MyButton";
import sunsetDesk from "../../../images/mainImageDesk.png";
import sunsetTablet from "../../../images/sunsetTablet.png";
import sunsetPhone from "../../../images/sunsetPhone2.png";

export default function MapSection() {
  return (
    <section className="flex  justify-center items-center  w-full h-screen bg-cover bg-no-repeat  relative  ">
      <img
        src={sunsetDesk}
        alt="mainImg"
        className="absolute top-0  right-0 z-0 h-screen w-full hidden xl:block"
      />
      <img
        src={sunsetTablet}
        alt="mainImg"
        className="absolute top-0  right-0 z-0 h-screen w-full xl:hidden"
      />
      <img
        src={sunsetPhone}
        alt="mainImg"
        className="absolute top-0  right-0 z-0 h-screen w-full sm:hidden"
      />
      <div className=" z-10 flex flex-col items-center text-white xl:pt-[10rem]  md:pt-[10rem] pt-[10rem]">
        <p className="mb-[.3rem] md:mb-[1rem] text-[10px] leading-[10px] md:text-sm  lg:text-base xl:text-xl">
          Ukraine needs your support
        </p>
        <h1 className=" xl:text-6xl lg:text-4xl md:text-2xl text-xl   font-semibold md:font-normal uppercase mb-[.5rem] md:mb-[1.5rem]">
          forward ukraine ministries
        </h1>
        <p className="w-[50%] text-center   xl:mb-[5.5rem]  text-[10px] leading-[10px] md:text-sm  lg:text-base  xl:text-xl ">
          Ukraine needs your support now more than ever, you and I can not be
          indifferent and only in vain can we help all these people survive
          these really difficult times in the history of Ukraine that
          unfortunately happened to them
        </p>
        <MyButton
          mt="md:mt-[30rem]"
          mtPhone="mt-[20rem]"
          mapClasses="hover:shadow-hov bg-yellow-100 text-yellow-600  hover:bg-yellow-600 "
        />
      </div>
    </section>
  );
}
