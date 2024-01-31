import React from 'react'
import language from "../../../images/sidebar/language.png";

export default function LanguageSwich() {
  return (
    <button
    className="flex items-center px-8 py-4 gap-[7px]"
    disabled
    aria-label="Change language"
  >
    <img src={language} alt="change language" />
    <p className="text-[#9AAAD7]">UA</p>
  </button>
  )
}
