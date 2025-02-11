import React from 'react'
import ButtonIcon from '../component/ButtonIcon'
import { FaSearch } from 'react-icons/fa'
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosAdd } from 'react-icons/io';
import Header from '../component/Header';
import '../styles/Note.css'
import NoteItem from '../component/NoteItem';
import ImagePlaceHolder from '../component/imagePlaceHolder';

export default function Note() {
const data =[]
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
         { data.lenght !==0 ?  <NoteItem titulo={"sdfsf"} description={"asdad"}/> : <ImagePlaceHolder image='src/assets/FondoPagina.jpg' text='Crea tu primera nota'/>}
         
      </div>
      <button className='note__add'>
         <IoIosAdd/>
      </button>
      
      </>
   )


  
}

