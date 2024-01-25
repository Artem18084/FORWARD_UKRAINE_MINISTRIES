import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/MAin/Main";
import Reports from "./Components/Routes/Reports/Reports";
import About from "./Components/Routes/About/About";
import Team from "./Components/Routes/Team/Team";
import Sidebar from "./Components/Sidebar/Sidebar";
import React from "react";
import { useSelector } from "react-redux";

export default function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const statusSidebar = useSelector((state) => state.sidebarChecker.status);

  return (
    <div
      className={`flex  flex-col w-full h-full text-base max-[1024px]:text-sm font-normal  `}
    >
      <div className=" relative flex flex-col z-40">
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Routes>
          <Route path="/" element={<Main key="Main" />} />
          <Route path="/Reports" element={<Reports key="Reports" />} />
          <Route path="/About" element={<About key="About" />} />
          <Route path="/Team" element={<Team key="Team" />} />
        </Routes>

        <Footer />
        <div
          className={`absolute top-0 left-0   h-full w-full ${
            statusSidebar ? "bg-[#07215A] bg-opacity-90 z-50" : "hidden"
          }`}
        ></div>
      </div>

      <Sidebar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
    </div>
  );
}
