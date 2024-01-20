import React from "react";
import prayBanner from "../../../images/pray/prayBanner.jpg";
import Title from "../Title/Title";
import DonateButton from "../../UI/DonateButton/DonateButton";
export default function PraySection() {
  return (
    <article
      className=" flex flex-col gap-11 items-center px-4 py-12 font-inter text-center text-[18px] font-normal leading-[27px ] tracking-normal text-white"
      style={{ backgroundImage: `url(${prayBanner})` }}
    >
      <section className=" flex flex-col  items-center gap-2">
        <Title title="Pray for ukraine" color="white"/>
        <div className="max-w-[103.5px] w-full h-[1px] bg-myYellow "></div>
      </section>
      <p className="">
        Your help is needed in Ukraine where there are already more than 2.9
        million people in need of assistance. There is great risk of additional
        suffering both within Ukraine and for those who may flee to neighboring
        countries for safety
      </p>
      <DonateButton />
    </article>
  );
}
