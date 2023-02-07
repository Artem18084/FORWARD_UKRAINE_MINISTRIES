import React from "react";
import FirstArticleOnSection from "../firstArticleOnSection/FirstArticleOnSection";
import imgCar from "../../../images/Disaster/car.png";

export default function HumanitarianDisaster() {
  return (
    <section className="flex flex-col w-full h-full px-4 xl:px-10 py-6 xl:py-14  items-center bg-gray-200">
      <FirstArticleOnSection
        alt="disaster humanitarian"
        selfReverse="xl:flex-row"
        selfClassFlexReverse="flex-row-reverse"
        selfClassHidden="hidden"
        img={imgCar}
        w="w-[90%] xl:w-[40%]"
        title="Humanitarian Disaster"
        massage="The actions of the Russian authorities are causing a humanitarian
        catastrophe. Occupiers set up their positions in residential buildings
        and destroy private ones estates for storing weapons. Because of this,
        local residents are forced to leave their homes Shops and pharmacies are
        also closed in the occupied territories. Delivery of medicines and
        products to the population has almost stopped. A large number of people
        who, for one reason or another, cannot leave the territory as close as
        possible to hostilities, urgently need such things as food, water, warm
        clothes, medicines, and personal hygiene products, so once a week we
        make humanitarian trips to places that are in close proximity to
        hostilities or have recently been occupied, we try to give people what
        they need. But, unfortunately, all trips require constant funding. The
        humanitarian catastrophe in Ukraine is an element of the Russian
        military strategy. Join us and together we will thwart the aggressor's
        plans."
      />
    </section>
  );
}
