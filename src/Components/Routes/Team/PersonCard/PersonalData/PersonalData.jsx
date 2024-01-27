import React from 'react'
import PersonContact from '../RersonContact/PersonContact'
import Name from './Name/Name'

export default function PersonalData(props) {
  return (
    <div className=' flex flex-col w-[284px] pb-4 items-center gap-[21px] mt-[-60px] z-30 bg-white'>
        <PersonContact/>
        <Name name={props.name}/>
    </div>
  )
}
