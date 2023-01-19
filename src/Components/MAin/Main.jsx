import React from "react";
import BridgeSection from "./BridgeSection/BridgeSection";
import HumanitarianDisaster from "./HumanitarianDisaster/HumanitarianDisaster";
import ImpactSection from "./ImpactSection/ImpactSection";
import JourneySection from "./JourneySection/JourneySection";
import MapSection from "./MapSection/MapSection";

export default function Main(props) {
  return (
    <main className="flex flex-col w-full h-full ">
      <MapSection />
      <JourneySection />
      <HumanitarianDisaster />
      <ImpactSection />
      <BridgeSection />
    </main>
  );
}
