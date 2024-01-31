import React from "react";

export default function ContactButton(props) {
  const { href, src, alt, donateActive } = props;

  
  const handleLinkClick = () => {
    if (href.includes("viber")) {
      window.location.href = href; 
    } else if (href.includes("instagram")) {
      window.open(href, "_blank"); 
    } else if (href.includes("mailto")) {
      window.location.href = href; 
    }
  };

  return (
    <button
      onClick={donateActive}
      className="block w-[1.5rem] h-[1.5rem] hover:scale-150 duration-1000"
    >
      <a href={href} target="_blank" onClick={handleLinkClick}>
        <img src={src} alt={alt} />
      </a>
    </button>
  );
}
