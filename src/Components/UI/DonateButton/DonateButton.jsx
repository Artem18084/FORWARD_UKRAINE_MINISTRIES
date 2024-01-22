import React from "react";

export default function DonateButton(props) {
  return (
    <button className={`bg-${props.bgColor} text-${props.color} w-${props.supportWeight} rounded-xl font-inter text-center text-xl font-semibold leading-6 tracking-normal`}>
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY"
        target="_blank"
        className=" block  px-12 py-3"
      >
        {props.helping}
      </a>
    </button>
  );
}
