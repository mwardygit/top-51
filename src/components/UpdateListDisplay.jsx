import React from 'react'
import App from '../App.jsx'
import TitleBar from './TitleBar.jsx'
import GenreUpdate from './GenreUpdate.jsx'


// receives props.genre, masterList & newlist

// maps through artistMasterData
// artists who match genre go to
// ArtistCard.jsx for display
// Then TitleBar updates record count?

const UpdateListDisplay = (props) => {

console.log(`before update: ` + props.newList.length)

props.masterList.forEach((artist) => {
    if ((artist.musicGenre.includes(props.genre)) || (props.genre == "All"))
  { 
    props.newList.push(artist);
  }
})

console.log(`after update: ` + props.newList.length)


  return (

  <div id='upd-cur-list'>
    <p>Updated Current List</p>
    <p>1st Entry: {props.newList[0].artistName}</p>
    <p>Array size: {props.newList.length}</p>
  </div>

)

}

export default UpdateListDisplay