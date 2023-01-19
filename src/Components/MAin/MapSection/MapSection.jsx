import React from "react";
import MyButton from "../../UI/Button/MyButton";
import sunsetDesk from "../../../images/sunsetDesk.png";
import sunsetTablet from "../../../images/sunsetTablet.png";
import sunsetPhone from "../../../images/sunsetPhone.png";

export default function MapSection() {
  return (
    <section className="flex  justify-center items-center  w-full h-screen bg-cover bg-no-repeat  relative  ">
      <img
        src={sunsetDesk}
        alt="mainImg"
        className="absolute top-0  right-0 z-0 h-screen w-full"
      />
      <img
        src={sunsetTablet}
        alt="mainImg"
        className="absolute top-0  right-0 z-0 h-screen w-full md:hidden"
      />
      <img
        src={sunsetPhone}
        alt="mainImg"
        className="absolute top-0  right-0 z-0 h-screen w-full sm:hidden"
      />

      <h1 className=" xl:text-6xl lg:text-4xl md:text-2xl text-xl  font-semibold md:font-normal uppercase z-10 ">
        forward ukraine ministries
      </h1>
      <MyButton mapClasses="hover:shadow-hov bg-yellow-100 text-yellow-600  hover:bg-yellow-600 absolute right-[50%] bottom-[50px] translate-x-[50%]" />
    </section>
  );
}
