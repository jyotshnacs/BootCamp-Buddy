import React, { useState, useEffect } from "react";

function Interview() {
  const [text, setText] = useState("");

  //useEffect(() => {
  // instead of selecting from an array, need to return the result of fetch request to our API
  async function fetchData() {
    //port number hard coded - could pass in the PORT env variable?
    const response = await fetch(`http://localhost:3005/api/interviewprep`);
    const data = await response.json();
    console.log(data);
  }

  //     const question = Math.floor(Math.random() * interviewQuestions.length);
  //     setText(interviewQuestions[question]);
  //  // }, []);

  return (
    <div>
      <div>
        <h1>Interview Prep</h1>
        <button onClick={fetchData}>Submit</button>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Interview;
