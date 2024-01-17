import React from "react";
import imgLogo from "../../../images/FUMlogo.png";
export default function NavLinkOrg() {
  return (
    <a
      className="cursor-pointer hover:text-yellow-600  duration-800"
      href={
        "https://www.facebook.com/profile.php?id=100080343590994 "
      }
      target="_blank"
      rel="external
      "
    >
      <figure className="  min-[769px]:flex-row  flex items-center">
      <img src={imgLogo} alt="logo" className="w-10 h-10" />

        <figcaption className="text-white">{"Forward Ukraine Ministries"}</figcaption>
      </figure>
    </a>
  );
}
