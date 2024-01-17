import React from "react";
// import MyButton from "../../UI/Button/MyButton";
import Title from "../Title/Title";
import bridgeDesk from "../../../images/UnderBridgeDesk1.png";
import bridgeTablet from "../../../images/UnderBridgeTablet.png";
import bridgePhone from "../../../images/UnderBridgePhone.png";

export default function BridgeSection() {
  return (
    <section className="flex w-full h-[70vh] xl:h-screen relative  ">
      <article className="flex flex-col items-center justify-evenly text-white w-full z-10">
        <Title title="Pray For Ukraine" />
        <p className=" w-[75vw] text-center text-[10px] leading-[10px] md:text-sm  lg:text-base  xl:text-xl px-10 sm:px-12 md:px-20 lg:px-32 xl:px-44">
          Your help is needed in Ukraine where there are already more than 2.9
          million people in need of assistance. There is great risk of
          additional suffering both within Ukraine and for those who may flee to
          neighboring countries for safety
        </p>
        {/* <MyButton
          mt="md:mt-[20rem]"
          mtPhone="mt-[10rem]"
          bridgeClasses=" bg-gray-100  hover:bg-gray-500 text-gray-500  hover:shadow-hovBridge"
        /> */}
      </article>

      <img
        src={bridgeDesk}
        alt="people under bridge"
        className=" w-full h-full absolute top-0 right-0 hidden xl:block "
      />
      <img
        src={bridgeTablet}
        alt="people under bridge"
        className=" w-full h-full absolute top-0 right-0  block xl:hidden"
      />
      <img
        src={bridgePhone}
        alt="people under bridge"
        className=" w-full h-full absolute top-0 right-0 block sm:hidden "
      />
    </section>
  );
}
