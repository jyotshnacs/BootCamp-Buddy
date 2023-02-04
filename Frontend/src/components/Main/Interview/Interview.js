import React, { useState, useEffect } from "react";
import "./Interview.css";
import star from "../../../Images/stars.png";

function Interview() {
  const [text, setText] = useState(
    "Knowing more about the industry or company you're applying for is a powerful tool - Do a bit of research into the company and the industry they're in so you can dazzle them with your knowledge at the interview"
  );

  useEffect(() => {
    /**  instead of selecting from an array, 
     * need to return the result of fetch request to our API
    */
    async function fetchData() {
      /** port number hard coded - 
       * could pass in the PORT env variable?
      */
      const response = await fetch(`http://localhost:3005/api/interviewprep`);
      const data = await response.json();

      setInterval(() => {
        const question =
          data.payload[Math.floor(Math.random() * data.payload.length)].prep;
        setText(question);
        console.log(question);
      }, 10000);
    }
    fetchData();
  }, []);


  return (
    <div className="interview-div">
      <div className="header-div">
        <img src={star} alt="star" className="star-one" />
        <h1 className="header-text">Interview Prep</h1>
        <img src={star} alt="star" className="star-two" />
      </div>
      <div className="prep-div">
        <p className="prep-text">{text}</p>
      </div>
    </div>
  );
}

export default Interview;
