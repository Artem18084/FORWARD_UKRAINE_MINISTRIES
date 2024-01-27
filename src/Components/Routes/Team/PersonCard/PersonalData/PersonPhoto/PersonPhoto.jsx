import React from 'react'

export default function PersonPhoto(props) {
  return (
    <img className=' h-[400px] w-[343px] sm:w-[328px] md:w-[296px] l:w-[306px]  ' src={props.src} alt={props.alt} />
  )
}
