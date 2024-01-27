import React from "react";
import Name from "./PersonalData/Name/Name";
import PersonPhoto from "./PersonalData/PersonPhoto/PersonPhoto";
import imgInst from "../../../../images/Team/TeamContacts/personInst.png";
import imgFAcebook from "../../../../images/Team/TeamContacts/personFacebook.png";
import imgG from "../../../../images/Team/TeamContacts/personG.png";
import imgTG from "../../../../images/Team/TeamContacts/personTG.png";
import PersonContact from "./RersonContact/PersonContact";
import PersonalData from "./PersonalData/PersonalData";

export default function PersonCArd(props) {
  return (
    <section className=" w-[343px]  flex flex-col items-center   self-stretch  hover:scale-110 duration-500  rounded-[12px]">
      <PersonPhoto src={props.src} alt={props.alt} />
      <PersonalData name={props.name} />
    </section>
  );
}

{
  /* <PersonPhoto src={props.src} alt={props.alt} />
      <Name name={props.name} />
      <article className="flex items-center justify-center w-full   flex-wrap [&>*]:w-[20%] [&>*]:hover:cursor-pointer">
        <PersonContact src={imgInst} alt="Instagram" href={props.instagram} />
        <PersonContact src={imgFAcebook} alt="Facebook" href={props.facebook} />
        <PersonContact src={imgG} alt="Gmail" href={props.gmail} />
      </article> */
}
