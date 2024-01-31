import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusSidebar } from "../../Store/Reducers/sidebarChecker";
import NavLinkOrg from "../Link/NavLinkOrg";


import imgPassiveMenu from "../../images/header/passiveMenu.svg";


export default function Header() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.sidebarChecker.status);

  return (
    <header className=" text-white  font-serif text-[18px] font-semibold leading-7 fixed top-0 left-0 flex items-center justify-between w-full h-[100px] px-4 py-10 flex-shrink-0 self-stretch backdrop-blur-[2px] opacity-[.95] bg-dark-blue z-40">
      <ul className="flex items-center justify-between w-full">
        <li>
          <NavLinkOrg justify="start" />
        </li>
        <li>
          <img
            className="min-[769px]:hidden w-6 h-6 cursor-pointer"
            onClick={() => dispatch(setStatusSidebar(!status))}
            src={imgPassiveMenu}
            alt="toggleMenu"
          />
        </li>
      </ul>
    </header>
  );
}

