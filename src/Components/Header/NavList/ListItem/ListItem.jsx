import React from "react";
import { useDispatch } from "react-redux";
import { setStatusSidebar } from "../../../../Store/Reducers/sidebarChecker";
export default function ListItem(props) {
  const dispatch = useDispatch();

  return (
    <ul>
      <li
        onClick={() => dispatch(setStatusSidebar(false))}
        className={`hover:text-yellow-600 hover:scale-110 duration-500   `}
      >
        <button>{props.tittle} </button>
      </li>
    </ul>
  );
}
