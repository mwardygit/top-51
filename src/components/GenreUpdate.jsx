// import React from 'react'
import UpdateListDisplay from './UpdateListDisplay.jsx'
import artistMasterData from "../top51artists.json"

// This initiates all actions downstream from
// the user choosing a Genre.

// Is called when Genre menu changes (TitleBar).
// New Genre is then sent to:
// (1) TitleBar which updates menu & counter
// (2) UpdateCurrentList which updates the
//    list of which cards should be shown (based on genre)
//    and then maps that list to ArtistCard to create the
//    info block for all artists being displayed.


const GenreUpdate = () => {

   let workingList=[]
   let currentGenre=(document.getElementById(`dropdown`).value)
   // console.log({currentGenre})

   // create new array based on genre
   artistMasterData.forEach((artist) => {
      if ((artist.musicGenre.includes(currentGenre)) || (currentGenre == "All"))
   { 
      workingList.push(artist);
   }
   })

   console.log(workingList.length)
   console.log(currentGenre)


   return (
      <div>
         <UpdateListDisplay
            genre={currentGenre}
            newList={workingList} 
         />
         <h2>{currentGenre} <br></br>{(workingList.length)}</h2>
      </div>

      )

}

export default GenreUpdate

