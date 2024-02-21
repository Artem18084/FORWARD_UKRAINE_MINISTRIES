import React from "react";
import { useSelector } from "react-redux";

export default function DonateButton(props) {
  const currentTextData = useSelector((state) => state.language.textJson);
  const donate = currentTextData.ui.donate;
  return (
    <button
      className={`bg-myYellow text-black  rounded-xl  font-sans text-center text-base font-semibold leading-6 tracking-normal transition duration-300 hover:bg-hovDonate `}
    >
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-12 py-3"
      >
        {donate}
      </a>
    </button>
  );
}
