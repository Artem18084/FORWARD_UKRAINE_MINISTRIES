import React from "react";

export default function ContactButton(props) {
  return (
    <button
      onClick={() => props.donateActive()}
      className=" block w-[1.5rem] h-[1.5rem] hover:scale-150 duration-1000 "
    >
      <a href={props.href} target="_blanck">
        <img src={props.src} alt={props.alt} />
      </a>
    </button>
  );
}
