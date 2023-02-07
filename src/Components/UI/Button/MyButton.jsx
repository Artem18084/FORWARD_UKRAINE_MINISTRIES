import React from "react";
import { Link } from "react-router-dom";

export default function MyButton(props) {
  return (
    <a href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY" target="_blank">
      <button onClick={()=> props.donateActive()}
        className={` ${props.bridgeClasses} lg:w-52 lg:h-16  ${props.mtPhone} xl:mt-[3.5rem]  ${props.mt} lg:text-xl md:w-40 md:h-12 w-48 h-12 md:text-lg sm:text-base  text  font-semibold   rounded-3xl  shadow-def z-10 ${props.mapClasses} hover:translate-y-[-.45rem] hover:text-gray-200 duration-700`}
      >
        Donate
      </button>{" "}
    </a>
    
    // <Link to={"/Donate"}>
    //   <button onClick={()=> props.donateActive()}
    //     className={` ${props.bridgeClasses} lg:w-52 lg:h-16  mt-[10rem] md:mt-[3.5rem]  lg:text-xl md:w-40 md:h-12 w-48 h-12 md:text-lg sm:text-base  text  font-semibold   rounded-3xl  shadow-def z-10 ${props.mapClasses} hover:translate-y-[-.45rem] hover:text-gray-200 duration-700`}
    //   >
    //     Donate
    //   </button>{" "}
    // </Link>
  );
}
