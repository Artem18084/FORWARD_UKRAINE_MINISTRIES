import React from 'react'

export default function DonateBTN(props) {
  return (
   <button  onClick={()=> props.setAmount()} className=' text-xs sm:text-sm font-bold  w-[15%] h-[10vw] sm:h-[7vw]  md:h-[4.5vw] bg-gradient-to-r from-yellow-300  to-blue-600 hover:from-pink-500 hover:to-yellow-500  focus:from-pink-500 focus:to-yellow-500  rounded-xl'>{props.amount}</button>
  )
}
