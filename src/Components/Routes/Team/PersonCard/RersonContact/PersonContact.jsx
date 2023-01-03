import React from "react";

export default function PersonContact(props) {
 
  return (
    <a
      className="  [&:not(:last-child)]:mr-[.5vw] "
      href={props.href}
      target="_blank"
      rel="noreferrer"  
    >
      
        <img
          className=""
          src={props.src}
          alt={props.alt}
        />
      
    </a>
  );
}
