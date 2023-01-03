import React from 'react'

export default function PersonPhoto(props) {
  return (
    <img className='   w-[4rem] h-[4rem] min-[500px]:w-[5rem] min-[500px]:h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[7rem] md:h-[7rem] lg:w-[10rem]  lg:h-[10rem] xl:w-[12rem] xl:h-[12rem] rounded-[50%] mb-[1.1rem] sm:mb-[1.8rem] md:mb-[2rem] lg:mb-[2.5rem] xl:mb-4rem]  ' src={props.src} alt={props.alt} />
  )
}
