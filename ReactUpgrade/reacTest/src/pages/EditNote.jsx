import React, {useState, useId} from 'react'
import "../styles/EditNote.css"
import Header from '../component/Header';
import { MdOutlineEdit } from "react-icons/md";
import { GiBombingRun } from "react-icons/gi";
import { FaLessThan } from 'react-icons/fa6';
import { FiEye } from 'react-icons/fi';
import ButtonIcon from '../component/ButtonIcon';
import { GiOverlordHelm } from "react-icons/gi";
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate, useParams } from 'react-router-dom';
import colors from '../assets/colors';

export default function EditNote(props) {
    const params =useParams(); 
    const idNote = params.id;
    
    const noteSelected = props.notes.find((elem)=> elem.id === idNote)
    
    const navigate = useNavigate();
    const [title, setTitle]= useState(noteSelected ?noteSelected.title : '');
    const [description, setDescription]= useState(noteSelected ? noteSelected.description:'');
    const [isEditable, setIsEditable]= useState(!noteSelected);
    const [isRemovable, setIsRemovable]= useState(noteSelected ? true: false);
    const id = useId();

  

    const handlerCLickBack = ()=>{
        navigate('/')
    }
    const handlerChangeTitle = (e)=>{
        setTitle(e)
        setIsRemovable(false)
    }
    const handlerChangeDescription = (e)=>{
        setDescription(e)
        setIsRemovable(false)
    }
    const handlerClickSave = ()=>{
        if(noteSelected){
            const notesUnmodified = props.notes.filter(elem=> elem.id !== idNote)
            const notes ={id: noteSelected.id , date: noteSelected.date, title, description, color : noteSelected.color}
            props.setNotes([notes, ...notesUnmodified]); 

        }else{
            const note ={id , date: new Date().toLocaleString('es-ES'), title: title, description: description, color : colors[props.notes.length % colors.length]}
            props.setNotes([note, ...props.notes]);
            
        }
        navigate('/')
    }
    const handlerClickRemove = ()=>{
        if(noteSelected){
        const notesUnmodified = props.notes.filter(elem=> elem.id !== idNote)
        props.setNotes([...notesUnmodified])
        navigate('/')
        }

    }

   return (
    <div className='editNote'>
        <Header>
            <ButtonIcon icon = {<FaLessThan/>} onClick ={handlerCLickBack}/>
            <div className='note__groupIcon'>
                <ButtonIcon onClick={()=>setIsEditable(!isEditable)} icon = {isEditable? <FiEye/>: <MdOutlineEdit/>}/>
                <ButtonIcon icon = {isRemovable ?<GiBombingRun/> :<GiOverlordHelm/> }
                onClick={isRemovable ? handlerClickRemove: handlerClickSave }
                />
            </div>
        </Header>
        <div className='editNote__inputWrapper'>
            <TextareaAutosize  
            className='editNote__input editNote__input--title'
            placeholder ='Title' 
            onChange={(e) => handlerChangeTitle(e.target.value)}
            value={title}
            disabled={!isEditable}
            />

            <TextareaAutosize 
            className='editNote__input editNote__input--description'
            placeholder ='I dont like React but I have to learn'
            minRows={3}
            onChange={(e) => handlerChangeDescription(e.target.value)}
            value={description}
            disabled={!isEditable}
            />

        </div>


    </div>
   )


  
} 