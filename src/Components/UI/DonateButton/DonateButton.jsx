import React from "react";

export default function DonateButton(props) {
  return (
    <button 
      className={`bg-myYellow text-black  rounded-xl  text-center text-base font-semibold leading-6 tracking-normal transition duration-300 hover:bg-hovDonate hover:shadow-shadowDonate`}
    >
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-12 py-3"
      >
        Donate
      </a>
    </button>
  );
}


