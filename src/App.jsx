import './App.css'
import { useState } from 'react'
import DropMenu from './components/DropMenu.jsx'
import UpdateDisplay from './components/UpdateDisplay.jsx'

import artistMasterData from "./top51artists.json"
import Header from './components/Header.jsx'
const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ]


// receives: props.genre

const App = () => {

  const [curGenre, setCurGenre]=useState("All");
  const workingList = [];
    
  // Put all matches into working array
  artistMasterData.forEach((artist) => {
    if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
  { 
  workingList.push(artist);
  }
  })

  var currentMatches = workingList.length

    return (
    <>
        <Header 
          onChange={setCurGenre}
          allGenres={artistGenres}
          currentMatches={currentMatches}
        />

        <div id='flex-list'>
          <UpdateDisplay
            artists={workingList}
          />
        </div>
    </>
    )
}


export default App
