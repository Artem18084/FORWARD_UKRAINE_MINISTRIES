import React from "react";

export default function ContactButton(props) {
  return (
    <button onClick={()=> props.donateActive()} className="w-[1.5rem] h-[1.5rem] max-[768px]:w-[.8rem]   max-[768px]:h-[.8  rem] hover:scale-150 duration-1000 [&:not(:last-child)]:mr-1">
      <a href={props.href} target="_blanck">
        <img src={props.img} alt={props.alt} />
      </a>
    </button>
  );
}
