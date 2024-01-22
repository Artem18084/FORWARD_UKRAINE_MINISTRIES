import React from "react";
import NavList from "../Header/NavList/NavList";

import ContactButton from "../UI/DonateButton/ContactButton";
import facebookLogo from "../../images/social/facebook.png";
import instagramLogo from "../../images/social/instagram.png";
import whatsappLogo from "../../images/social/whatsapp.png";
import NavLinkOrg from "../Link/NavLinkOrg";

export default function Footer(props) {
  let currentDate = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center bg-dark-blue text-white px-4 py-12 gap-52">
      <section className=" flex flex-col items-center  gap-6">
        <ul className=" flex flex-col  items-center   gap-4 tracking-normal ">
          <li className=" flex  items-center justify-between h-auto font-playfair text-base font-semibold leading-7  text-white mx-[1.1562rem]">
            <NavLinkOrg justify="center" />
          </li>
          <li className="font-sans text-base font-semibold leading-8 text-center ">
            <a className="flex gap-1" href="###">
              +380{" "}
              {Array.from({ length: 3 }, (_, index) => (
                <span key={index}>XXX</span>
              ))}
            </a>
          </li>
          <li>
            <ul className="flex  gap-4">
              <ContactButton href="" src={facebookLogo} alt="facebook" />
              <ContactButton href="" src={instagramLogo} alt="instagram" />
              <ContactButton href="" src={whatsappLogo} alt="whatsapp" />
            </ul>
          </li>
        </ul>
        <span className="bg-[#fff200] h-[1px] w-full"></span>
        <NavList flex="flex" />
        <h5 className="text-[#9aaad7]  font-montserrat text-base font-normal leading-17">
          © ForwardUkraineMinistries {currentDate}
        </h5>
      </section>
    </footer>
  );
}
// 1 додати href
