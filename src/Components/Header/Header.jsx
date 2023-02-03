import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setStatusSidebar} from "../../Store/Reducers/sidebarChecker";

import NavLinkOrg from "./NavLinkORG/NavLinkOrg";
import NavList from "./NavList/NavList";
import imgActiveMenu from "../../images/header/activeMenu.png";
import imgPassiveMenu from "../../images/header/pasiveMenu.png";

export default function Header() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.sidebarChecker.status);


  return (
    <header className='w-full fixed flex flex-row items-center justify-between backdrop-blur-lg h-[80px] px-5 lg:px-[120px] z-20'>
      <NavLinkOrg/>
      <nav className=" max-[768px]:hidden ">
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
      />
    </header>
  );
}
