import React from "react";
import prayBanner from "../../../images/pray/prayBanner.jpg";
import Title from "../SubTitle/SubTitle";
import DonateButton from "../../UI/DonateButton/DonateButton";
import { useSelector } from "react-redux";
export default function PraySection() {
  const currentTextData = useSelector((state) => state.language.textJson);
  const title = currentTextData.main.praySection.title;
  const text = currentTextData.main.praySection.text;

  return (
    <article
      className=" flex flex-col gap-11 md:gap-[60px] items-center px-4 md:px-9 lg:px-11 xl:px-[72px] py-12 md:py-[72px] lg:py-24  text-center text-[18px] font-normal leading-[27px ] tracking-normal "
      style={{ backgroundImage: `url(${prayBanner})` }}
    >
      <section className=" flex flex-col  items-center gap-2">
        <Title title={title} color="white" />
        <div className="max-w-[103.5px] w-full h-[1px] bg-myYellow "></div>
      </section>
      <p className="w-full lg:max-w-[789px] text-white ">{text}</p>
      <DonateButton />
    </article>
  );
}
