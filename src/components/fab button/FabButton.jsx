import React from 'react'
import fab from './fabbutton.png'
import './FabButton.css'

function FabButton({ selected, onClick }) {
  return (
    <>
     <div className="fab">
      <div
        className={`fab-button ${selected ? 'selected' : ''}`}
        onClick={onClick}
      >
        <span className="fab-icon">
            <img src={fab} alt="" />
        </span>
      </div>
      {selected && <div className="fab-text">FAB Text</div>}
    </div>
    </>
  )
}

export default FabButton
