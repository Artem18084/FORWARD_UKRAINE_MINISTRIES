import React from "react";
import AreaOfWorkCard from "./AreaOfWorkCard/AreaOfWorkCard";
import Title from "../SubTitle/SubTitle";
import volunteerSM from "../../../images/main/areaOfWork/volunteerSM.png";
import churchMinistriesSM from "../../../images/main/areaOfWork/churchMinistriesSM.png";
import youthSM from "../../../images/main/areaOfWork/youthSM.png";

import volunteerMD from "../../../images/main/areaOfWork/volunteerMD.png";
import churchMinistriesMD from "../../../images/main/areaOfWork/churchMinistriesMD.png";
import youthMD from "../../../images/main/areaOfWork/youthMD.png";

import volunteerLG from "../../../images/main/areaOfWork/volunteerLG.png";
import churchMinistriesLG from "../../../images/main/areaOfWork/churchMinistriesLG.png";
import youthLG from "../../../images/main/areaOfWork/youthLG.png";

import volunteerXL from "../../../images/main/areaOfWork/volunteerXL.png";
import churchMinistriesXL from "../../../images/main/areaOfWork/churchMinistriesXL.png";
import youthXL from "../../../images/main/areaOfWork/youthXL.png";

export default function AreaOfWork() {
  // Визначення зображення в залежності від розміру екрану
  const screenWidth = window.innerWidth;
  let volunteerImg, churchMinistriesImg, youthImg;

  if (screenWidth <= 768) {
    volunteerImg = volunteerSM;
    churchMinistriesImg = churchMinistriesSM;
    youthImg = youthSM;
  } else if (screenWidth <= 1024) {
    volunteerImg = volunteerMD;
    churchMinistriesImg = churchMinistriesMD;
    youthImg = youthMD;
  } else if (screenWidth <= 1440) {
    volunteerImg = volunteerLG;
    churchMinistriesImg = churchMinistriesLG;
    youthImg = youthLG;
  } else {
    volunteerImg = volunteerXL;
    churchMinistriesImg = churchMinistriesXL;
    youthImg = youthXL;
  }

  const contentData = [
    {
      title: "war",
      text: "Military needs, assistance to the military, assistance to civilians, immigrants, evacuation 200",
      img: volunteerImg,
      alt: "volunteer",
    },
    {
      title: "church ministries",
      text: "Helping the needy, Serving youth and children, active position in the village (camps, holidays)",
      img: churchMinistriesImg,
      alt: "church",
    },
    {
      title: "youth development",
      text: "Workshops, seminars, business development assistance",
      img: youthImg,
      alt: "youth",
    },
  ];

  return (
    <div className="flex items-center justify-center">
     
    <article className="flex flex-col  gap-8 md:gap-12 lg:gap-[60px]  py-12 md:py-[72px] lg:py-24 px-4 md:px-9 lg:px-11 xl:px-[72px] bg-white max-w-[1440px]">
      <section className="flex flex-col items-center gap-2">
        <Title title="Areas of work" color="black" />
        <div className="w-[103.5px] h-[1px] bg-[#4177ec]"></div>
      </section>
      <ul className="flex flex-col md:flex-row gap-6">
        {contentData.map((data, index) => (
          <AreaOfWorkCard
            key={index}
            alt={data.alt}
            contentData={data}
          />
        ))}
      </ul>
    </article>
    </div>
  );
}
