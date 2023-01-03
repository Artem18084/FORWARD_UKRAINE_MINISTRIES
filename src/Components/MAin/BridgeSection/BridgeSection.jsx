import React from "react";
import MyButton from "../../UI/Button/MyButton";
import Title from "../Title/Title";

export default function BridgeSection(props) {
  return (
    <section className="flex bg-bridgePhone md:bg-bridgeTablet lg:bg-bridgeDesk  bg-cover bg-no-repeat w-full h-screen  ">
      <article className="flex flex-col items-center justify-evenly text-white w-full">
        <Title title="Pray For Ukraine" />
        <p className=" text-sm sm:text-md md:text-lg lg:text-2xl xl:text-4xl px-10 sm:px-12 md:px-20 lg:px-32 xl:px-44">
          Your help is needed in Ukraine where there are already more than 2.9
          million people in need of assistance. There is great risk of
          additional suffering both within Ukraine and for those who may flee to
          neighboring countries for safety
        </p>
        <MyButton  donateActive={props.donateActive} bridgeClasses=" bg-gray-100  hover:bg-gray-500 text-gray-500  hover:shadow-hovBridge"/>
      </article>
    </section>
  );
}
