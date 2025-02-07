import React from 'react'
import ButtonIcon from '../component/ButtonIcon'
import { FaSearch } from 'react-icons/fa'
import { FaCircleInfo } from "react-icons/fa6";
import Header from '../component/Header';
import '../styles/Note.css'
import NoteItem from '../component/NoteItem';

export default function Note() {

   return (
      <>
      <Header>
         <h1 className='note__title'>Notes</h1>
         <div className='note__groupIcon'>
            <ButtonIcon>
               <FaSearch/>
            </ButtonIcon>
            <ButtonIcon>
               <FaCircleInfo/>
            </ButtonIcon>
         </div>
      </Header>
      <div className= "note__container">
         <NoteItem titulo={} description={}/>
         <NoteItem/>
         <NoteItem/>
         <NoteItem/>
      </div>
      
      </>
   )


  
}

