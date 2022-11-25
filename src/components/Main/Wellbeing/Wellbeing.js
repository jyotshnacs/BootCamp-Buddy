import React from "react";
import "./Wellbeing.css";
import Timer from "./Timer/Timer";
import Settings from "./Settings/Settings";
import SettingsContext from "./Settings/SettingsContext";
import { useState } from "react";
import mascot from "../../../Images/look-after-yourself.png";

function Wellbeing() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className="wellBeingSection">
      {/* image goes here */}

      <img className="wellImg" src={mascot} alt="happy" />
      <div className="textContainer">
        <h2 className="wellBeingTitle">Next wellbeing check:</h2>
        <div className="instructions">
          <ul>
            <li>
              This app aims to help people prepare for interviews in the tech
              industry.
            </li>
            <li>
              To start the app select setting and select the time you want to
              study for we advice 45 minutes.
            </li>
            <li>
              The app will then start a timer and when the timer is over it will
              notify you to change your posture or drink water
            </li>
            <li>
              You will find Every 30 minutes a new interview question will
              appear.
            </li>
            <li>
              You can also select a week and review your week by answering
              questions.
            </li>
          </ul>
        </div>
      </div>
      <div className="timerContainer">
        {/*minute timer - to be added */}
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}
        >
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </div>
    </div>
  );
}

export default Wellbeing;
