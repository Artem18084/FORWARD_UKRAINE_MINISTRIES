import React from "react";
import PersonCArd from "./PersonCard/PersonCArd";
import imgArtem from "../../../images/Team/Artem.jpg";
import imgAmalia from "../../../images/Team/Amalia.jpg";
import imgYana from "../../../images/Team/Yana.JPG";

import imgAngelina from "../../../images/Team/Angelina.JPG";

import imgIgor from "../../../images/Team/Igor.jpg";
import imgOleg from "../../../images/Team/Oleg.jpg";
import imgEugene from "../../../images/Team/Eugene.jpg";
import imgTeamMain from "../../../images/Team/TeamMAin.png";
import imgTeamMainPhone from "../../../images/Team/TeamMAinPhone.png";

export default function Team() {
  const team = {
    "Artem Kosharnyi": {
      key: 1,
      name: "Artem Kosharniy",
      inst: "https://www.instagram.com/4rtemk0/",
      facebook: "https://www.facebook.com/artem.kosharnyi/",
      gmail: "mailto:artemkosharnyi@gmail.com",
      telegram: "https://telegram.me/Artem18084",
    },
    "Amalia Vardanian": {
      key: 2,
      name: "Amalia Vardanian",
      inst: "https://www.instagram.com/maliia_vard/",
      facebook: "https://www.facebook.com/profile.php?id=100008442401006",
      gmail: "amaliavardanan805@gmail.com",
      telegram: "https://t.me/amaliiavard",
    },
    
    "Yana Kravchenko": {
      key: 4,
      name: "Yana Kravchenko",
      inst: "https://instagram.com/kr_yankaaa",
      facebook: "https://www.facebook.com/yana.kravchenko.562",
      gmail: "mailto:ykravchenko94@gmail.com",
      telegram: "https://t.me/kr_yankaaa",
    },
    
    "Iliya Rochev": {
      key: 7,
      name: "Ilia Rochev",
      inst: "https://www.instagram.com/ilia_rochev/",
      facebook: "",
      gmail: "",
      telegram: "https://t.me/IL_204",
    },
    
    "Angelina Vardanian": {
      key: 9,
      name: "Angelina Vardanian",
      inst: "https://www.instagram.com/e.n.j_v.a.r.d_/",
      facebook: "https://www.facebook.com/anhelina.vardanian",
      gmail: "",
      telegram: "https://t.me/enj_vard",
    },
   
   
    "Yevgeniy Ustenko": {
      key: 12,
      name: "Yevgeniy Ustenko",
      inst: "https://www.instagram.com/zhenyaust/",
      facebook: "https://www.facebook.com/eugene.ustenko",
      gmail: "",
      telegram: "",
    },
    "Oleg Rudenko": {
      key: 13,
      name: "Oleg Rudenko",
      inst: "https://www.instagram.com/oleg.rudenko3/",
      facebook: "",
      gmail: "",
      telegram: "https://t.me/Oleg_r1",
    },
    "Igor Cherevichniy": {
      key: 14,
      name: "Igor Cherevichniy",
      inst: "https://www.instagram.com/igorcerevicnij/",
      facebook: "",
      gmail: "",
      telegram: "",
    },
  };
  return (
    <main className="flex flex-col items-center justify-center  px-[5vw] w-full h-full bg-white  relative">
      <img
        src={imgTeamMain}
        alt="mainImg"
        className="absolute top-0  right-0 z-0 w-full hidden md:block"
      />
      <img
        src={imgTeamMainPhone}
        alt="mainImg"
        className="absolute top-0  right-0 z-0  w-full md:hidden h-[100vh]"
      />
      <h1 className=" md:hidden absolute text-white top-[45vh] right-[50%] translate-x-[50%] z-10 xl:text-9xl lg:text-4xl  text-2xl whitespace-nowrap	  font-semibold md:font-normal uppercase pt-10">
        We are the team{" "}
      </h1>
      <div className=" z-10  hidden md:flex relative w-full   flex-col items-center text-white md:pt-[5rem] lg:pt-[10rem]  ">
        <h1 className=" xl:text-6xl lg:text-4xl md:text-2xl text-xl   font-semibold md:font-normal uppercase pt-10">
          We are the team{" "}
        </h1>
      </div>
      <section className="  mt-[105vh]  md:mt-[20vw] lg:mt-[15vw] xl:mt-[20vw] 2xl:mt-[20vw]  5xl:mt-[23vw] flex flex-wrap   w-full [&>*]:mr-[5%]  max-[768px]:[&>*]:mr-[3.3333333333333333333333333333333%] [&>*]:mb-[5%] max-[768px]:[&>*]:mb-[3.3333333333333333333333333333333%]  max-[768px]:[&>*]:pt-[3.3333333333333333333333333333333%] pl-[5%] max-[768px]:[&>*]:pl-[3.3333333333333333333333333333333%]">
        <PersonCArd
          src={imgEugene}
          alt="Yevgeniy"
          key={team["Yevgeniy Ustenko"].key}
          name={team["Yevgeniy Ustenko"].name}
          instagram={team["Yevgeniy Ustenko"].inst}
          facebook={team["Yevgeniy Ustenko"].facebook}
          gmail={team["Yevgeniy Ustenko"].gmail}
          telegram={team["Yevgeniy Ustenko"].telegram}
        />

        <PersonCArd
          src={imgYana}
          alt="Yana"
          key={team["Yana Kravchenko"].key}
          name={team["Yana Kravchenko"].name}
          instagram={team["Yana Kravchenko"].inst}
          facebook={team["Yana Kravchenko"].facebook}
          gmail={team["Yana Kravchenko"].gmail}
          telegram={team["Yana Kravchenko"].telegram}
        />

        <PersonCArd
          src={imgOleg}
          alt="Oleg"
          key={team["Oleg Rudenko"].key}
          name={team["Oleg Rudenko"].name}
          instagram={team["Oleg Rudenko"].inst}
          facebook={team["Oleg Rudenko"].facebook}
          gmail={team["Oleg Rudenko"].gmail}
          telegram={team["Oleg Rudenko"].telegram}
        />

        <PersonCArd
          src={imgAmalia}
          alt="Amalia"
          key={team["Amalia Vardanian"].key}
          name={team["Amalia Vardanian"].name}
          instagram={team["Amalia Vardanian"].inst}
          facebook={team["Amalia Vardanian"].facebook}
          gmail={team["Amalia Vardanian"].gmail}
          telegram={team["Amalia Vardanian"].telegram}
        />
        <PersonCArd
          src={imgArtem}
          alt="Artem"
          key={team["Artem Kosharnyi"].key}
          name={team["Artem Kosharnyi"].name}
          instagram={team["Artem Kosharnyi"].inst}
          facebook={team["Artem Kosharnyi"].facebook}
          gmail={team["Artem Kosharnyi"].gmail}
          telegram={team["Artem Kosharnyi"].telegram}
        />
        <PersonCArd
          src={imgAngelina}
          alt="Anjelina"
          key={team["Angelina Vardanian"].key}
          name={team["Angelina Vardanian"].name}
          instagram={team["Angelina Vardanian"].inst}
          facebook={team["Angelina Vardanian"].facebook}
          gmail={team["Angelina Vardanian"].gmail}
          telegram={team["Angelina Vardanian"].telegram}
        />

        
        <PersonCArd
          src={imgIgor}
          alt="Iliya"
          key={team["Igor Cherevichniy"].key}
          name={team["Igor Cherevichniy"].name}
          instagram={team["Igor Cherevichniy"].inst}
          facebook={team["Igor Cherevichniy"].facebook}
          gmail={team["Igor Cherevichniy"].gmail}
          telegram={team["Igor Cherevichniy"].telegram}
        />
        
      </section>
    </main>
  );
}
