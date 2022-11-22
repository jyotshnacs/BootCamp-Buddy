import React from "react";
import "./Main.css";
import Wellbeing from "./Wellbeing/Wellbeing.js";
import QuizzMe from "./QuizzMe/QuizzMe.js";
import Interview from "./Interview/Interview.js";

function Main() {
  return (
    <div>
      <Wellbeing />
      <QuizzMe />
      <Interview />
    </div>
  );
}

export default Main;
