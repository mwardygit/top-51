import React from 'react'
import UpdateListDisplay from './UpdateListDisplay.jsx'
import artistMasterData from "../top51artists.json"
import TitleBar from './TitleBar.jsx'

// This initiates all actions downstream from
// the user choosing a Genre.

// Is called when Genre menu changes (TitleBar).
// New Genre is then sent to:
// (1) TitleBar which updates menu & counter
// (2) UpdateCurrentList which updates the
//    list of which cards should be shown (based on genre)
//    and then maps that list to ArtistCard to create the
//    info block for all artists being displayed.


const GenreUpdate = (props) => {

   console.log(`GenUpd: `+ props.genre)

   const workingList=[];
   // setCurGenre=(document.getElementById(`dropdown`).value)



   // const curGenre=props.genre
   
   console.log(`menu value? `+ curGenre)

   // create new array based on genre
   artistMasterData.forEach((artist) => {
      if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
   { 
      workingList.push(artist);
   }
   })

   console.log(`after GenreUpd: ` + workingList.length)
   console.log(curGenre)


   return (
      <div>
         <TitleBar
            genre={curGenre} 
            // masterList={artistMasterData}
         />
         <UpdateListDisplay
            genre={curGenre}
            // newList={workingList} 
         />
         <h2>{curGenre} <br></br>{(workingList.length)}</h2>
      </div>

      )

}

export default GenreUpdate

