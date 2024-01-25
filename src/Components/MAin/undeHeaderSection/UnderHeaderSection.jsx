import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DonateButton from "../../UI/DonateButton/DonateButton";

import headerBanner from "../../../images/pray/prayBanner.jpg";
import vectorMobile from "../../../images/header/vector.svg";
import instagramImg from "../../../images/social/instagram.png";
import facebookImg from "../../../images/social/facebook.png";
import ContactButton from "../../UI/DonateButton/ContactButton";
import Title from "../Title/Title";

export default function UnderHeaderSection() {
  return (
    <article
      className="  h-[812px] flex flex-col justify-center items-center text-white bg-center"
      style={{ backgroundImage: `url(${headerBanner})` }}
    >
      <article className="flex flex-col justify-center h-full items-start gap-16 self-stretch w-[375px] py-0 px-4 font-normal">
        <section className="flex flex-col justify-center items-start gap-16 self-stretch">
          <ul className="flex flex-col items-start gap-6 self-stretch">
            <li>
              <h4 className="uppercase leading-[19.2px] text-[#fff200] font-normal text-base">
                forward ukraine ministries
              </h4>
            </li>
            <li>
              <Title
                text= "Ukraine needs your support"
              />
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
    </article>
  );
}
