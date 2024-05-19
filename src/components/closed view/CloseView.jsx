import React from 'react'
import './CloseView.css'
import FabButton from '../fab button/FabButton'


function CloseView() {
  return (
    <>
    <section>
      <nav>
        <div id="logo">
          <h3>THE 
            <span> PRODUCT </span> PLATFORM</h3>
        </div>
        <div id="account">
          <ul>
            <li>Learn</li>
            <li>Practice</li>
            <li></li>
          </ul>
        </div>
      </nav>


      <footer>
        <div id="fabbutton">
        <FabButton/>
        </div>
        
      </footer>
      
    </section>
    
    </>
  )
}

export default CloseView
