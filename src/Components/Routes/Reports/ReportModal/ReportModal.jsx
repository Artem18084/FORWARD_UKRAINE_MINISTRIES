import React from "react";
import arrowRight from "../../../../images/Report/arrowRight.png";
import arrowLeft from "../../../../images/Report/arrowLeft.png";
import { useDispatch, useSelector } from "react-redux";
import imgCancel from "../../../../images/Report/cancel.png";
import { setStatusModal } from "../../../../Store/Reducers/activeModal";

export default function ReportModal(props) {
  const dispatch = useDispatch();
  const photoFilttered = useSelector((state) => state.arrayForModal.photoItem);
  const activeModal = useSelector((state) => state.activeModal.status);
  return (
    <div
      onClick={() => dispatch(setStatusModal(false))}
      className={`bg-gray-900/[.9] fixed top-0 right-0 w-full h-screen  flex items-center  justify-center ${
        !activeModal ? "hidden" : "flex"
      }`}
    >
      {/* <span className=" rounded-[50%]  bg-slate-100 flex items-center justify-center cursor-pointer mr-20">
        <img
          src={arrowLeft}
          alt="arrowLeft"
          className=" h-[3vw] w-[3vw] p-[1vw]   "
        />
      </span> */}
<div className="relative   w-[80vw] h-[70vh]  md:w-[75vw] md:h-[80vw] lg:w-[35vw] lg:h-[40vw] mt-[5rem] max-[1024px]:mt-[2rem] max-[768px]:mt-[1.5rem] ">
  <img
        src={photoFilttered[0].photo}
        alt="people"
        className="w-full h-full opacity-100  "
      />
      <img
        src={imgCancel}
        alt="cancel"
        className="h-5 w-5  absolute right-0 top-0 cursor-pointer "
      />
</div>
      
      {/* <span className=" rounded-[50%]  bg-slate-100 flex items-center justify-center ml-20 cursor-pointer">
        <img
          src={arrowRight}
          alt="arrowRight"
          className=" h-[3vw] w-[3vw] p-[1vw]  "
        />
      </span> */}
      
    </div>
  );
}
