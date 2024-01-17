import React from "react";
import DonateButton from "../UI/DonateButton/DonateButton";
import NavList from "../Header/NavList/NavList";

import footerBanner from "../../images/footer/footerBanner.jpg";
import logo from "../../images/logo/logo.png";
import ContactButton from "../UI/DonateButton/ContactButton";
import facebookLogo from "../../images/footer/facebook.png";
import instagramLogo from "../../images/footer/instagram.png";
import whatsappLogo from "../../images/footer/whatsapp.png";

export default function Footer(props) {
  let currentDate = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center w-full text-white ">
      <article
        className=" w-full flex flex-col items-center justify-center bg-cover bg-center  py-24  gap-[3.75rem] px-[7.5rem] "
        style={{ backgroundImage: `url(${footerBanner})` }}
      >
        {/* div>h2+span */}
        <div className="flex flex-col items-center gap-2 ">
          <h2 className=" font-playfair text-3xl font-bold leading-50 tracking-wide text-center ">
            Pray for Ukraine
          </h2>
          <span className="block h-[1px]  w-full max-w-[103.5px] bg-[#fff200] "></span>
        </div>

        <p className=" font-inter text-center text-base font-normal leading-7 tracking-normal max-w-[769px]">
          Your help is needed in Ukraine where there are already more than 2.9
          million people in need of assistance. There is great risk of
          additional suffering both within Ukraine and for those who may flee to
          neighboring countries for safety
        </p>
        <DonateButton />
      </article>
      <nav className=" flex flex-col w-full items-center justify-center bg-[#0E2B6C] py-12 px-[7.5rem] gap-8">
        <ul className=" relative w-full flex items-center justify-between  ">
          <li className="font-sans text-base font-semibold leading-8 tracking-normal text-left">
            <a href="###"></a>+38{" "}
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index} className="ml-1">
                XXX
              </span>
            ))}
          </li>
          <li className="">
            <a
              className="cursor-pointer"
              href="https://www.facebook.com/profile.php?id=100080343590994"
              target="_blank"
              rel="external"
            >
              <figure className="flex items-center">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <figcaption className=" pr-11 text-white font-playfair text-base font-semibold leading-7 tracking-normal text-left">
                  Forward Ukraine Ministries
                </figcaption>
              </figure>
            </a>
          </li>
          <li>
            <ul className="flex gap-4">
              <ContactButton href="" src={facebookLogo} alt="facebook" />
              <ContactButton href="" src={instagramLogo} alt="instagram" />
              <ContactButton href="" src={whatsappLogo} alt="whatsapp" />
            </ul>
          </li>
        </ul>
        <span className=" block h-[1px] bg-[#fff200] w-full "></span>
        <NavList />
        <h5 className="text-[#8B96B4]">
          © ForwardUkraineMinistries {currentDate}
        </h5>
      </nav>
    </footer>
  );
}
// 1 додати href
