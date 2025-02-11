import React from 'react'
import '../styles/ImagePlaceHolder.css'



export default function ImagePlaceHolder(props) {

   return (
    <div className='imagePlaceHolder'>
        <img className='imagePlaceHolder__image' src={props.image} alt="Imagen que no se cual es" />
        <p className='imagePlaceHolder__text'>{props.text}</p>
    </div>
   )


  
}

