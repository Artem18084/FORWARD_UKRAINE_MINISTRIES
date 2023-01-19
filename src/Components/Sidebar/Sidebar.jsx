import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavList from "../Header/NavList/NavList";

export default function Sidebar() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.sidebarChecker.status);
  return (
    <aside
      className={` w-1/3  h-screen fixed top-0 right-0 bg-[#010321] pt-[8vh] opacity-95 z-10 duration-1000 ${
        status ? "translate-x-[0]" : "translate-x-[100%]"
      } `}
    >
      <NavList
        flexSidebar=" flex-col   [&>*]:mr-[3vw] "
        marginTop="[&>*]:mt-[5vh]"
      />
    </aside>
  );
}
