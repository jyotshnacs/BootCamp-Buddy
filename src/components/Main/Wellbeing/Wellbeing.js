import React from "react";
import "./Wellbeing.css";
import Timer from "./Timer/Timer";
import Settings from "./Settings/Settings";
import SettingsContext from "./Settings/SettingsContext";
import { useState } from "react";

function Wellbeing() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className="wellBeingSection">
       {/* image goes here */}
       <img src="/" alt="happy" />
      <h2 className="wellBeingTitle">Next wellbeing check:</h2>
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
