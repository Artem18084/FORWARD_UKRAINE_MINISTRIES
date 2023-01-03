import React from 'react'

export default function ImpactItem(props) {
  return (
    <div className="flex flex-col items-center">
    <img src={props.img} alt="blue_van" className=" w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem]" />
    <div className="flex flex-col items-center">
      <span className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl my-[2px] sm:my-1 md:my-2 xl:my-3">{props.subTitle} </span>{" "}
      <span className='text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl'>{props.title}</span>
    </div>
  </div>
  )
}
