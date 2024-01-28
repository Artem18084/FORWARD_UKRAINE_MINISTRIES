import React from "react";
import ImpactSection from "./ImpactSection/ImpactSection";
import AboutWar from "./AboutWar/AboutWar";
import PraySection from "./PraySection/PraySection";
import Evacuation from "./Evacuation/Evacuation";
import AreaOfWork from "./AreaOfWork/AreaOfWork";
import UnderHeaderSection from "./undeHeaderSection/UnderHeaderSection";

export default function Main(props) {
  return (
    <main className="flex flex-col w-full h-full mx-auto">
      <UnderHeaderSection/>
      <ImpactSection />
      <AreaOfWork />
      <Evacuation />
      <AboutWar />
      <PraySection />
    </main>
  );
}
