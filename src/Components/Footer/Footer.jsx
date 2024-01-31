import React from "react";
import NavList from "../Header/NavList/NavList";

import ContactButton from "../UI/UIComponents/ContactButton";
import facebookLogo from "../../images/social/facebook.png";
import instagramLogo from "../../images/social/instagram.png";
import whatsappLogo from "../../images/social/whatsapp.png";
import NavLinkOrg from "../Link/NavLinkOrg";

export default function Footer(props) {
  let currentDate = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center bg-dark-blue text-white px-4 md:px-9 lg:px-11 xl:px-[72px] py-12 gap-52 font-sans">
      <section className=" flex flex-col items-center  gap-6 md:gap-8 md:w-full">
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:w-full  md:justify-between tracking-normal">
          <li className="flex items-center justify-between h-auto  text-base font-semibold leading-7 text-white mx-[1.1562rem] md:order-2">
            <NavLinkOrg justify="center" />
          </li>
          <li className=" text-base font-semibold leading-8 text-center md:order-1">
            <a className="flex gap-1" href="###">
              +380{" "}
              {Array.from({ length: 3 }, (_, index) => (
                <span key={index}>XXX</span>
              ))}
            </a>
          </li>
          <li className="md:order-3">
            <ul className="flex gap-4">
              <ContactButton
                href="https://www.facebook.com/profile.php?id=100080343590994"
                src={facebookLogo}
                alt="facebook"
              />
              <ContactButton href="" src={instagramLogo} alt="instagram" />
              <ContactButton href="" src={whatsappLogo} alt="whatsapp" />
            </ul>
          </li>
        </ul>

        <span className="bg-[#fff200] h-[1px] w-full"></span>
        <NavList flex="flex"  />
        <h5 className="text-[#9aaad7]   text-base font-normal leading-17">
          © ForwardUkraineMinistries {currentDate}
        </h5>
      </section>
    </footer>
  );
}
// 1 додати href
