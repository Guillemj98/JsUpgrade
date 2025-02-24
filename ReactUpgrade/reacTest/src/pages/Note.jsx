import React, {useState} from 'react'
import ButtonIcon from '../component/ButtonIcon'
import { FaSearch } from 'react-icons/fa'
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosAdd } from 'react-icons/io';
import Header from '../component/Header';
import '../styles/Note.css';
import NoteItem from '../component/NoteItem';
import ImagePlaceHolder from '../component/imagePlaceHolder';
import { Link } from 'react-router-dom';
import FilterInput from '../component/FilterInput';


export default function Note(props) {

  const [state, setState]= useState("list");
  const [searchValue, setSearchValue] = useState('');

  const notesFiltered = props.notes.filter((elem)=> elem.title.toLowerCase().includes(searchValue.toLowerCase()))


  function handlerClickFilter (){
    setState("filter")
  }
  function handlerClickFilterClose (){
    setState("list")
  }
  function handlerChangeInput(e){
    setSearchValue(e.target.value)
  }
   
   return (
      <>
      <Header>
      {state === "list" ?
      <>
        <h1 className='note__title'>Notes</h1>
        <div className='note__groupIcon'>
          <ButtonIcon icon={<FaSearch />} onClick ={handlerClickFilter} />
          <ButtonIcon icon={<FaCircleInfo />}/>
        </div>
      </>
      :
      <FilterInput onClick={handlerClickFilterClose} onChange={handlerChangeInput}/>
}
    </Header>

    <div className='note__container'>
      {props.notes.length > 0 ?
        notesFiltered.map((elem) =>  <NoteItem key={elem.id} id={elem.id} title={elem.title} description={elem.description} color={elem.color} date={elem.date}/> )
        : <ImagePlaceHolder  image="/src/assets/FondoPagina.jpg" 
        text="Create your first note!"/>}
    </div>
    <Link to="/edit" className='note__add'>
      <IoIosAdd />
    </Link>
      </>
   )


  
}

