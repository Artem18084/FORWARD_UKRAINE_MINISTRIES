import React from "react";
import evacImg from "../../../images/main/evacuation/evacuationMobile.png";
import SubTitle from "../SubTitle/SubTitle";

export default function Evacuation() {
  const contentData = [
    {
      text: "22:30 we need to transfer fuel from the barrel to the canisters to refuel. The guys are doing it, and I'm standing next to the truck. There are terrible words written on it: 'On the shield. Evacuation of the fallen'.",
      isBold: true,
    },
    {
      text: "A car with two soldiers arrived, they parked next to me and one of them looked at the words on the car and me for a long time. He opened the door of his car, took out a cigarette and stared silently.",
      isBold: false,
    },
    {
      text: "It took some time before he decided to get out of the car, he went far away, but I realized that he just wanted to see what the evacuation looked like. There were no bodies. He approached me step by step and finally decided to speak.",
      isBold: false,
    },
    {
      text: '"I see what it says: "Evacuation of the fallen. Tomorrow they will bring my kid in one of these. Not much honor for them."',
      isBold: true,
    },
    {
      text: "And I just stand there, look into his eyes, and I am pierced by this pain that is visible in his eyes. And I cannot say a word. My mind is a whirlpool of thoughts: 'Hold on? Who gave me the right to say this to a father who is mourning his son? He has every right to be in despair, why does he have to wear a mask? For whom? Will my words change anything at all?' I think about what to say, but I don't have time to say anything.",
      isBold: false,
    },
    {
      text: 'He says: "I don\'t want to come here." And my heart broke. He has the right to live, his son was worthy of life.',
      isBold: false,
    },
    {
      text: "I didn't say anything, I didn't find the words…",
      isBold: false,
    },
  ];
  return (
    <article className="flex flex-col bg-dark-blue">
      <figure className=" flex items-center justify-center">
        <img
          className="max-w-[375px] max-h-[430px] object-contain"
          src={evacImg}
          alt="carEvacuation"
        />
      </figure>
      <section className="flex gap-8 py-12 px-4">
        <div className="flex flex-col gap-8">
          <ul className="flex flex-col gap-4 border-l-[#fff200] border-l-[1px] pl-4 font-semibold text-sm leading-4 ">
            <li>
              <time
                className=" text-[#fff200] font-playfair text-sm font-semibold leading-4 tracking-normal text-left"
                dateTime="2022-10-10"
              >
                AUGUST-24-2023{" "}
              </time>
            </li>

            <li>
              <SubTitle title="Evacuation..." color="white" />
            </li>
          </ul>
          <ul className="flex flex-col gap-4 text-base font-light text-[#9aaad7] font-inter">
            {contentData.map((item, index) => (
              <li key={index}>
                <p className={item.isBold ? "font-medium" : ""}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
