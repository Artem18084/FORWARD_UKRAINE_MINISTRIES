import React from "react";
import MyButton from "../../UI/Button/MyButton";


export default function MapSection(props) {
  return (
    <section className="flex  justify-center items-center lg:bg-sunsetDesk md:bg-sunsetTablet bg-sunsetPhone w-full h-screen bg-cover bg-no-repeat  relative  ">
      
        <h1 className=" xl:text-6xl lg:text-4xl md:text-2xl text-xl  font-semibold md:font-normal uppercase  ">
          forward ukraine ministries
        </h1>
        <MyButton  donateActive={props.donateActive} mapClasses="hover:shadow-hov bg-yellow-100 text-yellow-600  hover:bg-yellow-600 absolute right-[50%] bottom-[50px] translate-x-[50%]"/>
    </section>
  );
}
