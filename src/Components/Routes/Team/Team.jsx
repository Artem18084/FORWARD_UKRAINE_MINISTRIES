import React from "react";
import PersonCArd from "./PersonCard/PersonCArd";
import imgArtem from "../../../images/Team/Artem.jpg";
import imgAmalia from "../../../images/Team/Amalia.jpg";
import imgAndrii from "../../../images/Team/Andrii.jpg";
import imgYana from "../../../images/Team/Yana.JPG";
import imgVadim from "../../../images/Team/Vadim.jpg";
import imgJulia from "../../../images/Team/Julia.jpg";
import imgIllya from "../../../images/Team/Iliya.jpg";
import imgVika from "../../../images/Team/Vika.jpg";
import imgAngelina from "../../../images/Team/Angelina.JPG";
import imgAlyona from "../../../images/Team/Alyona.JPG";
import imgRuslana from "../../../images/Team/Ruslana.jpg";
import imgIgor from "../../../images/Team/Igor.jpg";
import imgOleg from "../../../images/Team/Oleg.jpg";

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
    "Andrii Yablonskii": {
      key: 3,
      name: "Andrii Yablonskii",
      inst: "https://instagram.com/yablonskii.a?igshid=MDM4ZDc5MmU=",
      facebook:
        "https://www.facebook.com/friends/requests/?profile_id=100046212093353",
      gmail: "",
      telegram: "https://t.me/yablonskii",
    },
    "Yana Kravchenko": {
      key: 4,
      name: "Yana Kravchenko",
      inst: "https://instagram.com/kr_yankaaa",
      facebook: "https://www.facebook.com/yana.kravchenko.562",
      gmail: "mailto:ykravchenko94@gmail.com",
      telegram: "https://t.me/kr_yankaaa",
    },
    "Vadim Kravchenko": {
      key: 5,
      name: "Vadim Kravchenko",
      inst: "https://instagram.com/vadim_k.r",
      facebook: "https://www.facebook.com/profile.php?id=100009597649534",
      gmail: "mailto:vadimkravchenko179@gmail.com",
      telegram: "https://t.me/vadim_kravchenk0",
    },
    "Julia Badya": {
      key: 6,
      name: "Julia Badya",
      inst: "https://www.instagram.com/julia.badya351",
      facebook: "https://www.facebook.com/profile.php?id=100013677225309",
      gmail: "juliabadya351@gmail.com",
      telegram: "https://t.me/juliabadya",
    },
    "Iliya Rochev": {
      key: 7,
      name: "Ilia Rochev",
      inst: "https://www.instagram.com/ilia_rochev/",
      facebook: "",
      gmail: "",
      telegram: "https://t.me/IL_204",
    },
    "Vika Lemberg": {
      key: 8,
      name: "Vika Lemberg",
      inst: "https://instagram.com/_fortsessou?igshid=N2ZiY2E3YmU=",
      facebook: "https://www.facebook.com/profile.php?id=100048788085684",
      gmail: "",
      telegram: "https://t.me/fortsessou",
    },
    "Angelina Vardanian": {
      key: 9,
      name: "Angelina Vardanian",
      inst: "https://www.instagram.com/e.n.j_v.a.r.d_/",
      facebook: "https://www.facebook.com/anhelina.vardanian",
      gmail: "",
      telegram: "https://t.me/enj_vard",
    },
    "Alyona Snigur": {
      key: 10,
      name: "Alyona Snigur",
      inst: "https://www.instagram.com/alyonkaa_s",
      facebook: "",
      gmail: "",
      telegram: "https://telegram.me/alyonkaaa_s",
    },
    "Ruslana Lagno": {
      key: 11,
      name: "Ruslana Lagno",
      inst: "https://instagram.com/lagnoruslana",
      facebook: "https://www.facebook.com/profile.php?id=100037441245962",
      gmail: "",
      telegram: "https://telegram.me/lagnoruslana",
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
    <main className="flex flex-col items-center justify-center py-[8rem] max-[1024px]:py-[6rem]   max-[768px]:py-[4rem]  px-[5vw] w-full h-full bg-[#1b1d33] ">
      <h2 className=" text-4xl max-[1024px]:text-2xl max-[768px]:text-xl text-white">
        Our Team
      </h2>
      <section className="  flex flex-wrap   w-full [&>*]:mr-[5%]  max-[768px]:[&>*]:mr-[3.3333333333333333333333333333333%] [&>*]:mb-[5%] max-[768px]:[&>*]:mb-[3.3333333333333333333333333333333%] pt-[5%] max-[768px]:[&>*]:pt-[3.3333333333333333333333333333333%] pl-[5%] max-[768px]:[&>*]:pl-[3.3333333333333333333333333333333%]">
      <PersonCArd
          src=""
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
          alt="Me"
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
          src={imgAndrii}
          alt="Andrii"
          key={team["Andrii Yablonskii"].key}
          name={team["Andrii Yablonskii"].name}
          instagram={team["Andrii Yablonskii"].inst}
          facebook={team["Andrii Yablonskii"].facebook}
          gmail={team["Andrii Yablonskii"].gmail}
          telegram={team["Andrii Yablonskii"].telegram}
        />
        <PersonCArd
          src={imgAlyona}
          alt="Alyona"
          key={team["Alyona Snigur"].key}
          name={team["Alyona Snigur"].name}
          instagram={team["Alyona Snigur"].inst}
          facebook={team["Alyona Snigur"].facebook}
          gmail={team["Alyona Snigur"].gmail}
          telegram={team["Alyona Snigur"].telegram}
        />
        <PersonCArd
          src={imgVadim}
          alt="Vadim"
          key={team["Vadim Kravchenko"].key}
          name={team["Vadim Kravchenko"].name}
          instagram={team["Vadim Kravchenko"].inst}
          facebook={team["Vadim Kravchenko"].facebook}
          gmail={team["Vadim Kravchenko"].gmail}
          telegram={team["Vadim Kravchenko"].telegram}
        />
        <PersonCArd
          src={imgJulia}
          alt="Julia"
          key={team["Julia Badya"].key}
          name={team["Julia Badya"].name}
          instagram={team["Julia Badya"].inst}
          facebook={team["Julia Badya"].facebook}
          gmail={team["Julia Badya"].gmail}
          telegram={team["Julia Badya"].telegram}
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
        <PersonCArd
          src={imgVika}
          alt="Vika"
          key={team["Vika Lemberg"].key}
          name={team["Vika Lemberg"].name}
          instagram={team["Vika Lemberg"].inst}
          facebook={team["Vika Lemberg"].facebook}
          gmail={team["Vika Lemberg"].gmail}
          telegram={team["Vika Lemberg"].telegram}
        />

        <PersonCArd
          src={imgRuslana}
          alt="Ruslana"
          key={team["Ruslana Lagno"].key}
          name={team["Ruslana Lagno"].name}
          instagram={team["Ruslana Lagno"].inst}
          facebook={team["Ruslana Lagno"].facebook}
          gmail={team["Ruslana Lagno"].gmail}
          telegram={team["Ruslana Lagno"].telegram}
        />
         <PersonCArd
          src={imgIllya}
          alt="Iliya"
          key={team["Iliya Rochev"].key}
          name={team["Iliya Rochev"].name}
          instagram={team["Iliya Rochev"].inst}
          facebook={team["Iliya Rochev"].facebook}
          gmail={team["Iliya Rochev"].gmail}
          telegram={team["Iliya Rochev"].telegram}
        />
      </section>
    </main>
  );
}
