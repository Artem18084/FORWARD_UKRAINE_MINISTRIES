import React from "react";
import imgVertical from "../../../../images/Report/verticalDots.png";
import imgHorizontal from "../../../../images/Report/horizontalDots.png";
import { useDispatch, useSelector } from "react-redux";

import { setActivePosition } from "../../../../Store/Reducers/positionReportPhoto";

export default function Dots() {
  const activeBTN = useSelector((state) => state.positionReportPhoto.active);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setActivePosition(!activeBTN))}
      className={` w-6 h-6  max-[1024px]:w-4 max-[1024px]:h-4 max-[768px]:w-3 max-[768px]:h-3 `}
    >
      <img src={activeBTN ? imgVertical : imgHorizontal} alt="dots"></img>{" "}
    </button>
  );
}
