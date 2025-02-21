import React from 'react'
import "../styles/FilterInput.css";
import { IoClose } from "react-icons/io5";


export default function FilterInput(props) {
   
   return (
    <div className='filterInput'>
        <input onChange={(e)=> props.onChange(e)} className='filterInput__input' type="text" placeholder='Search by the keyword' />
        <button onClick={props.onClick} className='filterInput__button'><IoClose /></button>
    </div>
     
   )


  
}

