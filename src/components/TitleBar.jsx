import React from 'react'
import GenreUpdate from './GenreUpdate'

// PURPOSE:
// Creates the Titlebar section at the top of the screen
// Receives: props.currentGenre and props.count

const TitleBar = (props) => {
   return (

   <div className='titleBar'>
      <h1>Top 51 Artists</h1>
      <div className='genreUI'>
         <p>Filter by Genre:</p>
         <form>
            <select id="dropdown" onChange={GenreUpdate}>
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
            Count: {props.count}
         </div>
      </div>
   </div> 

   )  

}

export default TitleBar
