import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import imgVan from "../../../images/Impact/van.png";
import imgClock from "../../../images/Impact/clock.png";
import imgPeople from "../../../images/Impact/people.png";
import ImpactItem from "./ImpactItem/ImpactItem";

export default function ImpactSection() {
  const [humanitarianValue, setHumanitarianValue] = useState(0);
  const [peopleReachedValue, setPeopleReachedValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/values");
        const data = await response.json();
        setHumanitarianValue(data.humanitarianValue);
        setPeopleReachedValue(data.peopleReachedValue);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    const updateServerData = async () => {
      try {
        await fetch("http://localhost:3002/updateValues", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newHumanitarianValue: humanitarianValue + 1,
            newPeopleReachedValue: peopleReachedValue + 25,
          }),
        });
      } catch (error) {
        console.error("Error updating data on server", error);
      }
    };

    fetchData();

    const interval = setInterval(async () => {
      await updateServerData();
      fetchData();
    }, 604800000);

    return () => clearInterval(interval);
  }, [humanitarianValue, peopleReachedValue]);

  return (
    <section className="flex flex-col items-center bg-[#000E30] text-white py-4 sm:py-6 md:py-10 lg:py-14 xl:py-20">
      <Title title="Our impact" />

      <div className="flex w-full h-[25vw] items-center justify-around">
        <ImpactItem
          title="Humanitarian trip"
          img={imgVan}
          subTitle={humanitarianValue + " +"}
        />
        <ImpactItem
          title="Active Since"
          subTitle="21 April 2022"
          img={imgClock}
        />
        <ImpactItem
          title="People reached"
          img={imgPeople}
          subTitle={peopleReachedValue + " +"}
        />
      </div>
    </section>
  );
}
