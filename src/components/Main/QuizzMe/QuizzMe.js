import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";

function QuizzMe() {
  const [input, setInput] = useState("");
  const handleMenuOne = () => {
    console.log("clicked 1");
  };

  const handleMenuTwo = () => {
    console.log("clicked 2");
  };
  const handleMenuThree = () => {
    console.log("clicked 3");
  };
  const handleMenuFour = () => {
    console.log("clicked 4");
  };

  const rightAnswer = () => {
    if (input === "1") {
      alert("Correct");
    }else{
      alert("Wrong");
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  let answers = [1, 2, 3, 4];
  return (
    <div>
      <Dropdown
        trigger={<button>Select Week</button>}
        menu={[
          <button onClick={handleMenuOne}>Week 1</button>,
          <button onClick={handleMenuTwo}>Week 2</button>,
          <button onClick={handleMenuThree}>Week 3</button>,
          <button onClick={handleMenuFour}>Week 4</button>,
        ]}
      />
      <div>
        <img
          src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyE/giphy.gif"
          alt="gif"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          repellat obcaecati corrupti eos, adipisci natus laudantium fuga quo
          totam voluptatibus, quidem provident est dicta ducimus quis modi unde
          architecto itaque!
        </p>
      </div>
      <div>
        {answers.map((answer, key) => (
          <div key={key}>
            <input
              type="radio"
              id={answer}
              name="wrong answer"
              value={answer}
              onChange={handleChange}
            />
            <label htmlFor={answer}>
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            </label>
          </div>
        ))}
        <button onClick={rightAnswer} >Next</button>
      </div>
    </div>
  );
}

export default QuizzMe;
