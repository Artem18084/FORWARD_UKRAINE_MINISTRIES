import React from "react";
import { useDispatch } from "react-redux";
import { setStatusSidebar } from "../../../../Store/Reducers/sidebarChecker";
export default function ListItem(props) {
  const dispatch = useDispatch();

  return (
    <li
      className={`${props.text}`}
      onClick={() => dispatch(setStatusSidebar(false))}
    >
      <button>{props.tittle} </button>
    </li>
  );
}
