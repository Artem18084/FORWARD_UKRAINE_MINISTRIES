import React, { useState } from "react";
import ReportItem from "./ReportItem/ReportItem";

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
import imgReport30 from "../../../images/Report/report30.jpg";
import imgReport31 from "../../../images/Report/report31.jpg";
import imgReport32 from "../../../images/Report/report32.jpg";
import imgReport33 from "../../../images/Report/report33.jpg";
import imgReport34 from "../../../images/Report/report34.jpg";
import imgReport35 from "../../../images/Report/report35.jpg";
import imgReport36 from "../../../images/Report/report36.jpg";
import imgReport37 from "../../../images/Report/report37.jpg";
import imgReport38 from "../../../images/Report/report38.jpg";
import imgReport39 from "../../../images/Report/report39.jpg";

// import {useSelector} from "react-redux";
import ReportModal from "./ReportModal/ReportModal";
import loveUkraine from "../../../images/love-ukrainePhone.png";
import loveUkraineDesk from "../../../images/love-ukraine.png";

export default function Reports() {
  const reportPhoto = [
    { photo: imgReport8, id: 1 },
    { photo: imgReport22, id: 2 },
    { photo: imgReport27, id: 3 },
    { photo: imgReport30, id: 4 },
    { photo: imgReport3, id: 5 },
    { photo: imgReport20, id: 6 },
    { photo: imgReport2, id: 7 },
    { photo: imgReport28, id: 8 },
    { photo: imgReport4, id: 9 },
    { photo: imgReport5, id: 10 },
    { photo: imgReport31, id: 11 },
    { photo: imgReport9, id: 12 },
    { photo: imgReport1, id: 13 },
    { photo: imgWood, id: 14 },
    { photo: imgReport26, id: 15 },
    { photo: imgReport10, id: 16 },
    { photo: imgReport6, id: 17 },
    { photo: imgReport7, id: 18 },
    { photo: imgReport11, id: 19 },
    { photo: imgReport12, id: 20 },
    { photo: imgReport13, id: 21 },
    { photo: imgReport14, id: 22 },
    { photo: imgReport15, id: 23 },
    { photo: imgReport33, id: 24 },
    { photo: imgReport16, id: 25 },
    { photo: imgReport17, id: 26 },
    { photo: imgReport32, id: 27 },
    { photo: imgReport18, id: 28 },
    { photo: imgReport19, id: 29 },
    { photo: imgReport21, id: 30 },
    { photo: imgReport29, id: 31 },
    { photo: imgReport23, id: 32 },
    { photo: imgReport24, id: 33 },
    { photo: imgReport25, id: 34 },
    { photo: imgReport34, id: 35 },
    { photo: imgReport35, id: 36 },
    { photo: imgReport36, id: 37 },
    { photo: imgReport37, id: 38 },
    { photo: imgReport38, id: 39 },
    { photo: imgReport39, id: 40 },

  ];

  const report = [
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport8}
          alt="person"
          id={1}
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport22}
          alt="child"
          id="2"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport27}
          alt="people"
          id="3"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport30}
          alt="people"
          id="4"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport3}
          alt="people"
          id="5"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport35}
          alt="people"
          id="36"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport20}
          alt="boy"
          id="6"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport2}
          alt="van2"
          id="7"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport28}
          alt="girl"
          id="8"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport4}
          alt="child"
          id="9"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport5}
          alt="people"
          id="10"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport36}
          alt="solder"
          id="37"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport31}
          alt="people"
          id="11"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport9}
          alt="person"
          id="12"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport1}
          alt="people"
          id="13"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport34}
          alt="people"
          id="35"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgWood}
          alt="wood"
          id="14"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport26}
          alt="people"
          id="15"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport10}
          alt="wood"
          id="16"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport6}
          alt="person"
          id="17"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport7}
          alt="grandmother"
          id="18"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport11}
          alt="people"
          id="19"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport12}
          alt="people"
          id="20"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport13}
          alt="people"
          id="21"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport14}
          alt="grandmother"
          id="22"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport15}
          alt="girl"
          id="23"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport33}
          alt="people"
          id="24"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport16}
          alt="grandmother"
          id="25"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport17}
          alt="people"
          id="26"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport32}
          alt="people"
          id="27"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport18}
          alt="people"
          id="28"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport19}
          alt="food"
          id="29"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport21}
          alt="boy"
          id="30"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport29}
          alt="people"
          id="31"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport23}
          alt="van"
          id="32"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport24}
          alt="van"
          id="33"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport25}
          alt="people"
          id="34"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport37}
          alt="people"
          id="38"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport38}
          alt="person"
          id="39"
        />
      ),
    },
    {
      reportItem: (
        <ReportItem
          reportPhoto={reportPhoto}
          src={imgReport39}
          alt="people"
          id="40"
        />
      ),
    },
  ];
  // const active = useSelector((state) => state.positionReportPhoto.active);

  return (
    <main className="relative">
      <img
        src={loveUkraineDesk}
        alt="love"
        className="absolute top-0  right-0 z-0 w-full hidden md:block"
      />
      <img
        src={loveUkraine}
        alt="love"
        className="absolute top-0  right-0 z-0  w-full md:hidden h-[100vh]"
      />
      <h1 className=" md:hidden absolute text-white top-[45vh] right-[50%] translate-x-[50%] z-10 xl:text-9xl lg:text-4xl  text-2xl   font-semibold md:font-normal uppercase pt-10">
        Our Reports{" "}
      </h1>
      <div className="hidden md:block relative w-full   ">
        <div className=" z-10 flex flex-col items-center text-white md:pt-[10rem]">
          <h1 className=" xl:text-6xl lg:text-4xl md:text-2xl text-xl   font-semibold md:font-normal uppercase pt-10">
            Our Report{" "}
          </h1>
        </div>
      </div>

      <section className="md:mt-[40vh] mt-[105vh] pt-30 w-full flex flex-row justify-center flex-wrap">
        {report.map((item) => item.reportItem)}
        <ReportModal reportPhoto={reportPhoto} />
      </section>
    </main>

    // <main
    //   className={`flex flex-col items-center justify-center relative  ${
    //     active
    //       ? "px-[5vw] sm:px-[10vw]  md:px-[15vw] lg:px-[20vw] xl:px-[25rem]"
    //       : "px-[8vw]"
    //   } py-[8rem] max-[1024px]:py-[6rem] max-[768px]:py-[4rem] w-full h-full   bg-[#1b1d33] `}
    // >
    //   <article className="flex items-baseline mb-7">
    //     <h2 className="text-4xl max-[1024px]:text-2xl max-[768px]:text-xl mr-2 max-[1024px]:mr-1 max-[768px]:mr-[2px] text-white">
    //       Our Reports
    //     </h2>
    //
    //     <Dots />
    //   </article>
    //   <section
    //     className={`flex  flex-wrap [&>*]:p-1 p-1 ${
    //       active
    //         ? " [&>*]:w-full  [&>*]:h-[60vh]  sm:[&>*]:h-[65vh] md:[&>*]:h-[75vh] lg:[&>*]:h-[85vh] xl:[&>*]:h-[90vh]"
    //         : " [&>*]:w-[33.3333333333333333333333333333333333333%] [&>*]:h-[33vw]"
    //     } bg-white`}
    //   >
    //     {report.map((item) => item.reportItem)}
    //   </section>
    // </main>
  );
}
