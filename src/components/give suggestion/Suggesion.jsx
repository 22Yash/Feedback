import React, { useState } from "react";

import "./Suggesion.css";
import FabButton from "../fab button/FabButton";

function Suggesion() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const options = [
    "Concept cards",
    "Interview Questions",
    "Practice Questions",
    "Quizzes",
  ];
  return (
    <>
      <div id="SuggestionCard">
        <div id="suggestion">
          <div id="header">
            <p>Share your Suggestions with us for a chance to earn rewards!</p>
          </div>
          <div id="divider"></div>

          <div id="issueContent">
            <div id="chooseSection">
              <div className="chooseLabel">
                <h5>Choose a section</h5>
              </div>
              <div className="dropdown">
                <select value={selectedOption} onChange={handleChange}>
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div id="descriptionSection">
              <div id="label">
                <h5>Describe the issue in detail</h5>
              </div>
              <div id="Description">
                <input type="text" name="" id="" />
              </div>
              <div id="email">
                <button type="submit">
                  <p>Submit</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="fab">
        <FabButton isRow={true}/>
        </div>
        
      </div>
    </>
  );
}

export default Suggesion;
