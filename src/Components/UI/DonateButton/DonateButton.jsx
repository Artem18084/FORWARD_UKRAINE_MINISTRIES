import React from "react";

export default function DonateButton() {
  return (
    <button className="bg-[#FFF200] text-black w-40 rounded-xl font-inter text-center text-xl font-semibold leading-6 tracking-normal">
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY"
        target="_blank"
        className=" block max-w[190px] h-full px-5 py-3"
      >
        Donate
      </a>
    </button>
  );
}
