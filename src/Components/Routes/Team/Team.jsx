

import React from "react";
import PersonCard from "./PersonCard/PersonCard";
import RoutUnderHeader from "../RoutUnderHeader";
import teamBanner from "../../../images/Routes/Team/team.jpg";

import imgArtem from "../../../images/Routes/Team/Artem.jpg";
import imgAmalia from "../../../images/Routes/Team/Amalia.jpg";
import imgYana from "../../../images/Routes/Team/Yana.JPG";
import imgAngelina from "../../../images/Routes/Team/Angelina.jpg";
import imgIgor from "../../../images/Routes/Team/Igor.jpg";
import imgOleg from "../../../images/Routes/Team/Oleg.jpg";
import imgEugene from "../../../images/Routes/Team/Eugene.jpg";

export default function Team() {
  const team = [
    {
      key: 1,
      name: "Yevgeniy Ustenko",
      inst: "https://www.instagram.com/zhenyaust/",
      facebook: "https://www.facebook.com/eugene.ustenko",
      gmail: "",
      telegram: "",
      src: imgEugene,
    },
    {
      key: 2,
      name: "Yana Kravchenko",
      inst: "https://instagram.com/kr_yankaaa",
      facebook: "https://www.facebook.com/yana.kravchenko.562",
      gmail: "mailto:ykravchenko94@gmail.com",
      telegram: "https://t.me/kr_yankaaa",
      src: imgYana,
    },
    {
      key: 3,
      name: "Oleg Rudenko",
      inst: "https://www.instagram.com/oleg.rudenko3/",
      facebook: "",
      gmail: "",
      telegram: "https://t.me/Oleg_r1",
      src: imgOleg,
    },

    {
      key: 4,
      name: "Amalia Vardanian",
      inst: "https://www.instagram.com/maliia_vard/",
      facebook: "https://www.facebook.com/profile.php?id=100008442401006",
      gmail: "amaliavardanan805@gmail.com",
      telegram: "https://t.me/amaliiavard",
      src: imgAmalia,
    },

    {
      key: 5,
      name: "Artem Kosharniy",
      inst: "https://www.instagram.com/4rtemk0/",
      facebook: "https://www.facebook.com/artem.kosharnyi/",
      gmail: "mailto:artemkosharnyi@gmail.com",
      telegram: "https://telegram.me/Artem18084",
      src: imgArtem,
    },

    {
      key: 6,
      name: "Angelina Vardanian",
      inst: "https://www.instagram.com/e.n.j_v.a.r.d_/",
      facebook: "https://www.facebook.com/anhelina.vardanian",
      gmail: "",
      telegram: "https://t.me/enj_vard",
      src: imgAngelina,
    },

    {
      key: 8,
      name: "Igor Cherevichniy",
      inst: "https://www.instagram.com/igorcerevicnij/",
      facebook: "",
      gmail: "",
      telegram: "",
      src: imgIgor,
    },
  ];

  return (
    <main className="flex flex-col">
      <RoutUnderHeader title="we are the team" banner={teamBanner} />

      <section className="flex flex-col items-center justify-center self-stretch px-4 sm:px-11 l:px-[72px] py-[48px] sm:py-[72px] md:py-[96px] gap-[60px]">
        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 l:gap-12 ">
          {team.map((member) => (
            <PersonCard
              key={member.key}
              src={member.src}
              alt={member.name}
              name={member.name}
              instagram={member.inst}
              facebook={member.facebook}
              gmail={member.gmail}
              telegram={member.telegram}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
