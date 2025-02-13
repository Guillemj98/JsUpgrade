import React from 'react'
import "../styles/Modal.css"


export default function Modal(props) {

   return (
<<<<<<< HEAD
      <div className='imagePlaceholder'>
      <img className='imagePlaceholder_image' src="/Users/charlygoomezz/Desktop/ReactDI/reactDI/src/assets/a0c6e54564983ed54d21877a26ecceb1.jpg" alt="Imagen" />
      <p className='imagePlaceholder_text'></p>
  </div>
=======
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
>>>>>>> e0ee44b709a1eb02dd8a7df6c806c825e7d8ef5c
     
   )


  
}