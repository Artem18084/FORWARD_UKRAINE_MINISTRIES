import React from 'react'

export default function PersonPhoto(props) {
  return (
    <img className=' h-[400px] w-full  ' src={props.src} alt={props.alt} />
  )
}
