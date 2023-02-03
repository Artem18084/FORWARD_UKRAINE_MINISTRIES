import React from "react";
import Title from "../Title/Title";
import imgVan from "../../../images/Impact/van.png";
import imgClock from "../../../images/Impact/clock.png";
import imgPeople from "../../../images/Impact/people.png";
import ImpactItem from "./ImpactItem/ImpactItem";

export default function ImpactSection() {
  return (
    <section className="flex flex-col items-center bg-[#010321] text-white py-4 sm:py-6 md:py-10 lg:py-14 xl:py-20">
      <Title title="Our impact" />

      <div className="flex w-full h-[25vw] items-center justify-around">
        <ImpactItem title="Humanitarian trip" img={imgVan} subTitle="60+" />
        <ImpactItem
          title="Active Since"
          subTitle="21 April 2022"
          img={imgClock}
        />
        <ImpactItem title="People reached" subTitle="1500+" img={imgPeople} />
      </div>
    </section>
  );
}
