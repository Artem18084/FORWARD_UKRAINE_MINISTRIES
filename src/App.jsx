import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/MAin/Main";
import Reports from "./Components/Routes/Reports/Reports";
import Needs from "./Components/Routes/Needs/Needs";
import Team from "./Components/Routes/Team/Team";
import Donate from "./Components/Routes/Donate/Donate";
import Sidebar from "./Components/Sidebar/Sidebar";
import React from 'react'


 export default function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [home, setHome] = useState(false);
  const [report, setReport] = useState(false);
  const [needs, setNeeds] = useState(false);
  const [team, setTeam] = useState(false);
  const [donate, setDonate] = useState(false);

  const homeActive = () => {
    setHome(true);
    setReport(false);
    setNeeds(false);
    setTeam(false);
    setDonate(false);
  };
  const reportActive = () => {
    setHome(false);
    setReport(true);
    setNeeds(false);
    setTeam(false);
    setDonate(false);
  };
  const needsActive = () => {
    setHome(false);
    setReport(false);
    setNeeds(true);
    setTeam(false);
    setDonate(false);
  };
  const teamActive = () => {
    setHome(false);
    setReport(false);
    setNeeds(false);
    setTeam(true);
    setDonate(false);
  };
  const donateActive = () => {
    setHome(false);
    setReport(false);
    setNeeds(false);
    setTeam(false);
    setDonate(true);
  };

  // console.log(toggleMenu);
  return (
    <div className=" flex flex-col  w-full h-full   text-xl  max-[1024px]:text-sm  	  ">
      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        donateActive={donateActive}
        teamActive={teamActive}
        needsActive={needsActive}
        reportActive={reportActive}
        homeActive={homeActive}
        donate={donate}
        team={team}
        needs={needs}
        report={report}
        home={home}
      />
      <Routes>
        <Route path="/" element={<Main donateActive={donateActive} />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Needs" element={<Needs />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
      <Footer donateActive={donateActive} />
      <Sidebar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      
       
    </div>
  );
}


