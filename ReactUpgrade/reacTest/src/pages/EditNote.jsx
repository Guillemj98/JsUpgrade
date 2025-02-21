import React, {useState, useId} from 'react'
import "../styles/EditNote.css"
import Header from '../component/Header';
import { FaLessThan } from 'react-icons/fa6';
import { FiEye } from 'react-icons/fi';
import ButtonIcon from '../component/ButtonIcon';
import { GiOverlordHelm } from "react-icons/gi";
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate } from 'react-router-dom';
import colors from '../assets/colors';

export default function EditNote(props) {
    
    const navigate = useNavigate();
    const [title, setTitle]= useState('');
    const [description, setDescription]= useState('');
    const id = useId();

    const handlerCLickBack = ()=>{
        navigate('/')
    }
    const handlerChangeTitle = (e)=>{
        setTitle(e)
    }
    const handlerChangeDescription = (e)=>{
        setDescription(e)
    }
    const handlerClickSave = ()=>{
        const note ={id , date: new Date().toLocaleString('es-ES'), title: title, description: description, color : colors[props.notes.length % colors.length]}
        props.setNotes([note, ...props.notes]);
        navigate('/')
    }

   return (
    <div className='editNote'>
        <Header>
            <ButtonIcon icon = {<FaLessThan/>} onClick ={handlerCLickBack}/>
            <div className='note__groupIcon'>
                <ButtonIcon icon = {<FiEye/>}/>
                <ButtonIcon icon = {<GiOverlordHelm/>}
                onClick={handlerClickSave}
                />
            </div>
        </Header>
        <div className='editNote__inputWrapper'>
            <TextareaAutosize  
            className='editNote__input editNote__input--title'
            placeholder ='Title' 
            onChange={(e) => handlerChangeTitle(e.target.value)}
            value={title}
            />

            <TextareaAutosize 
            className='editNote__input editNote__input--description'
            placeholder ='I dont like React but I have to learn'
            minRows={3}
            onChange={(e) => handlerChangeDescription(e.target.value)}
            value={description}
            />

        </div>


    </div>
   )


  
} 