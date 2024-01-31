import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavList from "../Header/NavList/NavList";
import imgActiveMenu from "../../images/sidebar/activeMenu.png";
import language from "../../images/sidebar/language.png";
import { setStatusSidebar } from "../../Store/Reducers/sidebarChecker";

const Sidebar = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.sidebarChecker.status);

  const handleToggleSidebar = () => {
    dispatch(setStatusSidebar(!status));
  };
  

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen flex flex-row-reverse w-screen bg-opacity-0 duration-[1500ms] ${
        status ? "translate-x-0" : "translate-x-[100%]"
      } font-sans text-base font-semibold leading-6`}
    >
      <nav className="h-full w-[266px] flex flex-col bg-white">
        <div className="flex justify-end p-8">
          <button
            onClick={handleToggleSidebar}
            className="w-[14px] h-[14px]"
            aria-label="Close sidebar"
          >
            <img src={imgActiveMenu} alt="close sidebar" />
          </button>
        </div>
        <div className="flex flex-col">
          <NavList
            sidebar=" flex-col items-start gap-4 px-8"
            text="text-[#000E30]  text-base font-normal leading-6"
          />
          <button
            className="flex items-center px-8 py-4 gap-[7px]"
            disabled
            aria-label="Change language"
          >
            <img src={language} alt="change language" />
            <p className="text-[#9AAAD7]">UA</p>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
