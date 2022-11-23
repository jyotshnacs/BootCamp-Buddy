import React, { useState, useEffect } from "react";

let interviewQuestions = [
  "Tell a time when you had to work with a difficult person.",
  "How do you handle stress and pressure?",
  "What is your greatest achievement?",
  "How many tenis ball will fit in airplane?",
  "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  "Given an integer x, return true if x is palindrome integer.",
  "Given a string s, find the length of the longest substring without repeating characters.",
  "Given an array of integers nums, sort the array in ascending order.",
  "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
];
function Interview() {
  const [text, setText] = useState("");
  useEffect(() => {
    setInterval(() => {
      let randomQuestion = Math.floor(Math.random() * interviewQuestions.length);
      setText(interviewQuestions[randomQuestion]);
    }
    , 1000000);
  }, []);

  return (
    <div>
      <div>
        <h1>Interview Prep</h1>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Interview;
