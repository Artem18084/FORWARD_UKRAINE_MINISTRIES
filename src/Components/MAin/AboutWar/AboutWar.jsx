import React from "react";
import aboutWarSolderMobile from "../../../images/main/AboutWar/aboutWarSolderMobile.png";
import SubTitle from "../SubTitle/SubTitle";
export default function AboutWar() {
  const contentData = [
    {
      text: "For 4 hours he was lying on the battlefield in a shell crater. For 4 hours he lay in the cold, covered in mud, waiting for evacuation. For 4 hours he just wondered whether he would survive, whether he would be taken out of there alive. Hypothermia, contusion, wounds, a dream of getting to a hospital and just a desire to live",
      isBold: true,
    },
    {
      text: "People, the war is not over as long as the best are dying!",
      isBold: true,
    },
    {
      text: "Look at these hands, these are the hands of a man who came out of the battle, who lost his comrade-in-arms, who was on the verge of death a few hours ago. This is the war, the war that is not over, and which we will be able to win when everyone does something to win.",
      isBold: false,
    },
  ];
  return (

    <article className=" flex flex-col bg-white text-[#3f424b]">
      <figure className=" flex items-center justify-center">
        <img
          className="max-w-[375px] max-h-[430px] object-contain "
          src={aboutWarSolderMobile}
          alt="solder"
        />
      </figure>
      <section className="flex gap-[60px] py-12 px-4 ">
        <div className="flex flex-col gap-8">
          <ul className="flex flex-col gap-4 border-l-[#4177ec] border-l-[1px] pl-4 font-semibold text-sm leading-4 ">
            <li>
              <time
                className=" text-[#4177ec] font-playfair text-sm font-semibold leading-4 tracking-normal text-left"
                dateTime="2022-10-10"
              >
                DECEMBER-09-2023
              </time>
            </li>
            <li>
              <SubTitle title="About war..." color="black" />
            </li>
          </ul>
          <ul className="flex flex-col gap-4 text-base font-light font-inter">
            {contentData.map((item, index) => (
              <li key={index}>
                <p className={item.isBold ? "font-bold" : "text-normal"}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
