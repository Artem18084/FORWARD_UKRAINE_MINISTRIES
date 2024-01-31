import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusModal } from "../../../../Store/Reducers/activeModal";

export default function ReportModal(props) {
  const dispatch = useDispatch();
  const photoFiltered = useSelector((state) => state.arrayForModal.photoItem);
  const activeModal = useSelector((state) => state.activeModal.status);

  // Отримуємо реальні розміри фото
  let photoWidth = 0;
  let photoHeight = 0;
  if (photoFiltered.length > 0) {
    const photo = new Image();
    photo.src = photoFiltered[0].photo;
    photoWidth = photo.width;
    photoHeight = photo.height;
  }

  // Обчислюємо пропорції фото
  const aspectRatio = photoWidth / photoHeight;

  // Задаємо максимальні розміри фото в залежності від розміру екрану
  let maxWidth;
  let maxHeight;

  if (window.innerWidth < 768) {
    maxWidth = 300;
    maxHeight = 400;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    maxWidth = 500;
    maxHeight = 600;
  } else {
    maxWidth = 700;
    maxHeight = 800;
  }

  let modalWidth = maxWidth;
  let modalHeight = maxHeight;

  // Перевіряємо, яке з розрахунків обмежує розмір
  if (modalWidth / aspectRatio > maxHeight) {
    modalWidth = maxHeight * aspectRatio;
  } else {
    modalHeight = modalWidth / aspectRatio;
  }

  return (
    <div
      onClick={() => dispatch(setStatusModal(false))}
      className={` bg-dark-blue/[.9] fixed top-0 right-0 w-full h-screen  flex items-center  justify-center ${
        !activeModal ? "hidden" : "flex"
      }`}
    >
      <div className="">
        <img
          src={photoFiltered[0].photo}
          alt="reportPhoto"
          style={{ width: modalWidth, height: modalHeight }}
          className=""
        />
      </div>
    </div>
  );
}
