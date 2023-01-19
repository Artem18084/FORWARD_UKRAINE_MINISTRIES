import React from "react";
import ListItem from "./ListItem/ListItem";
import CustomLink from "../../CustomLink/CustomLink";

export default function NavList(props) {
  const navList = {
    main: "Home",
    report: "Report",
    needs: "About",
    team: "Team",
    donate: "Donate",
  };
  return (
    <ul
      className={`flex ${props.flexSidebar} ${props.marginTop}   max-[1024px]:[&>*]:ml-[4vw]  max-[1280px]:[&>*]:ml-[6vw] [&>*]:ml-[8vw] [&>*]:cursor-pointer [&>*]:duration-700 items-center relative `}
    >
      <CustomLink to="/">
        <ListItem tittle={navList.main} />
      </CustomLink>
      <CustomLink to="/Reports">
        <ListItem tittle={navList.report} />
      </CustomLink>
      <CustomLink to="/About">
        <ListItem tittle={navList.needs} />
      </CustomLink>
      <CustomLink to="/Team">
        <ListItem tittle={navList.team} />
      </CustomLink>
      <CustomLink to="/Donate">
        <ListItem tittle={navList.donate} />
      </CustomLink>
    </ul>
  );
}
