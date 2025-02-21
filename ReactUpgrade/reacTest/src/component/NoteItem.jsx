import React from 'react'

import '../styles/NoteItem.css'

export default function NoteItem(props) {

   return (
    <div className='noteItem' style={{backgroundColor: props.color}}>
        <h1 className='noteItem__title'>{props.title}</h1>
        <p className='noteItem__text'>{props.description}</p>
        <p className='noteItem_date'>{props.date}</p>
    </div>
    
   )


  
}

