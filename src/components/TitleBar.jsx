import React from 'react'
import App from '../App'
import HandleMenu from './HandleMenu.jsx'


// PURPOSE:
// Creates the pull-down menu in title bar
// Receives: NO props

const TitleBar = () => {

   // const workingList=[];

   // determines current genre
   // try {
   //       var curGenre=props.genre
   //       console.log(`TitleBar Valid: `+curGenre);
   //    } 
   //    catch (error) 
   //    { 
   //       var curGenre = "All"
   //       console.log(`TitleBar invalid: `+curGenre);
   //    }
   
   // console.log(`before TitleBar: ` + workingList.length)

   // create new array based on genre - WHY?!?!
   // artistMasterData.forEach((artist) => {
   //    if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
   // { 
   //    workingList.push(artist);
   // }
   // })
   // console.log(`after TitleBar: ` + workingList.length)


   return (
      <div>
         <form>
            <select id="drop-down" onChange={(e) => HandleMenu(e.target.value)}>
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
