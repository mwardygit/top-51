import './App.css'
import { useState } from 'react'
import DropMenu from './components/DropMenu.jsx'
import UpdateDisplay from './components/UpdateDisplay.jsx'

import artistMasterData from "./top51artists.json"
import Header from './components/Header.jsx'
import About from './components/About.jsx'
const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ]


// receives: props.genre

const App = () => {

  const [curGenre, setCurGenre]=useState("All");
  const [curPage, setCurPage]=useState(2);
  const workingList = [];
    
  // Put all matches into working array
  artistMasterData.forEach((artist) => {
    if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
  { 
  workingList.push(artist);
  }
  })

  var currentMatches = workingList.length

  if (curPage==1) {

    return (

    // Show the MAIN page
    <>
        <Header 
          onChange={setCurGenre}
          onPage={setCurPage}
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

} else {

  return (

    // Show the ABOUT page
    <>
      <About 
        onChange={setCurGenre}
        onPage={setCurPage}
        gen={curGenre}
      />
    </>

  )

}



}


export default App
