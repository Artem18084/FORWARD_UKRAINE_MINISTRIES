import React from 'react'

export default function Title(props) {
  return (
   <h2 className={` font-playfair text-3xl font-bold leading-9 tracking-tight text-left uppercase  text-${props.color}`}>{props.title}</h2>
  )
}
