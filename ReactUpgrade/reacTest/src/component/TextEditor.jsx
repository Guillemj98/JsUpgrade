import React from 'react'
import "../styles/Modal.css"
import Header from './Header'
import { FaLessThan } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { IoMdSave } from "react-icons/io";
import ButtonIcon from './ButtonIcon';


export default function TextEditor(props) {

   return (
    <div>
        <Header>
            <ButtonIcon icon = {<FaLessThan/>}/>
            <div className='header__buttons'>
                <ButtonIcon icon = {<FiEye/>}/>
                <ButtonIcon icon = {<IoMdSave/>}/>
            </div>

        </Header>
        <div>
            <textarea value={props} placeholder='Title 1' className='textArea__title' name="titulo1" id="1"></textarea>
            <textarea value={props} placeholder="I don't like React but I have to learn"  className='textArea__subTitle' name="titulo2" id="2"></textarea>
        </div>


    </div>

 

     
   )


  
} 