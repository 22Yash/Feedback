import React, { useState } from "react";
import fab from "./fabbutton.png";
import "./FabButton.css";
import fab1 from "./Fab1.png";
import fab2 from "./Fab2.png";
import fab3 from "./Fab3.png";
import fab4 from "./Fab4.png";
import Issue from "../report an issue/Issue";


function FabButton({ isRow = false }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = (component) => {
    setSelectedComponent(component);
    setShowMenu(false);
  };
  return (
    <>
      <div className="fab">
        {/* <div
        className={`fab-button ${selected ? 'selected' : ''}`}
        onClick={onClick}
      >
        <span className="fab-icon">
            <img src={fab} alt="" />
        </span>
      </div>
      {selected && <div className="fab-text">FAB Text</div>} */}
        <div className="hamburger-container">
          <div
            className={`hamburger ${showMenu ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="fab-icon">
              <img src={fab} alt="" />
            </span>
            {showMenu && (
              <div className="menu-bar">
               <ul className={`vertical-menu ${isRow ? 'row' : ''}`}>
                  <li onClick={() => handleItemClick(Issue)}>
                  <div>
                        {isRow ? (
                          <div id="img">
                            <img src={fab1} alt="" />
                          </div>
                        ) : (
                          <>
                            <div id="title1">Report an Issue</div>
                            <div id="img">
                              <img src={fab1} alt="" />
                            </div>
                          </>
                        )}
                      </div>  
                  </li>
                  <li>
                  <div>
                        {isRow ? (
                          <div id="img">
                            <img src={fab2} alt="" />
                          </div>
                        ) : (
                          <>
                            <div id="title1">Report an Issue</div>
                            <div id="img">
                              <img src={fab2} alt="" />
                            </div>
                          </>
                        )}
                      </div>
                  </li>
                  <li>
                  <div>
                        {isRow ? (
                          <div id="img">
                            <img src={fab3} alt="" />
                          </div>
                        ) : (
                          <>
                            <div id="title1">Report an Issue</div>
                            <div id="img">
                              <img src={fab3} alt="" />
                            </div>
                          </>
                        )}
                      </div>
                  </li>
                  <li>
                  <div>
                        {isRow ? (
                          <div id="img">
                            <img src={fab4} alt="" />
                          </div>
                        ) : (
                          <>
                            <div id="title1">Report an Issue</div>
                            <div id="img">
                              <img src={fab4} alt="" />
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
      </div>
      {selectedComponent && <selectedComponent />}
    </>
  );
}

export default FabButton;
