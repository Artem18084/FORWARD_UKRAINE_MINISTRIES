import React from "react";

export default function ListItem(props) {
  
 
  return (
    <li onClick={()=> props.setToggleMenu(false)} className={`hover:text-yellow-600 hover:scale-110 duration-1000 ${props.state? "text-yellow-600":" text-white"}  `}>
      <button onClick={()=>props.setState()} id={props.id} >{props.tittle} </button>
    </li>
  );
}
