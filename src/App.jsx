import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/MAin/Main";
import Reports from "./Components/Routes/Reports/Reports";
// import About from "./Components/Routes/About/About";
import Team from "./Components/Routes/Team/Team";
import Donate from "./Components/Routes/Donate/Donate";
import Sidebar from "./Components/Sidebar/Sidebar";
import React from "react";

export default function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const routes = [
  //   { route: <Route path="/" element={<Main key="Main" />} /> },
  //   { route: <Route path="/Reports" element={<Reports key="Reports" />} /> },
  //   { route: <Route path="/About" element={<About key="About" />} /> },
  //   { route: <Route path="/Team" element={<Team key="Team" />} /> },
  //   { route: <Route path="/Donate" element={<Donate key="Donate" />} /> },
  // ];

  return (
    <div className=" flex flex-col w-full h-full text-base max-[1024px]:text-sm font-normal">
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Routes>
        {" "}
        <Route path="/" element={<Main key="Main" />} />
        <Route path="/Reports" element={<Reports key="Reports" />} />
        {/*<Route path="/About" element={<About key="About" />} />*/}
        <Route path="/Team" element={<Team key="Team" />} />
        <Route path="/Donate" element={<Donate key="Donate" />} />{" "}
      </Routes>
      <Footer />
      <Sidebar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
    </div>
  );
}
