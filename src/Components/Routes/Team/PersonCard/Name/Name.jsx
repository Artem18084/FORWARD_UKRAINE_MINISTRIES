import React from 'react'

export default function Name(props) {
  return (
    <h3  id={props.id} className='  font-medium xl:text-2xl lg:text-sm md:text-[1rem] sm:text-[1rem] xs:text-[.8rem] text-[.65rem]	 text-black xl:mb-5 lg:mb-3 md:mb-2  mb-0    whitespace-nowrap	' >{props.name}</h3>
  )
}
