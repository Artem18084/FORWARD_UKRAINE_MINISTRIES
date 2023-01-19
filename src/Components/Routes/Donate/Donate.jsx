import React, { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import imgLogo from "../../../images/FUMlogo.png";
import imgColageDesk from "../../../images/Donate/colageDesk.png";
import DonateBTN from "../../UI/Button/DonateBTN/DonateBTN";
import DonateOther from "../../UI/Button/DonateBTN/DonateOther";
import { useDispatch, useSelector } from "react-redux";
import {
  setAmountMoney,
  setFlowAmountMoney,
} from "../../../Store/Reducers/inputMoneyAmount";
import MyButton from "../../UI/Button/MyButton";
export default function Donate() {
  const amountDonate = useSelector((state) => state.inputMoneyAmount.amount);
  const flowAmountDonate = useSelector(
    (state) => state.inputMoneyAmount.flowAmount
  );
  const dispatch = useDispatch();

  const amount50 = () => {
    dispatch(setFlowAmountMoney(false));
    dispatch(setAmountMoney(50));
  };

  const amount100 = () => {
    dispatch(setFlowAmountMoney(false));
    dispatch(setAmountMoney(100));
  };
  const amount200 = () => {
    dispatch(setFlowAmountMoney(false));
    dispatch(setAmountMoney(200));
  };

  // // This values are the props in the UI
  // const amount = amountDonate ? amountDonate : flowAmountDonate ;
  // const currency = "USD";
  // const style = { layout: "vertical", color: "blue" };

  // // Custom component to wrap the PayPalButtons and handle currency changes
  // const ButtonWrapper = ({ currency, showSpinner }) => {
  //   // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  //   // This is the main reason to wrap the PayPalButtons in a new component
  //   const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  //   useEffect(() => {
  //     dispatch({
  //       type: "resetOptions",
  //       value: {
  //         ...options,
  //         currency: currency,

  //       },
  //     });
  //   }, [currency, showSpinner]);

  //   return (
  //     <>
  //       {showSpinner && isPending && <div className="spinner" />}
  //       <PayPalButtons
  //         style={style}
  //         disabled={false}
  //         forceReRender={[amount, currency, style]}
  //         fundingSource={undefined}
  //         createOrder={(data, actions) => {
  //           return actions.order
  //             .create({
  //               purchase_units: [
  //                 {
  //                   amount: {
  //                     currency_code: currency,
  //                     value: amount,
  //                   },
  //                 },
  //               ],
  //             })
  //             .then((orderId) => {
  //               // Your code here after create the order
  //               return orderId;
  //             });
  //         }}
  //         onApprove={function (data, actions) {
  //           return actions.order.capture().then(function () {
  //             // Your code here after capture the order
  //           });
  //         }}
  //       />
  //     </>
  //   );
  // };
  // bg-[#010321]
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
        {/* <div className="w-[80vw] sm:w-[50vw] md:w-[30vw] flex justify-around mt-14 mb-4 sm:mt-15 text-black">
          <DonateBTN setAmount={amount50} amount="$50" />

          <DonateBTN setAmount={amount100} amount="$100" />
          <DonateBTN setAmount={amount200} amount="$200" />
          <DonateOther name="Other" />
        </div> */}
        <a
          className="my-14 "
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

        {/* <input
          value={flowAmountDonate}
          onChange={(e) => dispatch(setFlowAmountMoney(e.target.value))}
          onKeyDown={(e) =>
            ["ArrowUp", "ArrowDown", "e", "E", "+", "-", ".", ","].includes(
              e.key
            ) && e.preventDefault()
          }
          className={`${
            flowAmountDonate
              ? "block font-bold w-[80%] sm:w-3/4 md:w-[85%] h-[7vw] sm:h-[6vw] md:h-[4vw]  mb-4 sm:mb-8 text-black rounded-lg  bg-gradient-to-r from-blue-500 to-yellow-500  focus:from-pink-500 focus:to-yellow-500  hover:from-pink-500 hover:to-yellow-500"
              : "hidden"
          }`}
          type="number"
          name=""
        /> */}

        {/* <PayPalScriptProvider
          options={{
            "client-id": "test",
            components: "buttons",
            currency: "USD",
          }}
        >
          <ButtonWrapper currency={currency} showSpinner={false} />
        </PayPalScriptProvider> */}
      </section>
    </main>
  );
}
