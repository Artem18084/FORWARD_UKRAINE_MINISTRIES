import React from "react";

export default function SupportButton(props) {
  console.log(props.hoverBtn);
  return (
    <button 
      className={`bg-mainBlue text-white   rounded-xl  text-center text-base font-semibold leading-6 tracking-normal transition duration-300 hover:bg-hovSupport`}
    >
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-12 py-3"
      >
        Support
      </a>
    </button>
  );
}
