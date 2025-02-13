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
   const data = [{"id":"50158ad0-df19-45a7-b15d-c503b5585e73","titulo":"Class Trip, The (La classe de neige)","description":"sdansdjASDHAJSD10u38ujfdouh98qwehf98u20ufr082u0ru023ur","color":"Turquoise"},
      {"id":"0edd520e-6d0c-4200-beaf-d34e92f08da5","titulo":"Chicks with Sticks","description":"sdansdjASDHAJSD10u38ujfdouh98qwehf98u20ufr082u0ru023ur","color":"Purple"},
      {"id":"979029f8-7624-4e70-92c0-a4dc7f14c95a","titulo":"Easy Life, The (Il Sorpasso)","description":"sdansdjASDHAJSD10u38ujfdouh98qwehf98u20ufr082u0ru023ur","color":"Indigo"},
      {"id":"55a1fc59-f191-46af-994a-2f6258cbec81","titulo":"From Morn to Midnight (Von morgens bis Mitternacht)","description":"sdansdjASDHAJSD10u38ujfdouh98qwehf98u20ufr082u0ru023ur","color":"Crimson"},
      {"id":"e64fea76-8a1d-47a6-a64a-26185ba673ee","titulo":"Englishman in New York, An","description":"sdansdjASDHAJSD10u38ujfdouh98qwehf98u20ufr082u0ru023ur","color":"Turquoise"}]
   return (
      <>
      <Header>
      <h1 className='note_tittle'>Notes</h1>
      <div className='note_groupIcon'>
        <ButtonIcon icon={<FaSearch />}/>
        <ButtonIcon icon={<FaInfoCircle />}/>
      </div>
    </Header>
    <div className='note_contanier'>
      {data.length === 0 ?
        data.map(elem =>  <NoteItem key={elem.id}titulo={elem.titulo} description={elem.description} color={elem.color}/> )
        : <ImagePlaceholder  image="/src/assets/charmander.jpg" 
        text="Create your first note!"/>}
    </div>
    <button className='note_add'>
      <IoIosAdd />
    </button>
      </>
   )


  
}

