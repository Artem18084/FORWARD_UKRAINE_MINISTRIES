import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatusSidebar } from "../../Store/Reducers/sidebarChecker";

import NavLinkOrg from "./NavLinkORG/NavLinkOrg";
import NavList from "./NavList/NavList";
import imgActiveMenu from "../../images/header/activeMenu.png";
import imgPassiveMenu from "../../images/header/pasiveMenu.png";
export default function Header() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.sidebarChecker.status);

  return (
    <header className="fixed flex justify-between items-center z-10 top-0 right-0  w-full h-auto bg-gradient-to-r to-slate-900 from-sky-900  text-white py-4 px-8 max-[768px]:py-2 max-[768px]:px-4 z-20">
      <nav></nav>
      <nav className=" max-[768px]:hidden ">
        <NavList />
      </nav>
      <NavLinkOrg />

      <img
        className=" min-[769px]:hidden  w-4 h-4 cursor-pointer"
        onClick={() => dispatch(setStatusSidebar(!status))}
        src={!status ? imgPassiveMenu : imgActiveMenu}
        alt="toggleMenu"
      />
    </header>
  );
}
