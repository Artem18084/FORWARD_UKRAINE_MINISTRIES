import React from "react";
import ReportItem from "./ReportItem/ReportItem";
import ReportModal from "./ReportModal/ReportModal";
import loveUkraine from "../../../images/love-ukrainePhone.png";
import loveUkraineDesk from "../../../images/love-ukraine.png";

export default function Reports() {
  const reportPhoto = Array.from({ length: 49 }, (_, index) => ({
    photo: require(`../../../images/Routes/Report/report${index + 1}.jpg`).default,
    id: index + 1,
  })).reverse();

  const reportItems = reportPhoto.map((item) => (
    <ReportItem
      key={item.id}
      reportPhoto={reportPhoto}
      src={item.photo}
      alt={`report-${item.id}`}
      id={item.id.toString()}
    />
  ));

  return (
    <main className="relative">
      <img
        src={loveUkraineDesk}
        alt="love"
        className="absolute top-0 right-0 z-0 w-full hidden md:block "
      />
      <img
        src={loveUkraine}
        alt="love"
        className="absolute top-0 right-0 z-0 w-full md:hidden h-[100vh]"
      />
      <h1 className="md:hidden absolute text-white top-[45vh] right-[50%] translate-x-[50%]  xl:text-9xl lg:text-4xl text-2xl font-semibold md:font-normal uppercase pt-10">
        Our Reports
      </h1>
      <div className=" hidden md:flex relative w-full flex-col items-center text-white md:pt-[5rem] lg:pt-[10rem]">
        <h1 className="xl:text-6xl lg:text-4xl md:text-2xl text-xl font-semibold md:font-normal uppercase pt-10">
          Our Report
        </h1>
      </div>
      <section className="mt-[105vh]  md:mt-[20vw] lg:mt-[15vw] xl:mt-[20vw] 2xl:mt-[20vw]  5xl:mt-[23vw]  pt-30 w-full flex flex-row justify-center flex-wrap">
        {reportItems}
        <ReportModal reportPhoto={reportPhoto} />
      </section>
    </main>
  );
}
