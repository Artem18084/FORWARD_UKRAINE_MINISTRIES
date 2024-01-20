import React from "react";
export default function NavLinkOrg(props) {
  return (
    <a
      className="cursor-pointer "
      href="https://www.facebook.com/profile.php?id=100080343590994"
      target="_blank"
      rel="external"
    >
      <figure className="flex items-center justify-center gap-3  min-w-[306px] text-center">
        <img src={props.src} alt="logo" className="max-w-10 h-10" />
        <figcaption className=" h-[24px] text-center">
          Forward Ukraine Ministries
        </figcaption>
      </figure>
    </a>
  );
}
