import React from "react";
import { Link } from "react-router-dom";

export default function MyButton(props) {
  return (
    <Link to={"/Donate"}>
      <button onClick={()=> props.donateActive()}
        className={` ${props.bridgeClasses} lg:w-40 lg:h-16    lg:text-xl md:w-32 md:h-12 w-24 h-10 md:text-lg sm:text-base  text  font-semibold   rounded-3xl  shadow-def  ${props.mapClasses} hover:translate-y-[-.45rem] hover:text-gray-200 duration-700`}
      >
        Donate
      </button>{" "}
    </Link>
  );
}
