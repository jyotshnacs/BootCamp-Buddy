import React from "react";
import "./Main.css";
import Wellbeing from "./Wellbeing/Wellbeing.js";
import QuizzMe from "./QuizzMe/QuizzMe.js";
import Interview from "./Interview/Interview.js";

function Main() {
  return (
    <div>
      <Wellbeing />

      
      <div className="mainContainer">
      <QuizzMe />
      <Interview />
      
      </div>
    </div>
  );
}

export default Main;
