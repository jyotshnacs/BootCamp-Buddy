import React from "react";

function Wellbeing() {
  return (
    <div>
      {/*Image error - alt text contains word "image", will be removed later */}
      <img src="/" alt="happy image" />
      <div>
        <h2>Next wellbeing check:</h2>
        {/*minute timer - to be added */}
        <p>0m</p>
      </div>
      <div>
        <h2>Settings</h2>
        <h2>Reminders per day:</h2>
        {/* more radio buttons to be added for number of reminders */}
        <label>
          {/* input component to be refined later to avoid repetition.
           - should only be able to select one*/}
          <input type="radio" />1
          <input type="radio" />2
          <input type="radio" />3
          <input type="radio" />4
          <input type="radio" />5
        </label>
      </div>
      <div>
        <label>
          <h2>Timer interval:</h2>
          <input type="number" />
        </label>
      </div>
    </div>
  );
}

export default Wellbeing;
