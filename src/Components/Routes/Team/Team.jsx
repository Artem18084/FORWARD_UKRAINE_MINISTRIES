// import React from "react";
// import PersonCArd from "./PersonCard/PersonCArd";
// import RoutUnderHeader from "../RoutUnderHeader";
// import teamBanner from "../../../images/Routes/Team/team.jpg"

// import imgArtem from "../../../images/Routes/Team/Artem.jpg";
// import imgAmalia from "../../../images/Routes/Team/Amalia.jpg";
// import imgYana from "../../../images/Routes/Team/Yana.JPG";
// import imgAngelina from "../../../images/Routes/Team/Angelina.JPG";
// import imgIgor from "../../../images/Routes/Team/Igor.jpg";
// import imgOleg from "../../../images/Routes/Team/Oleg.jpg";
// import imgEugene from "../../../images/Routes/Team/Eugene.jpg";

// export default function Team() {
//   const team = {
//     "Artem Kosharnyi": {
//       key: 1,
//       name: "Artem Kosharniy",
//       inst: "https://www.instagram.com/4rtemk0/",
//       facebook: "https://www.facebook.com/artem.kosharnyi/",
//       gmail: "mailto:artemkosharnyi@gmail.com",
//       telegram: "https://telegram.me/Artem18084",
//     },
//     "Amalia Vardanian": {
//       key: 2,
//       name: "Amalia Vardanian",
//       inst: "https://www.instagram.com/maliia_vard/",
//       facebook: "https://www.facebook.com/profile.php?id=100008442401006",
//       gmail: "amaliavardanan805@gmail.com",
//       telegram: "https://t.me/amaliiavard",
//     },

//     "Yana Kravchenko": {
//       key: 4,
//       name: "Yana Kravchenko",
//       inst: "https://instagram.com/kr_yankaaa",
//       facebook: "https://www.facebook.com/yana.kravchenko.562",
//       gmail: "mailto:ykravchenko94@gmail.com",
//       telegram: "https://t.me/kr_yankaaa",
//     },

//     "Iliya Rochev": {
//       key: 7,
//       name: "Ilia Rochev",
//       inst: "https://www.instagram.com/ilia_rochev/",
//       facebook: "",
//       gmail: "",
//       telegram: "https://t.me/IL_204",
//     },

//     "Angelina Vardanian": {
//       key: 9,
//       name: "Angelina Vardanian",
//       inst: "https://www.instagram.com/e.n.j_v.a.r.d_/",
//       facebook: "https://www.facebook.com/anhelina.vardanian",
//       gmail: "",
//       telegram: "https://t.me/enj_vard",
//     },

//     "Yevgeniy Ustenko": {
//       key: 12,
//       name: "Yevgeniy Ustenko",
//       inst: "https://www.instagram.com/zhenyaust/",
//       facebook: "https://www.facebook.com/eugene.ustenko",
//       gmail: "",
//       telegram: "",
//     },
//     "Oleg Rudenko": {
//       key: 13,
//       name: "Oleg Rudenko",
//       inst: "https://www.instagram.com/oleg.rudenko3/",
//       facebook: "",
//       gmail: "",
//       telegram: "https://t.me/Oleg_r1",
//     },
//     "Igor Cherevichniy": {
//       key: 14,
//       name: "Igor Cherevichniy",
//       inst: "https://www.instagram.com/igorcerevicnij/",
//       facebook: "",
//       gmail: "",
//       telegram: "",
//     },
//   };
//   return (
//     <main className="  relative">
//       <RoutUnderHeader title="we are the team " banner={teamBanner} />

//       <section className="   flex flex-col items-center justify-center self-stretch px-4 py-8 gap-[60px]">
//         <div className=" w-full flex flex-row justify-center  flex-wrap gap-6">

//         <PersonCArd
//           src={imgEugene}
//           alt="Yevgeniy"
//           key={team["Yevgeniy Ustenko"].key}
//           name={team["Yevgeniy Ustenko"].name}
//           instagram={team["Yevgeniy Ustenko"].inst}
//           facebook={team["Yevgeniy Ustenko"].facebook}
//           gmail={team["Yevgeniy Ustenko"].gmail}
//           telegram={team["Yevgeniy Ustenko"].telegram}
//         />

//         <PersonCArd
//           src={imgYana}
//           alt="Yana"
//           key={team["Yana Kravchenko"].key}
//           name={team["Yana Kravchenko"].name}
//           instagram={team["Yana Kravchenko"].inst}
//           facebook={team["Yana Kravchenko"].facebook}
//           gmail={team["Yana Kravchenko"].gmail}
//           telegram={team["Yana Kravchenko"].telegram}
//         />

//         <PersonCArd
//           src={imgOleg}
//           alt="Oleg"
//           key={team["Oleg Rudenko"].key}
//           name={team["Oleg Rudenko"].name}
//           instagram={team["Oleg Rudenko"].inst}
//           facebook={team["Oleg Rudenko"].facebook}
//           gmail={team["Oleg Rudenko"].gmail}
//           telegram={team["Oleg Rudenko"].telegram}
//         />

//         <PersonCArd
//           src={imgAmalia}
//           alt="Amalia"
//           key={team["Amalia Vardanian"].key}
//           name={team["Amalia Vardanian"].name}
//           instagram={team["Amalia Vardanian"].inst}
//           facebook={team["Amalia Vardanian"].facebook}
//           gmail={team["Amalia Vardanian"].gmail}
//           telegram={team["Amalia Vardanian"].telegram}
//         />
//         <PersonCArd
//           src={imgArtem}
//           alt="Artem"
//           key={team["Artem Kosharnyi"].key}
//           name={team["Artem Kosharnyi"].name}
//           instagram={team["Artem Kosharnyi"].inst}
//           facebook={team["Artem Kosharnyi"].facebook}
//           gmail={team["Artem Kosharnyi"].gmail}
//           telegram={team["Artem Kosharnyi"].telegram}
//         />
//         <PersonCArd
//           src={imgAngelina}
//           alt="Anjelina"
//           key={team["Angelina Vardanian"].key}
//           name={team["Angelina Vardanian"].name}
//           instagram={team["Angelina Vardanian"].inst}
//           facebook={team["Angelina Vardanian"].facebook}
//           gmail={team["Angelina Vardanian"].gmail}
//           telegram={team["Angelina Vardanian"].telegram}
//         />

//         <PersonCArd
//           src={imgIgor}
//           alt="Iliya"
//           key={team["Igor Cherevichniy"].key}
//           name={team["Igor Cherevichniy"].name}
//           instagram={team["Igor Cherevichniy"].inst}
//           facebook={team["Igor Cherevichniy"].facebook}
//           gmail={team["Igor Cherevichniy"].gmail}
//           telegram={team["Igor Cherevichniy"].telegram}
//         />
//                 </div>

//       </section>
//     </main>
//   );
// }

import React from "react";
import PersonCard from "./PersonCard/PersonCard";
import RoutUnderHeader from "../RoutUnderHeader";
import teamBanner from "../../../images/Routes/Team/team.jpg";

import imgArtem from "../../../images/Routes/Team/Artem.jpg";
import imgAmalia from "../../../images/Routes/Team/Amalia.jpg";
import imgYana from "../../../images/Routes/Team/Yana.JPG";
import imgAngelina from "../../../images/Routes/Team/Angelina.JPG";
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
