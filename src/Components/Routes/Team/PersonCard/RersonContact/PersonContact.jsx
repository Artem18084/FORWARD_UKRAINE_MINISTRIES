import React from "react";
import PersonalContactItem from "./PersonalContactItem/PersonalContactItem";

import facebookImg from "../../../../../images/Routes/Team/TeamSocial/facebook.svg";
import instagramImg from "../../../../../images/Routes/Team/TeamSocial/Instagram.svg";
import mailImg from "../../../../../images/Routes/Team/TeamSocial/mail.svg";

export default function PersonContact(props) {
  return (
    <div className="flex flex-col items-center self-stretch ">
      <div className="flex  flex-col h-[61.886px] px-12 py-[21px] items-center justify-center gap-[10px] self-stretch relative">
        <ul className="flex items-start gap-[9.6px]">
          <PersonalContactItem src={facebookImg} alt="facebook" />
          <PersonalContactItem src={instagramImg} alt="instagram" />
          <PersonalContactItem src={mailImg} alt="gmail" />
        </ul>{" "}
        <div className="absolute bottom-0 left-[50%] transform translate-x-[-50%] h-[1px] w-[107.7px] bg-mainBlue mb-[1px]"></div>
      </div>
    </div>
  );
}