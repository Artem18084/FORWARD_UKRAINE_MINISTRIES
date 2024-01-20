import React from "react";
// import BridgeSection from "./BridgeSection/BridgeSection";
import HumanitarianDisaster from "./HumanitarianDisaster/HumanitarianDisaster";
import ImpactSection from "./ImpactSection/ImpactSection";
import JourneySection from "./JourneySection/JourneySection";
import MapSection from "./MapSection/MapSection";
import AboutWar from "./AboutWar/AboutWar";
import PraySection from "./PraySection/PraySection";

export default function Main(props) {
  return (
    <main className="flex flex-col w-full h-full ">
      <ImpactSection />

      {/* <AboutWar /> */}
      <PraySection/>
    </main>
  );
}
