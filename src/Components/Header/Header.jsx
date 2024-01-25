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
    <header
      className=" relative h-[812px] flex flex-col justify-center items-center text-white bg-center"
      style={{ backgroundImage: `url(${headerBanner})` }}
    >
      <nav className=" fixed top-0 left-0 flex items-center justify-between w-full h-[100px] px-4 py-10 flex-shrink-0 self-stretch backdrop-blur-[2px] opacity-[.9] bg-dark-blue z-40">
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
      </nav>
      <article className="flex flex-col justify-center h-full items-start gap-16 self-stretch w-[375px] py-0 px-4 font-normal">
        <section className="flex flex-col justify-center items-start gap-16 self-stretch">
          <ul className="flex flex-col items-start gap-6 self-stretch">
            <li>
              <h4 className="uppercase leading-[19.2px] text-[#fff200] font-normal text-base">
                forward ukraine ministries
              </h4>
            </li>
            <li>
              <h1 className="flex self-stretch not-italic  font-playfair font-semibold  text-[34px] leading-[47.6px] tracking-wide uppercase">
                Ukraine needs your support
              </h1>
            </li>
            <li>
              <p className="text-lg leading-[27px] font-normal">
                Ukraine needs your support now more than ever, you and I can not
                be indifferent and only in vain can we help all these people
                survive these really difficult times in the history of Ukraine
                that unfortunately happened to them
              </p>
            </li>
          </ul>
          <DonateButton bgColor="myYellow" color="black" helping="Donate" />
        </section>
        <ul className="flex items-start justify-between gap-4 mb-[-100px]">
          <li>
            <ContactButton src={instagramImg} />
          </li>
          <li>
            <ContactButton src={facebookImg} />
          </li>
          <li>
            <ul className="flex items-center justify-between gap-4">
              <li className="uppercase">Follow us</li>
              <li className="">
                <figure>
                  <img src={vectorMobile} alt="" />
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </article>
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
