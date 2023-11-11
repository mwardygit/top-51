import { useState } from 'react'
import './App.css'
import ArtistCard from './components/ArtistCard.jsx'
import GenreUpdate from './components/GenreUpdate.jsx'
import TitleBar from './components/TitleBar.jsx'
import UpdateListDisplay from './components/UpdateListDisplay.jsx'

import artistMasterData from "./top51artists.json"

const recCount=artistMasterData.length
const currentGenre = 'All'
const workingList = []

const App = () => {

  <GenreUpdate />

  return (
    <>
      <div className='top-nav-bar'>
        <TitleBar 
          currentGenre={currentGenre} 
          count={recCount}
        />
      </div>

      <div className='list-update'>
        <UpdateListDisplay
          genre={currentGenre}
          masterList={artistMasterData}
          newList={workingList}
        />
      </div>

      <div className='artist-list'>
        {/* <p>{currentList.length}</p>
        {currentList.map((artist, index) => ( */}
          {/* <ArtistCard
            key={index}
            artist={artist} */}
          {/* />   */}
        
        
      </div>

    </>
  )
}


export default App
