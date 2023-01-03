import React from 'react'
import Title from '../Title/Title'

export default function FirstArticleOnSection(props) {
  return (
    <article className={` ${props.selfClassFlexReverse} flex md:flex-row ${props.selfReverse} flex-col  items-center`}>
    <div className={` flex flex-col w-full md:w-[50%] items-center pb-[1rem] ${props.selfClassPaddingP} `}>
      <h4 className={` ${props.selfClassHidden} pb-2 text-xs text-gray-400`}>October-10-2022</h4>
      <Title title={props.title} selfClass="pb-2 sm:pb-4 md:pb-6 lg:pb-8" />
      <p className={`${props.selfClassMarginImg}`}>
       {props.massage}
      </p>
    </div>
    <img className={`w-full md:w-[50%] rounded-xl  `} src={props.img} alt={props.alt} />
  </article>
  )
}
