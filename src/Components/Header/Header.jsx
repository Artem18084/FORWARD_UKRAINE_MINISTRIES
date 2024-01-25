import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusSidebar } from "../../Store/Reducers/sidebarChecker";
import NavLinkOrg from "../Link/NavLinkOrg";
import DonateButton from "../UI/DonateButton/DonateButton";
import NavList from "./NavList/NavList";

import imgPassiveMenu from "../../images/header/passiveMenu.svg";
import headerBanner from "../../images/pray/prayBanner.jpg";
import vectorMobile from "../../images/header/vector.svg";
import instagramImg from "../../images/social/instagram.png";
import facebookImg from "../../images/social/facebook.png";
import ContactButton from "../UI/DonateButton/ContactButton";

export default function Header() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.sidebarChecker.status);

  return (
    <header className=" text-white  font-playfair text-[18px] font-semibold leading-7 fixed top-0 left-0 flex items-center justify-between w-full h-[100px] px-4 py-10 flex-shrink-0 self-stretch backdrop-blur-[2px] opacity-[.95] bg-dark-blue z-40">
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

{
  /* <NavLinkOrg/> */
}
{
  /* <nav className=" max-[768px]:hidden ">
        <NavList/>
      </nav>
      <button className='w-[100px] h-[36px] bg-white rounded-[40px] max-[768px]:hidden'>
        <a href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY" target="_blank" className='w-full h-full'>Donate</a>
      </button>
      
      <img
        className=" min-[769px]:hidden  w-4 h-4 cursor-pointer"
        onClick={() => dispatch(setStatusSidebar(!status))}
        src={!status ? imgPassiveMenu : imgActiveMenu}
        alt="toggleMenu"
      /> */
}
