import React from "react";
import ReportItem from "./ReportItem/ReportItem";
import ReportModal from "./ReportModal/ReportModal";
import RoutUnderHeader from "../RoutUnderHeader";

import reportBanner from "../../../images/Routes/Report/reports.jpg";

export default function Reports() {
  const reportPhoto = Array.from({ length: 49 }, (_, index) => ({
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

  return (
    <main className="relative">
      <RoutUnderHeader title="our reports" banner={reportBanner} />
      <section className="  flex flex-col items-center justify-center self-stretch px-4 py-8 gap-[60px]">
        <div className=" w-full flex flex-row justify-center flex-wrap gap-6" >{reportItems}</div>
        <ReportModal reportPhoto={reportPhoto} />
      </section>
    </main>
  );
}
