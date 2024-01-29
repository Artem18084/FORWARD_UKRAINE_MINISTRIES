import React from 'react'

export default function PersonPhoto(props) {
  return (
    <div className="w-[300px] h-[380px]  overflow-hidden">
      <img className=' h-full w-full object-cover   ' src={props.src} alt={props.alt}/>
    </div>
  )
}