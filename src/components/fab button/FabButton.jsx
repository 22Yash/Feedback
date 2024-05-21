import React, { useState } from "react";
import fab from "./fabbutton.png";
import "./FabButton.css";
import fab1 from "./Fab1.png";
import fab2 from "./Fab2.png";
import fab3 from "./Fab3.png";
import fab4 from "./Fab4.png";
import Issue from "../report an issue/Issue";
import Feedback from '../share feedback/Feedback'
import Suggestion from '../give suggestion/Suggesion'
import Contact from '../contact us/ContactUs'

function FabButton({ isRow = false }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = (component) => {
    setSelectedComponent(() => component);
  };

  let ComponentToRender = selectedComponent;

  return (
    <>
      <div className="fab">
        <div className="hamburger-container">
          <div
            className={`hamburger ${showMenu ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="fab-icon">
              <img src={fab} alt="" />
            </span>
          </div>
          {showMenu && !ComponentToRender && (
            <div className="menu-bar">
              <ul className={`vertical-menu ${selectedComponent ? "row" : ""}`}>
                <li onClick={() => handleItemClick(Issue)}>
                  <div id="Navigation">
                    {isRow ? (
                      <div id="img1">
                        <img src={fab1} alt="Report an Issue" />
                      </div>
                    ) : (
                      <>
                        <div id="title1">Report an Issue</div>
                        <div id="img1">
                          <img src={fab1} alt="Report an Issue" />
                        </div>
                      </>
                    )}
                  </div>
                </li>
                <li onClick={() => handleItemClick(Feedback)}>
                  <div id="Navigation">
                    {isRow ? (
                      <div id="img1">
                        <img src={fab2} alt="Share Feedback" />
                      </div>
                    ) : (
                      <>
                        <div id="title1">Share Feedback</div>
                        <div id="img1">
                          <img src={fab2} alt="Share Feedback" />
                        </div>
                      </>
                    )}
                  </div>
                </li>
                <li onClick={() => handleItemClick(Suggestion)}>
                  <div id="Navigation">
                    {isRow ? (
                      <div id="img1">
                        <img src={fab3} alt="Give Suggestion" />
                      </div>
                    ) : (
                      <>
                        <div id="title1">Give Suggestion</div>
                        <div id="img1">
                          <img src={fab3} alt="Give Suggestion" />
                        </div>
                      </>
                    )}
                  </div>
                </li>
                <li onClick={() => handleItemClick(Contact)}>
                  <div id="Navigation2">
                    {isRow ? (
                      <div id="img2">
                        <img src={fab4} alt="Contact Us" />
                      </div>
                    ) : (
                      <>
                        <div id="title1">Contact Us</div>
                        <div id="img2">
                          <img src={fab4} alt="Contact Us" />
                        </div>
                      </>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          )}  
        </div>
      </div>
      {ComponentToRender && (
        <div className="selected-component">
          <ComponentToRender />
        </div>
      )}
    </>
  );
}

export default FabButton;
