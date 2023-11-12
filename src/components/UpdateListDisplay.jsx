import React from 'react'
import App from '../App.jsx'
import TitleBar from './TitleBar.jsx'
import GenreUpdate from './GenreUpdate.jsx'
import artistMasterData from "../top51artists.json"


// receives props.genre & props.masterList

// maps through artistMasterData
// artists who match genre go to
// ArtistCard.jsx for display
// Then TitleBar updates record count?

const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ]

const UpdateListDisplay = (props) => {

  const workingList=[];
  const curGenre=props.genre

  // const currentGenre=(document.getElementById(`#dropdown`).value)

console.log(`before UpdList update: ` + workingList.length)
console.log(`genre: ` + curGenre)

   // create new array based on genre
    artistMasterData.forEach((artist) => {
      if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
  { 
    workingList.push(artist);
  }
  })

console.log(`after UpdList update: ` + workingList.length)
console.log(`genre: ` + curGenre)


  return (

    // eventually this is where we would map
    // over the array and use ArtistCard

  <div id='upd-cur-list'>
    <p>Updated Current List</p>
    <p>1st Entry: {workingList[0].artistName}</p>
    <p>Array size: {workingList.length}</p>
  </div>

)

}

export default UpdateListDisplay