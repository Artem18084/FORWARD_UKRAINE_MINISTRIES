import React from "react";

import QRCode from "../../../images/footer/QRCode.png";
import imgLogo from "../../../images/FUMlogo.png";
import imgColageDesk from "../../../images/Donate/colageDesk.png";

export default function Donate() {
  return (
    <main className="flex flex-col items-center  w-full  h-screen  sm:h-auto text-white   bg-[#1b1d33] pt-[8vh] sm:pt-[9vw] lg:pt-[7vw] xl:pt-[5vw] relative ">
      <section className=" flex flex-col items-center justify-center px-[3vw] ">
        <img
          className=" w-full sm:w-[70vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw]"
          src={imgColageDesk}
          alt="colage"
        />
        <img
          className="w-[10vw] lg:w-[8vw] xl:w-[5vw] h-[10vw] lg:h-[8vw] xl:h-[5vw] mt-10"
          src={imgLogo}
          alt="logo"
        />
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg mt-5">
          Donate to
        </h3>
        <h1 className="uppercase mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold ">
          forward ukraine ministries
        </h1>
        <p className="w-full sm:w-[70vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] text-center text-xs sm:text-sm md:text-base lg:text-lg mt-2  ">
          The world depends on caring, sensitive people who cannot pass by, who
          are always ready to help and provide support. Thank you for your
          trust, care and participation. Your help is extremely valuable to
          those thousands of people who need it now more than ever before, this
          help will never be forgotten. May God bless you
        </p>

        <a
          className="mt-14 "
          href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY"
          target="_blank"
        >
          <button className="lg:w-40   hover:shadow-hovDonate  lg:text-xl md:w-32  w-28 md:text-lg sm:text-base  text  font-semibold   rounded-2xl  shadow-def hover:translate-y-[-.45rem] hover:text-gray-200 duration-500 bg-sky-700  ">
            {" "}
            <strong>Donate</strong> <br />
            <small>
              <span className="text-gray-700">Pay</span>
              <span className="text-blue-900">Pal</span>
            </small>
          </button>{" "}
        </a>
        <img src={QRCode} alt="QRCode" className="hidden sm:block my-5" />
      </section>
    </main>
  );
}
