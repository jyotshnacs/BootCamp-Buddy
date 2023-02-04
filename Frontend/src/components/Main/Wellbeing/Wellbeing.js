import React from "react";
import "./Wellbeing.css";
import Timer from "./Timer/Timer";
import Settings from "./Settings/Settings";
import SettingsContext from "./Settings/SettingsContext";
import { useState } from "react";
import mascot from "../../../Images/look-after-yourself.png";

// Returns a function that can be used to perform a wellbeing check.
function Wellbeing() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className="wellBeingSection">
      {/* image goes here */}

      <img className="wellImg" src={mascot} alt="happy" />
      <div className="textContainer">
        {/* <h2 className="wellBeingTitle">Next wellbeing check:</h2> */}
        <div className="instructions">
          <ul>
            <h2>Set a timer for your next wellbeing check!</h2>
            <h2>
              When the timer stops, remember to check your posture, move your
              body and hydrate!
            </h2>
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
