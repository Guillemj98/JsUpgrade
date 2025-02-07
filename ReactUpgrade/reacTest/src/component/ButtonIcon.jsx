import React from 'react'

import '../styles/ButtonIcon.css'
export default function ButtonIcon(props) {
  
return(
    <button className='buttonIcon'> 
        {props.children} 
    </button>
)
  
}