import React from "react";
import imgLogo from "../../../images/FUMlogo.png";
export default function NavLinkOrg() {
  return (
    <a
      className="cursor-pointer hover:text-yellow-600  duration-800"
      href={
        "https://www.facebook.com/permalink.php?story_fbid=pfbid08BG4LUrwZb2oeocUvsRkK6Q3uGG2GHAkMrgPSvkrQqqBC4Gvj49s93Tr55F4j2gEl&id=102841305701116  "
      }
      target="_blank"
      rel="external
      "
    >
      <figure className=" max-[768px]:flex-row-reverse  min-[769px]:flex-row  flex items-center">
        <figcaption className="">{"Forward Ukraine Ministries"}</figcaption>

        <img src={imgLogo} alt="logo" className="w-10 h-10" />
      </figure>
    </a>
  );
}
