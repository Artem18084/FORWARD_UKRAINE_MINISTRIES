

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusModal } from "../../../../Store/Reducers/activeModal";
import { setArrayForModal } from "../../../../Store/Reducers/arrayForModal";
import { setActivePosition } from "../../../../Store/Reducers/positionReportPhoto";

export default function ReportItem(props) {
  const dispatchPhoto = useDispatch();
  const dispatchModal = useDispatch();

  // Функція для обробки кліку на елемент звіту
  const selectItemSetPosition = () => {
    const idToFilter = +props.id;

    // Фільтрація масиву фото для модального вікна за id
    const filteredArrayForModal = props.reportPhoto.filter(
      (item) => item.id === idToFilter // Використовуємо строгу перевірку ===
    );

    dispatchPhoto(setArrayForModal(filteredArrayForModal));

    dispatchModal(setStatusModal(true));
  };

  return (
    <div className='w-[300px] h-[380px] rounded-[12px] overflow-hidden  my-3 mx-3'>
      <img
        className='h-full w-full object-cover'
        onClick={() => selectItemSetPosition()} 
        src={props.src}
        alt={props.alt}
        id={props.id}
      />
    </div>
  );
}
