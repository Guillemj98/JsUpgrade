import React from 'react'
import "../styles/Modal.css"
import { IoMdInformationCircle } from "react-icons/io";


export default function Modal(props) {

   return (


    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-icon">
          <span><IoMdInformationCircle/></span>

        </div>
        <p className="modal__text">{props.mensaje}</p>
        <div className="modal__buttons">
          <button  className="modal__button modal__button--red">{props.buttonText.bTextRed}</button>
          <button  className="modal__button modal__button--green ">{props.buttonText.bTextGreen}</button>
        </div>
      </div>
    </div>

     
   )


  
} 