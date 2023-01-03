import React from "react";
import ReportItem from "./ReportItem/ReportItem";
import { useState } from "react";

import imgWood from "../../../images/Journey/wood1.jpg";
import imgReport1 from "../../../images/Report/report1.jpg";
import imgReport2 from "../../../images/Report/report2.jpg";
import imgReport3 from "../../../images/Report/report3.jpg";
import imgReport4 from "../../../images/Report/report4.jpg";
import imgReport5 from "../../../images/Report/report5.jpg";
import imgReport6 from "../../../images/Report/report6.jpg";
import imgReport7 from "../../../images/Report/report7.jpg";
import imgReport8 from "../../../images/Report/report8.jpg";
import imgReport9 from "../../../images/Report/report9.jpg";
import imgReport10 from "../../../images/Report/report10.jpg";
import imgReport11 from "../../../images/Report/report11.jpg";
import imgReport12 from "../../../images/Report/report12.jpg";
import imgReport13 from "../../../images/Report/report13.jpg";
import imgReport14 from "../../../images/Report/report14.jpg";
import imgReport15 from "../../../images/Report/report15.jpg";
import imgReport16 from "../../../images/Report/report16.jpg";
import imgReport17 from "../../../images/Report/report17.jpg";
import imgReport18 from "../../../images/Report/report18.jpg";
import imgReport19 from "../../../images/Report/report19.jpg";
import imgReport20 from "../../../images/Report/report20.JPG";
import imgReport21 from "../../../images/Report/report21.JPG";
import imgReport22 from "../../../images/Report/report22.JPG";
import imgReport23 from "../../../images/Report/report23.JPG";
import imgReport24 from "../../../images/Report/report24.JPG";
import imgReport25 from "../../../images/Report/report25.JPG";
import imgReport26 from "../../../images/Report/report26.JPG";
import imgReport27 from "../../../images/Report/report27.JPG";
import imgReport28 from "../../../images/Report/report28.JPG";
import imgReport29 from "../../../images/Report/report29.jpg";

import Dots from "./Dots/Dots";
import { useSelector } from "react-redux";

export default function Reports() {
  const [width, setWidth] = useState(false);
  const active = useSelector(state => state.positionReportPhoto.active)

  return (
    <main
      className={`flex flex-col items-center justify-center  ${
        active
          ? "px-[5vw] sm:px-[10vw]  md:px-[15vw] lg:px-[20vw] xl:px-[25rem]"
          : "px-[8vw]"
      } py-[8rem] max-[1024px]:py-[6rem] max-[768px]:py-[4rem] w-full h-full   bg-[#1b1d33] `}
    >
      <article className="flex items-baseline mb-7">
        <h2 className="text-4xl max-[1024px]:text-2xl max-[768px]:text-xl mr-2 max-[1024px]:mr-1 max-[768px]:mr-[2px] text-white">
          Our Reports
        </h2>

        <Dots />  
      </article>
      <section
        className={`flex  flex-wrap [&>*]:p-1 p-1 ${
          active
            ? " [&>*]:w-full  [&>*]:h-[55vh]  sm:[&>*]:h-[60vh] md:[&>*]:h-[70vh] lg:[&>*]:h-[80vh] xl:[&>*]:h-[90vh]"
            : " [&>*]:w-[33.3333333333333333333333333333333333333%] [&>*]:h-[30vw]"
        } bg-white`}
      >
        <ReportItem  src={imgReport1} alt="people" />{" "}
        {/* <ReportItem  src={imgReport22} alt="child" /> */}
        <ReportItem  src={imgReport3} alt="people" />
        <ReportItem  src={imgReport20} alt="boy" />
        <ReportItem  src={imgReport2} alt="van2" />
        <ReportItem  src={imgReport28} alt="girl" />
        <ReportItem  src={imgReport4} alt="child" />
        <ReportItem  src={imgReport5} alt="people" />
        <ReportItem  src={imgReport9} alt="person" />
        <ReportItem  src={imgReport8} alt="person" />
        <ReportItem  src={imgWood} alt="wood" />
        <ReportItem  src={imgReport10} alt="wood" />
        <ReportItem  src={imgReport6} alt="person" />
        <ReportItem  src={imgReport7} alt="grandmother" />
        <ReportItem  src={imgReport11} alt="people" />
        <ReportItem  src={imgReport12} alt="people" />
        <ReportItem  src={imgReport13} alt="people" />
        <ReportItem  src={imgReport14} alt="grandmother" />
        <ReportItem  src={imgReport15} alt="girl" />
        <ReportItem  src={imgReport16} alt="grandmother" />
        <ReportItem  src={imgReport17} alt="people" />
        <ReportItem  src={imgReport18} alt="people" />
        <ReportItem  src={imgReport19} alt="food" />
        <ReportItem  src={imgReport21} alt="boy" />
        <ReportItem  src={imgReport29} alt="people" />
        <ReportItem  src={imgReport23} alt="van" />
        <ReportItem  src={imgReport24} alt="van" />
        <ReportItem  src={imgReport25} alt="people" />
        <ReportItem  src={imgReport26} alt="people" />
        <ReportItem  src={imgReport27} alt="people" />
      </section>
    </main>
  );
}
