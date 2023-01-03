import React from 'react'

export default function Title(props) {
  return (
   <h2 className={`${props.selfClass} font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl `}>{props.title}</h2>
  )
}
