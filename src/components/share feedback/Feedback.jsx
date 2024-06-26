import React, { useState } from "react";
import './feedback.css'
import FabButton from "../fab button/FabButton";

function Feedback() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    const options = ["Concept cards", "Interview Questions", "Practice Questions", "Quizzes"];
  return (
    <>
    <div id="feedback">
    
        <div id="card">
        <div id="header">
          <p>Let us know your Feedback about us!</p>
        </div>
        <div id="divider"></div>
        <div id="feedbackContent">

            <div id="input">

            </div>
            <div id="button">
                <button type="submit">
                  <p>Submit</p></button>
            </div>
          
        </div>  
        <div id="fab">
        <FabButton isRow={true}/>
        </div>
        </div>

        
        
    </div>
    
    
    </>
  )
}

export default Feedback
