import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { setFlowAmountMoney } from '../../../../Store/Reducers/inputMoneyAmount'

export default function DonateOther(props) {
  const dispatch = useDispatch()
  const flowAmountDonate = useSelector(state => state.inputMoneyAmount.flowAmount)
  
  return (
    <button onClick={()=> dispatch(setFlowAmountMoney(!flowAmountDonate))} className='text-xs font-bold sm:text-sm w-[15%] h-[10vw] sm:h-[7vw] md:h-[4.5vw]  bg-gradient-to-r from-yellow-300  to-blue-600  focus:from-pink-500 focus:to-yellow-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl'>{props.name}</button>

  )
}
