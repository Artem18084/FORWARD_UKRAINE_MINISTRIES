import React from 'react'
import NavList from '../Header/NavList/NavList'

export default function Sidebar(props) {
  return (
<aside  className={` w-1/2 h-screen fixed top-0 right-0 bg-[#010321] pt-[8vh] opacity-95  duration-1000 ${props.toggleMenu ? "translate-x-[0]" : "translate-x-[100%]"} `}>
    <NavList flexSidebar ="flex-col " marginTop ="[&>*]:mt-[5vh]" setToggleMenu={props.setToggleMenu}/>
</aside>
  )
}
