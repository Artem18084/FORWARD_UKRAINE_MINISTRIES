import React from 'react'

export default function ImpactItem(props) {
  return (
    <div className="flex flex-col items-center">
      <span className='flex items-center justify-center bg-[#ff9731] rounded-[50%] w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] xl:w-[4.5rem] xl:h-[4.5rem]'>
      <img src={props.img} alt="blue_van" className=" w-[.8rem] h-[.8rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.5rem] md:h-[1.5rem] lg:w-[2rem] lg:h-[2rem] xl:w-[3rem] xl:h-[3rem]" />

      </span>
    <div className="flex flex-col items-center">
      <span className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl my-[2px] sm:my-1 md:my-2 xl:my-3">{props.subTitle} </span>{" "}
      <span className='text-[8px] leading-[8px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl'>{props.title}</span>
    </div>
  </div>
  )
}
