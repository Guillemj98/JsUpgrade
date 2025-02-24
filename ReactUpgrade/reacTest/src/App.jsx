import React, { useState } from 'react'
import './App.css'
import Note from './pages/Note';
import ImagePlaceHolder from './component/imagePlaceHolder';
import Modal from './component/Modal';
import EditNote from './pages/EditNote';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilterInput from './component/FilterInput';


export default function App() {
   const [notes, setNotes] = useState([]);

   return (
      <div className='app'>
         

         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Note notes ={notes}/>}/>
               <Route path='/edit/:id?' element={<EditNote setNotes={setNotes} notes={notes}/>}/>    
            </Routes>
         </BrowserRouter>
         
      </div>
   )


  
}

