import React from "react";

export default function DonateButton() {
  return (
    <button className="bg-myYellow text-black w-full rounded-xl font-inter text-center text-xl font-semibold leading-6 tracking-normal">
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY"
        target="_blank"
        className=" block  px-5 py-3"
      >
        Donate
      </a>
    </button>
  );
}
