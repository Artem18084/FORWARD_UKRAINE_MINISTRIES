import React from "react";

import imgFounder from "../../../images/Needs/founder.jpg";
export default function About() {
  return (
    <main className="w-full h-screen flex flex-col  items-center  text-white  item-center justify-center  bg-[#1b1d33] ">
      {/* <section className=" w-full items-center  justify-around flex flex-row max-[768px]:flex-col ">
        <article className="flex flex-col items-center ">
          <h2 className="text-2xl max-[1024px]:text-sm">Founder of the fund</h2>
          <h1 className="text-5xl max-[1024px]:text-lg py-5 max-[1024px]:py-1">
            Yevgeniy Ustenko
          </h1>
        </article>

        <img
          className=" w-[30vw] max-[768px]:w-[50vw] h-full rounded-2xl hover:scale-110 duration-1000"
          src={imgFounder}
          alt="founder"
        />
      </section> */}

      <article className="w-full flex flex-col px-16 max-[768px]:px-6  items-center max-[768px]:text-xs">
        <h2 className="text-xl font-semibold mb-5">
          About us
        </h2>
        <p className="md:w-3/4" >
        Who are we? "Forward, Ukraine" Ministries is a 501(c)3 non-profit organization that supports Ukrainians in need. We want to take Ukraine forward in small steps. A small victory in someone's life is a victory for the great Ukraine. We want to help Ukrainians to live better, get out of poverty, get an education and get a chance to improve their lives.
We try to help people who suffer daily from military aggression, for whom every day can be the last, we have already made a large number of humanitarian trips to some of the hottest spots in Ukraine. Thanks to caring people, without whom we could not do this, we have been able to help thousands of people and we are helping now and encourage you to do the same, everyone can be useful where they are.
At the very beginning of the war, we were involved in the evacuation of people to safe places, and we also try to help people who are left without heat due to the constant shelling of the enemy - firewood, and those who are unable. to process it, our team fully prepares it for use by these people.
If you don't know how you can help Ukraine, then you've come to the right place!
        </p>
      </article>
    </main>
  );
}
