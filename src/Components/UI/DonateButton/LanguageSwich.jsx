import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../../Store/Reducers/languageReducer";
import language from "../../../images/sidebar/language.png";

export default function LanguageSwitch() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);

  const handleClick = () => {
    dispatch(toggleLanguage(!currentLanguage));
  };

  return (
    <button
      className="flex items-center px-8 py-4 gap-[7px]"
      aria-label="Change language"
      onClick={handleClick}
    >
      <img src={language} alt="change language" />
      <p className="text-[#9AAAD7]">{currentLanguage}</p>
    </button>
  );
}
