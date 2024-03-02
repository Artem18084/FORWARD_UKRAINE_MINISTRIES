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
import { useSelector } from "react-redux";

export default function Team() {
  
  const currentTextData = useSelector((state) => state.language.textJson);
  const title = currentTextData.main.routes.team.title;
  const name = currentTextData.main.routes.team.name
  const team = [
    {
      key: 1,
      name: name[0],
      inst: "https://www.instagram.com/zhenyaust/",
      facebook: "https://www.facebook.com/eugene.ustenko",
      gmail: "",
      src: imgEugene,
    },
    {
      key: 2,
      name: name[1],
      inst: "https://instagram.com/kr_yankaaa",
      facebook: "https://www.facebook.com/yana.kravchenko.562",
      gmail: "mailto:ykravchenko94@gmail.com",
      src: imgYana,
    },
    {
      key: 3,
      name: name[2],
      inst: "https://www.instagram.com/oleg.rudenko3/",
      facebook: "",
      gmail: "",
      src: imgOleg,
    },

    {
      key: 4,
      name: name[3],
      inst: "https://www.instagram.com/maliia_vard/",
      facebook: "https://www.facebook.com/profile.php?id=100008442401006",
      gmail: "amaliavardanan805@gmail.com",
      src: imgAmalia,
    },

    {
      key: 5,
      name: name[4],
      inst: "https://www.instagram.com/4rtemk0/",
      facebook: "https://www.facebook.com/artem.kosharnyi/",
      gmail: "mailto:artemkosharnyi@gmail.com",
      src: imgArtem,
    },

    {
      key: 6,
      name: name[5],
      inst: "https://www.instagram.com/e.n.j_v.a.r.d_/",
      facebook: "https://www.facebook.com/anhelina.vardanian",
      gmail: "",
      src: imgAngelina,
    },

    {
      key: 7,
      name: name[6],
      inst: "https://www.instagram.com/igorcerevicnij/",
      facebook: "#",
      gmail: "",
      src: imgIgor,
    },
  ];


  return (
    <main className="flex flex-col">
      <RoutUnderHeader title={title} banner={teamBanner} />

      <section className="flex flex-col items-center justify-center self-stretch py-[48px] sm:py-[72px] md:py-[96px] gap-[60px]">
        <div className="w-full flex flex-wrap justify-center gap-[24px] md:gap-y-[60px] px-4 md:px-[44px] lg:px-[44px] xl:px-[72px]">
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
