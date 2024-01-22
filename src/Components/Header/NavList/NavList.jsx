import React from "react";
import ListItem from "./ListItem/ListItem";
import CustomLink from "../../Link/CustomLink";

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
      className={`${props.flex} ${props.flexSidebar} gap-6 items-center ${props.marginTop}  font-playfair text-base font-normal leading-6 tracking-normal  `}
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
