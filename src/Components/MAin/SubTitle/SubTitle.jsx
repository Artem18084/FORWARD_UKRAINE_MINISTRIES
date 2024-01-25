import React from 'react'

export default function SubTitle(props) {
  return (
   <h2 className={` font-playfair text-2xl font-bold leading-9 tracking-tight text-left uppercase  text-${props.color}`}>{props.title}</h2>
  )
}
