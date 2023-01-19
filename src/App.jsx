import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/MAin/Main";
import Reports from "./Components/Routes/Reports/Reports";
import About from "./Components/Routes/About/About";
import Team from "./Components/Routes/Team/Team";
import Donate from "./Components/Routes/Donate/Donate";
import Sidebar from "./Components/Sidebar/Sidebar";
import React from "react";

export default function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className=" flex flex-col  w-full h-full   text-xl  max-[1024px]:text-sm  	  ">
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
      <Footer />
      <Sidebar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
    </div>
  );
}
