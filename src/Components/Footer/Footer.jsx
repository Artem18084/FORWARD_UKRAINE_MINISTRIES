import React from "react";
import imgInst from "../../images/footer/instagram.png";
import imgFace from "../../images/footer/facebook.png";
import imgPay from "../../images/footer/payPal.png";
import imgWhatsapp from "../../images/footer/whatsapp.png";
import ContactButton from "../UI/Button/ContactButton";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className=" w-full  flex flex-col  items-center justify-center bg-gradient-to-r to-slate-900 from-sky-900  text-white  py-5 max-[768px]:py-2 ">
      <hr className="w-[75vw] h-2 mb-[1vw]" />
      <section className="flex ">
        <ContactButton
          img={imgInst}
          alt="instagram_logo"
          href="https://www.instagram.com/forward_ukraine__ministries/"
        />
        <ContactButton
          img={imgFace}
          alt="facebook_logo"
          href="https://www.facebook.com/permalink.php?story_fbid=pfbid08BG4LUrwZb2oeocUvsRkK6Q3uGG2GHAkMrgPSvkrQqqBC4Gvj49s93Tr55F4j2gEl&id=102841305701116  "
        />
      <a href="https://www.paypal.com/donate/?hosted_button_id=WYGADA44TMFFY" target="_blank">
          <ContactButton img={imgPay} alt="PayPal_logo" />
        </a>
        <a href="https://wa.me/+380631146624" target='_blank'>
           <ContactButton img={imgWhatsapp} alt="whatsapp_logo" />
        </a>
       
      </section>

      <h4 className="uppercase  max-[768px]:text-xs text-sm">
        forward ukraine ministries
      </h4>
      <p className=" text-[10px] max-[768px]:text-[5px] max-[768px]:leading-[7px]">
        {" "}
        © ForwardUkraineMinistries 2022
      </p>
    </footer>
  );
}
