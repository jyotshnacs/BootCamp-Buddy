import React from "react";
import { useState } from "react";
import "./QuizzMe.css";
import questionMark from "../../../Images/question.png";
import glasses from "../../../Images/glasses.png";
import snippet from "../../../Images/snippet.png";

// Creates a QuizzMe div.
function QuizzMe() {
  const [question, setQuestion] = useState("");
  const [correct, setCorrect] = useState("");
  const [incorrectA, setIncorrectA] = useState("");
  const [incorrectB, setIncorrectB] = useState("");

  // Fetches and sets the question and answers.
  async function fetchQuestion() {
    const response = await fetch(`http://localhost:3005/api/quizquestions`);
    const data = await response.json();
    setQuestion(data.payload[0].question);
    setCorrect(data.payload[0].correctanswer);
    setIncorrectA(data.payload[0].incorrectanswera);
    setIncorrectB(data.payload[0].incorrectanswerb);
  }
  fetchQuestion();

  return (
    <div className="quiz-div">
      <div className="quiz-header-div">
        <div className="glasses-div">
          <img src={glasses} alt="lappy-glasses" className="glasses" />
        </div>
        <img src={questionMark} alt="question-mark" className="question-one" />
        <h1 className="quiz-header-text">Quiz Time</h1>
        <img src={questionMark} alt="question-mark" className="question-two" />
      </div>

      <img
        className="snippet"
        alt="This content is not available"
        src={snippet}
      />
      {/* Quiz alerts are hard coded as a placeholder until component is working */}
      <div className="question-container">
        <h2 className="question-here">{question}</h2>
        <div className="answer-container">
          <p
            className="question-p"
            onClick={() => {
              alert("Correct");
            }}
          >
            {correct}
          </p>
          <p
            className="answers"
            onClick={() => {
              alert("Incorrect");
            }}
          >
            {incorrectA}
          </p>
          <p
            className="answers"
            onClick={() => {
              alert("Incorrect");
            }}
          >
            {incorrectB}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizzMe;
