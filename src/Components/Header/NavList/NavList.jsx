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
      className={`flex ${props.flexSidebar} ${props.marginTop} pl-5 justify-center [&>*]:cursor-pointer items-center relative `}
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
    </ul>
  );
}
