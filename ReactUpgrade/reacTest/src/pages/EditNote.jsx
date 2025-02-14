import React from 'react'
import "../styles/EditNote.css"
import Header from '../component/Header';
import { FaLessThan } from 'react-icons/fa6';
import { FiEye } from 'react-icons/fi';
import ButtonIcon from '../component/ButtonIcon';
import { GiOverlordHelm } from "react-icons/gi";
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate } from 'react-router-dom';


export default function EditNote(props) {
    
    const navigate = useNavigate

    const handlerCLickBack = ()=>{
        navigate('/')
    }

   return (
    <div className='editNote'>
        <Header>
            <ButtonIcon icon = {<FaLessThan/>} onSmash ={handlerCLickBack}/>
            <div className='note__groupIcon'>
                <ButtonIcon icon = {<FiEye/>}/>
                <ButtonIcon icon = {<GiOverlordHelm/>}/>
            </div>
        </Header>
        <div className='editNote__inputWrapper'>
            <TextareaAutosize  className='editNote__input editNote__input--title' placeholder ='Title' />
            <TextareaAutosize className='editNote__input editNote__input--description' placeholder ='I dont like React but I have to learn' minRows={3}/>
        </div>


    </div>
   )


  
} 