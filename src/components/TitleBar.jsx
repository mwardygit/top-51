import React from 'react'
import App from '../App'
import GenreUpdate from './GenreUpdate'
import artistMasterData from "../top51artists.json"
import HandleMenu from './HandleMenu'

// PURPOSE:
// Creates the Titlebar section at the top of the screen

// Receives: props.genre and props.masterList


const TitleBar = (props) => {

   const workingList=[];
   try {
      var curGenre=(document.getElementById(`#dropdown`).value)
      console.log(`TitleBar Result: `+result);
      } 
      catch (error) 
      { 
         var curGenre = "All"
      }
   
   console.log(`before TitleBar: ` + workingList.length)
   console.log(curGenre)

   // create new array based on genre
   artistMasterData.forEach((artist) => {
      if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
   { 
      workingList.push(artist);
   }
   })

   console.log(`after TitleBar: ` + workingList.length)
   console.log(curGenre)


   return (

   <div className='titleBar'>
      <h1>Top 51 Artists</h1>
      <div className='genreUI'>
         <p>Filter by Genre:</p>
         <form>
            <select id="dropdown" onChange={(e) => App(e.target.value)}>
               <option value="All" >All</option>
               <option value="Pop" >Pop</option>
               <option value="Rock" >Rock</option>
               <option value="Jazz / Swing" >Jazz / Swing</option>
               <option value="Hip-hop / R&B" >Hip-hop / R&B</option>
               <option value="Folk" >Folk</option>
               <option value="Country" >Country</option>
               <option value="Reggae" >Reggae</option>
               <option value="Soul" >Soul</option>
               <option value="K-Pop" >K-Pop</option>
               <option value="Alternative" >Alternative</option>
            </select>
         </form>
         <div id='record-count'>
            Count: {workingList.length}
         </div>
      </div>
   </div> 

   )  

}

export default TitleBar
