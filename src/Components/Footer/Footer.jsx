import React from "react";
import imgInst from "../../images/footer/instagram.png";
import imgFace from "../../images/footer/facebook.png";
import imgPay from "../../images/footer/payPal.png";
import imgWhatsapp from "../../images/footer/whatsapp.png";
import ContactButton from "../UI/Button/ContactButton";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className=" w-full  flex flex-col  items-center justify-center bg-gradient-to-r to-slate-900 from-sky-900  text-white  py-10 max-[768px]:py-5 ">
      <hr className="w-[75vw] h-2 mb-16 max-[768px]:mb-4 max-[1024px]:mb-8" />
      <section className="flex ">
        <ContactButton img={imgInst} alt="instagram_logo" href="https://instagram.com/forward_ukraine_minestries?igshid=MDM4ZDc5MmU=" />
        <ContactButton
          img={imgFace}
          alt="facebook_logo"
          href="https://www.facebook.com/permalink.php?story_fbid=pfbid08BG4LUrwZb2oeocUvsRkK6Q3uGG2GHAkMrgPSvkrQqqBC4Gvj49s93Tr55F4j2gEl&id=102841305701116  "
        />
       <Link to={"/Donate"}>
        <ContactButton img={imgPay} alt="PayPal_logo"  donateActive={props.donateActive}/>
       </Link>
        <ContactButton img={imgWhatsapp} alt="whatsapp_logo" />
      </section>

      <h4 className="uppercase mb-6 max-[768px]:my-1 max-[768px]:text-xs">
        forward ukraine ministries
      </h4>
      <p className=" text-xs max-[768px]:text-[10px] max-[768px]:leading-[14px]">
        {" "}
        © ForwardUkraineMinistries 2022
      </p>
    </footer>
  );
}
