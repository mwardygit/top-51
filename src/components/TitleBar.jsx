import React from 'react'
import App from '../App'
import GenreUpdate from './GenreUpdate'
import artistMasterData from "../top51artists.json"
import HandleMenu from './HandleMenu'

// PURPOSE:
// Creates the Titlebar section at the top of the screen

// Receives: props.genre


const TitleBar = (props) => {

   const workingList=[];
   try {
         var curGenre=props.genre
         console.log(`TitleBar Valid: `+curGenre);
      } 
      catch (error) 
      { 
         var curGenre = "All"
         console.log(`TitleBar invalid: `+curGenre);
      }
   
   console.log(`before TitleBar: ` + workingList.length)

   // create new array based on genre
   artistMasterData.forEach((artist) => {
      if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
   { 
      workingList.push(artist);
   }
   })

   console.log(`after TitleBar: ` + workingList.length)


   return (
      <div>
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
      </div>
   )  

}

export default TitleBar
