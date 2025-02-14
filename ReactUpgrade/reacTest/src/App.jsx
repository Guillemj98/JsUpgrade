import React from 'react'
import './App.css'
import Note from './pages/Note';
import ImagePlaceHolder from './component/imagePlaceHolder';
import Modal from './component/Modal';
import EditNote from './pages/EditNote';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {

   return (
      <div className='app'>

         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Note/>}/>
               <Route path='/edit' element={<EditNote/>}/>    
            </Routes>
         </BrowserRouter>
         
      </div>
   )


  
}

