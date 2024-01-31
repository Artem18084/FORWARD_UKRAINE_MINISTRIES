import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusSidebar } from "../../Store/Reducers/sidebarChecker";
import NavLinkOrg from "../Link/NavLinkOrg";

import imgPassiveMenu from "../../images/header/passiveMenu.svg";
import NavList from "./NavList/NavList";
import DonateButton from "../UI/DonateButton/DonateButton";
import LanguageSwich from "../UI/DonateButton/LanguageSwich";

export default function Header() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.sidebarChecker.status);

  return (
    <header className=" text-white  font-serif text-[18px] font-semibold leading-7 fixed top-0 left-0 flex items-center justify-between w-full h-[100px] px-4 md:px-11 xl:px-[72px] py-10 flex-shrink-0 self-stretch backdrop-blur-[2px] opacity-[.95] bg-dark-blue z-40">
      <ul className="flex items-center justify-between w-full">
        <li>
          <NavLinkOrg />
        </li>
        <li className=" hidden lg:flex">
          {" "}
          <NavList />
        </li>
        <li className=" hidden lg:flex">
          <ul className=" flex items-center justify-between">
            <li>
              <DonateButton />
            </li>
            <li>
              <LanguageSwich />
            </li>
          </ul>
        </li>
        <li className=" lg:hidden">
          <img
            className="w-6 h-6 cursor-pointer"
            onClick={() => dispatch(setStatusSidebar(!status))}
            src={imgPassiveMenu}
            alt="toggleMenu"
          />
        </li>
      </ul>
    </header>
  );
}
