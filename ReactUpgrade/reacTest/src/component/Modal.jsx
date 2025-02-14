import React from 'react'
import "../styles/Modal.css"


export default function Modal(props) {

   return (

      <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-icon">
          <span>ℹ️</span>
        </div>
        <p className="modal-text">Save changes ?</p>
        <div className="modal-buttons">
          <button onClick={props} className="discard-button">Discard</button>
          <button onClick={props} className="save-button">Save</button>
        </div>
      </div>
    </div>

     
   )


  
} 