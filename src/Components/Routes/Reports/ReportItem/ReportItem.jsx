import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusModal } from "../../../../Store/Reducers/activeModal";
import { setArrayForModal } from "../../../../Store/Reducers/arrayForModal";
import { setActivePosition } from "../../../../Store/Reducers/positionReportPhoto";

export default function ReportItem(props) {
  const dispatchPhoto = useDispatch();
  const dispatchModal = useDispatch();
  const selectItemSetPosition = () => {
    const idToFilter = +props.id;

    const filteredArrayForModal = props.reportPhoto.filter(
      (item) => item.id == idToFilter
    );
    dispatchPhoto(setArrayForModal(filteredArrayForModal));
    dispatchModal(setStatusModal(true));
  };

  return (
    <img
      onDoubleClick={() => dispatch(setActivePosition(false))}
      onClick={() => selectItemSetPosition()}
      src={props.src}
      alt={props.alt}
      id={props.id}
    />
  );
}
