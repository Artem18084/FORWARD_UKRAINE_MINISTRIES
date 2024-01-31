import React from "react";
import DonateButton from "../../UI/DonateButton/DonateButton";

import headerBanner from "../../../images/pray/prayBanner.jpg";
import vectorMobile from "../../../images/header/vector.svg";
import instagramLogo from "../../../images/social/instagram.png";
import facebookLogo from "../../../images/social/facebook.png";
import solder from "../../../images/header/solder.png";

import ContactButton from "../../UI/DonateButton/ContactButton";
import Title from "../Title/Title";

export default function UnderHeaderSection() {
  return (
    <div className="flex items-center justify-center bg-dark-blue overflow-hidden">
      {" "}
      <article
        className="  h-[812px] md:h-[900px] flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start bg-center relative overflow-hidden  w-full  max-w-[1440"
        style={{ backgroundImage: `url(${headerBanner})` }}
      >
        <article className="flex flex-col justify-center h-full items-start gap-16 md:gap-[88px]  w-full md:w-[50vw] xl:w-[600px] my2xl:w-[750px]  2xl:w-[45vw] py-0 px-4 md:px-0 md:pl-9 lg:pl-11 xl:pl-[72px] 2xl:pl-[10vw] font-normal">
          <section className="flex flex-col justify-center items-start gap-16 md:gap-12 self-stretch">
            <ul className="flex flex-col items-start gap-6 self-stretch text-white">
              <li>
                <h4 className="uppercase leading-[19.2px] text-[#fff200] font-serif  font-normal text-base">
                  forward ukraine ministries
                </h4>
              </li>
              <li className="md:w-[456px] lg:w-full">
                <Title text="Ukraine needs your support" />
              </li>
              <li>
                <p className="text-lg leading-[27px] font-normal">
                  Ukraine needs your support now more than ever, you and I can
                  not be indifferent and only in vain can we help all these
                  people survive these really difficult times in the history of
                  Ukraine that unfortunately happened to them
                </p>
              </li>
            </ul>
            <DonateButton />
          </section>
          <ul className="flex items-start justify-between gap-4 mb-[-100px]">
            <li>
            <ContactButton
                href="https://www.facebook.com/profile.php?id=100080343590994"
                src={facebookLogo}
                alt="facebook"
              />
             
            </li>
            <li>
            <ContactButton href="https://www.instagram.com/forward_ukraine__ministries?igsh=MWJwbnQxNTdwdWNnOQ==" src={instagramLogo} alt="instagram" />
            </li>
            <li>
              <ul className="flex items-center justify-between gap-4 text-white">
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
        <img
          src={solder}
          alt="solder"
          className=" hidden md:flex w-[736px] h-[750px] my1920:w-[940px] absolute bottom-0 right-[-50vw] betweenMDLG:right-[-30vw]  lg:right-[-25vw] xl:right-[-5vw] 2xl:right-[0vw] "
        />
      </article>
    </div>
  );
}
