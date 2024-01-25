import React from "react";
import AreaOfWorkCard from "./AreaOfWorkCard/AreaOfWorkCard";
import Title from "../SubTitle/SubTitle";
import volunteerMobImg from "../../../images/main/areaOfWork/volunteerMob.png";
import churchMinistriesMobImg from "../../../images/main/areaOfWork/churchMinistriesMobile.png";

export default function AreaOfWork() {
  const contentData = [
    {
      title: "war",
      text: "Military needs, assistance to the military, assistance to civilians, immigrants, evacuation 200",
      img: volunteerMobImg,
    },
    {
      title: "church ministries",
      text: "Helping the needy, Serving youth and children, active position in the village (camps, holidays)",
      img: churchMinistriesMobImg,
    },
    {
      title: "youth development",
      text: "Workshops, seminars, business development assistance",
      img: volunteerMobImg,
    },
  ];

  return (
    <article className="flex flex-col gap-8 py-12 px-4 bg-white">
      <section className=" flex flex-col  items-center gap-2">
        <Title title="Areas of work" color="black" />
        <div className="w-[103.5px] h-[1px] bg-[#4177ec]"></div>
      </section>
      <ul className="flex flex-col gap-6 self-stretch">
        {contentData.map((data, index) => (
          <AreaOfWorkCard
            key={index}
            alt="volunteer"
            imgMob={volunteerMobImg}
            contentData={data}
          />
        ))}
      </ul>
    </article>
  );
}
