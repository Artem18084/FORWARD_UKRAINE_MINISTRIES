import React from "react";
import ReportItem from "./ReportItem/ReportItem";
import ReportModal from "./ReportModal/ReportModal";
import RoutUnderHeader from "../RoutUnderHeader";

import reportBanner from "../../../images/Routes/Report/reports.jpg";
import { useSelector } from "react-redux";

export default function Reports() {
  const reportPhoto = Array.from({ length: 55 }, (_, index) => ({
    photo: require(`../../../images/Routes/Report/report${index + 1}.jpg`)
      .default,
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
  const currentTextData = useSelector((state) => state.language.textJson);
  const title = currentTextData.main.routes.reports.title;

  return (
    <main className="relative">
      <RoutUnderHeader title={title} banner={reportBanner} />
      <section className="flex flex-col items-center justify-center self-stretch px-4 py-8 gap-[60px]">
        <div className="w-full flex flex-row justify-center flex-wrap ">
          {reportItems}
        </div>
        <ReportModal reportPhoto={reportPhoto} />
      </section>
    </main>
  );
}
