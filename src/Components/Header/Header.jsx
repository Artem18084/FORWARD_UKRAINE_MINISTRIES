import React  from "react";

import NavLinkOrg from "./NavLinkORG/NavLinkOrg";
import NavList from "./NavList/NavList";
import imgActiveMenu from "../../images/header/activeMenu.png";
import imgPasiveMenu from "../../images/header/pasiveMenu.png";
export default function Header(props) {
 
 
  return (
    
    <header className="fixed flex justify-between items-center z-10 top-0 right-0  w-full h-auto bg-gradient-to-r to-slate-900 from-sky-900  text-white py-4 px-8 max-[768px]:py-2 max-[768px]:px-4">
      <nav>

      </nav>
      <nav className=" max-[768px]:hidden ">
        <NavList donateActive={props.donateActive} teamActive={props.teamActive} needsActive={props.needsActive} reportActive={props.reportActive} homeActive={props.homeActive} donate={props.donate} team={props.team} needs={props.needs} report={props.report} home={props.home}/>
      </nav>
      <NavLinkOrg />

      <img
        className=" min-[769px]:hidden  w-4 h-4"
        onClick={() => props.setToggleMenu(!props.toggleMenu)}
        src={!props.toggleMenu ? imgPasiveMenu : imgActiveMenu}
        alt="toggleMenu"
      />
    </header>
  );
}
