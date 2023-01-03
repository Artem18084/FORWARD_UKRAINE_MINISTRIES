import React from "react";

export default function ContactButton(props) {
  return (
    <button onClick={()=> props.donateActive()} className="w-[2rem] h-[2rem] max-[768px]:w-[1rem]   max-[768px]:h-[1rem] hover:scale-150 duration-1000 [&:not(:last-child)]:mr-1">
      <a href={props.href} target="_blanck">
        <img src={props.img} alt={props.alt} />
      </a>
    </button>
  );
}
