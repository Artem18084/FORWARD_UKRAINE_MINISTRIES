import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePosition } from "../../../../Store/Reducers/positionReportPhoto";

export default function ReportItem(props) {
  const active = useSelector(state => state.positionReportPhoto.active)
  const dispatch = useDispatch();

  return (
    <img
      onDoubleClick={() => dispatch(setActivePosition(false))}
      onClick={() => dispatch(setActivePosition(true))}
      src={props.src}
      alt={props.alt}
    />
  );
}
