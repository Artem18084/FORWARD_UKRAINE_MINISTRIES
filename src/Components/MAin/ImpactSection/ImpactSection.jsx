import React, { useState, useEffect } from "react";
import ImpactItem from "./ImpactItem/ImpactItem";
import vanMobile from "../../../images/Impact/vanMobile.svg";
import peopleMobile from "../../../images/Impact/peopleMobile.svg";
import historyMobile from "../../../images/Impact/historyMobile.svg";

export default function ImpactSection() {
  const [humanitarianValue, setHumanitarianValue] = useState("");
  const [peopleReachedValue, setPeopleReachedValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bible-gym.pp.ua/api/v1/injection/values"
        );
        const data = await response.json();
        setHumanitarianValue(+data.humanitarianValue);
        setPeopleReachedValue(+data.peopleReachedValue);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    const updateServerData = async () => {
      try {
        await fetch("https://bible-gym.pp.ua/api/v1/injection/values", {
          method: "PUT",
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
    <div className="flex items-center justify-center">

    <section className=" w-full flex flex-col items-start  md:items-center justify-center md:justify-between gap-6   pt-12 md:pt-[72px] lg:pt-24 pb-0 px-4 md:px-9 lg:px-11 xl:px-[72px] max-w-[1440px]">
      <ul className="w-full flex flex-col md:flex-row  items-start justify-between gap-10  flex-shrink-0 flex-basis-0">
        <ImpactItem
          title={humanitarianValue + " +"}
          src={vanMobile}
          alt="van"
          text="Humanitarian trip"
        />
        <ImpactItem
          title="21 April 2022"
          src={historyMobile}
          alt="active since"
          text="Active Since"
        />
        <ImpactItem
          title={peopleReachedValue + " +"}
          src={peopleMobile}
          alt="people"
          text="People Reached"
        />
      </ul>
    </section>
    </div>
  );
}
