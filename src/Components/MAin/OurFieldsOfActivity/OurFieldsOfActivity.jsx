import React from "react";
import Title from "../Title/Title";

import military1 from "../../../images/Report/report40.jpg";
import military2 from "../../../images/Report/report41.jpg";
import military3 from "../../../images/Report/report48.jpg";
import military4 from "../../../images/Report/report1.jpg";
import military5 from "../../../images/Report/report49.jpg";

export default function OurFieldsOfActivity() {
  const photoData = [
    {
      name: "military",
      photos: [military1, military2, military3, military4, military5],
    },
    {
      name: "church",
      photos: [military1, military2, military3, military4, military5],
    },
    {
      name: "youth",
      photos: [military1, military2, military3, military4, military5],
    },
  ];
  return (
    <section className="flex flex-col items-center bg-slate-200 px-[1rem] md:px-[2.5rem] pt-[1.5rem] 	">
      <Title title="Our fields of activity" />
      <article className="flex items-center justify-center">
        <div>
          <h3 className="pb-1 text-sm text-[#ff9731]">Support military</h3>
        <p>
          Our organization pays special attention to supporting military needs.
          We actively cooperate with the military, providing them with necessary
          assistance, technical equipment, and moral support. Additionally, we
          focus on aiding civilians by offering not only material help but also
          consultation and evacuation efforts. Our work includes assistance for
          displaced individuals, evacuation organization, and a wide range of
          other measures to support those affected by conflicts.
        </p>
        </div>
        
        <div className="flex  h-32">
          {photoData
            .find((category) => category.name === "military")
            .photos.map((photo, index) => (
              <img  key={index} src={photo} alt={`Vilitary-${index + 1}`} />
            ))}
        </div>
      </article>
      <article>
        {" "}
        <h3 className="pb-1 text-sm text-[#ff9731]">Church Ministry "Domantove"</h3>
        <p>
          One of our key areas of activity is providing assistance to those in
          need through the church ministry "Domantove". We are actively involved
          in serving the youth and children, contributing to their spiritual and
          personal development. Our active presence in the village is manifested
          through organizing camps, festivals, and various events for community
          engagement and strengthening.
        </p>
        <div className="flex h-28">
        {photoData
            .find((category) => category.name === "church")
            .photos.map((photo, index) => (
              <img key={index} src={photo} alt={`church-${index + 1}`} />
            ))}
        </div>
      </article>
      <article>
        <h3 className="pb-1 text-sm text-[#ff9731]">Youth Development</h3>
        <p>
          Our organization is actively involved in supporting youth by providing
          financial aid for their sustenance. We aim to encourage and develop
          the creative ideas of young people to foster their personal growth and
          create their own small businesses. Our organization actively works on
          educating young ministers through participation in spiritual seminars
          and other programs focused on their spiritual growth and preparation
          for service. Our goal is to support youth in all spheres of life and
          contribute to their successful development.
        </p>
        <div className="flex h-28">
        {photoData
            .find((category) => category.name === "youth")
            .photos.map((photo, index) => (
              <img key={index} src={photo} alt={`youth-${index + 1}`} />
            ))}
        </div>
      </article>
    </section>
  );
}
