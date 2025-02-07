import React from 'react'

import '../styles/Header.css'
import ButtonIcon from './ButtonIcon'
export default function Header(props) {
  
    return(
        <header className='header'>
        {props.children}     
        </header>
        
    )
  
}