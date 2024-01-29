import React from "react";
import PersonPhoto from "./PersonalData/PersonPhoto/PersonPhoto";

import PersonalData from "./PersonalData/PersonalData";

export default function PersonCard(props) {
  return (
    <section className="  flex flex-col items-center  self-stretch  hover:scale-110 duration-500 ">
      <PersonPhoto src={props.src} alt={props.alt}/>
      <PersonalData name={props.name}/>
    </section>
  );
}