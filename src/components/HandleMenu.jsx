import React from 'react'
import App from '../App.jsx'
import UpdateDisplay from './UpdateDisplay.jsx'

import artistMasterData from "../top51artists.json"

// handler for drop-down menu
// determine current genre setting, then pass along
// receives: prop = menu event

const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ] 
var curGenre = 'All'
var workingList=[];

const HandleMenu = (props) => {
  
  console.log('Start of HandleMenu component')
  console.log(`HMenu1: `+props)

  if (artistGenres.includes(props)) {
    curGenre = props
    console.log(`HMenu2: valid props: `+curGenre)
  } else {
    curGenre = props.genre
    console.log(`HMenu3: Invalid props: `+curGenre)
  }
  // by this point we know the curGenre
  
  // const currentGenre=(document.getElementById(`#dropdown`).value)

  console.log(`b4 HMenu update: ` + workingList.length 
  + ` / ` + curGenre)


   // create new array based on genre
    artistMasterData.forEach((artist) => {
      if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
  { 
    workingList.push(artist);
  }
  })
  console.log(`aftr HMenu update: ` + workingList.length 
  + ` / ` + curGenre)

  


  return (
    
      <UpdateDisplay
        genre={curGenre}
      />
    
  )
}

export default HandleMenu
