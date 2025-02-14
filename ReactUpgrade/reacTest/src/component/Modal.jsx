import React from 'react'
import "../styles/Modal.css"
import { IoMdInformationCircle } from "react-icons/io";


export default function Modal(props) {

   return (


      <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-icon">
          <span>ℹ️</span>

        </div>
        <p className="modal__text">{props.mensaje}</p>
        <div className="modal__buttons">
          <button onClick={props.discard} className="modal__button modal__button--red">Discard</button>
          <button onClick={props.save} className="modal__button modal__button--green ">Save</button>
        </div>
      </div>
    </div>

     
   )


  
} 