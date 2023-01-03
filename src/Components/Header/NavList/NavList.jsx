import React from "react";
import ListItem from "./ListItem/ListItem";
import { Link } from "react-router-dom";

export default function NavList(props) {

 
  const navList = {
    main: "Home",
    report: "Report",
    needs: "Needs",
    team: "Team",
    donate: "Donate",
  };
  return (
    <ul  className={`flex ${props.flexSidebar} ${props.marginTop}   max-[1024px]:[&>*]:ml-[4vw]  max-[1280px]:[&>*]:ml-[6vw] [&>*]:ml-[8vw] [&>*]:cursor-pointer [&>*]:duration-700 items-center relative `}>
      <Link to="/">
        <ListItem  setToggleMenu ={props.setToggleMenu}
          tittle={navList.main}
          id={navList.main}
          state={props.home}
          setState={props.homeActive}
        />
      </Link>

      <Link to="/Reports">
        <ListItem setToggleMenu ={props.setToggleMenu}
          tittle={navList.report}
          id={navList.report}
          state={props.report}
          setState={props.reportActive}
        />
      </Link>

      <Link to="/Needs">
        <ListItem setToggleMenu ={props.setToggleMenu}
          tittle={navList.needs}
          id={navList.needs}
          state={props.needs}
          setState={props.needsActive}
        />
      </Link>

      <Link to="/Team">
        <ListItem setToggleMenu ={props.setToggleMenu}
          tittle={navList.team}
          id={navList.team}
          state={props.team}
          setState={props.teamActive}
        />
      </Link>
      <Link to="/Donate">
        <ListItem setToggleMenu ={props.setToggleMenu}
          tittle={navList.donate}
          id={navList.donate}
          state={props.donate}
          setState={props.donateActive}
        />
      </Link>
    </ul>
  );
}
