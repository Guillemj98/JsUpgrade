import React from 'react'
import './App.css'
import Note from './pages/Note';
import ImagePlaceHolder from './component/imagePlaceHolder';
import "./App.css"
import Modal from './component/Modal';


export default function App() {

   return (
      <div className='app'>

         <Note/>
         <Modal mensaje='¿Guardar cambios?'/>
         <Modal mensaje='¿Seguro que quieres descartar los cambios?'/>
         
       

      </div>
   )


  
}

