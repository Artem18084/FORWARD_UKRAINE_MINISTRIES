import React from "react";
import Name from "./Name/Name";
import PersonPhoto from "./PersonPhoto/PersonPhoto";
import imgInst from "../../../../images/Team/TeamContacts/personInst.png";
import imgFAcebook from "../../../../images/Team/TeamContacts/personFacebook.png";
import imgG from "../../../../images/Team/TeamContacts/personG.png";
import imgTG from "../../../../images/Team/TeamContacts/personTG.png";
import PersonContact from "./RersonContact/PersonContact";

export default function PersonCArd(props) {
  return (
    <section className="  flex  flex-col items-center rounded-xl w-[20%] max-[768px]:w-[30%]  hover:scale-110    bg-white relative px-[1rem] pb-[1rem] pt-[1rem]    ">
      <div className="absolute top-0 left-0 bg-gray-500 lg:hover:hidden hidden lg:block rounded-xl w-full h-full opacity-60"></div>
      <PersonPhoto src={props.src} alt={props.alt} />
      <Name name={props.name} />
      <article className="flex items-center justify-center w-full   flex-wrap [&>*]:w-[20%] [&>*]:hover:cursor-pointer">
        <PersonContact src={imgInst} alt="Instagram" href={props.instagram} />
        <PersonContact src={imgFAcebook} alt="Facebook" href={props.facebook} />
        <PersonContact src={imgG} alt="Gmail" href={props.gmail} />
        <PersonContact src={imgTG} alt="Telegram" href={props.telegram} />
      </article>
    </section>
  );
}
