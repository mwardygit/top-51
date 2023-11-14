import React from 'react'
import App from '../App.jsx'


// Parent = UpdateListDisplay
// This creates each artist 'card' for display
// props: rank, type, genre, name, sales, 
// photo, gNods, gWins


const ArtistCard = (props) => {

   return (
      <>
      <div id='artist-card'>
         <div id='artist-pic'>
            <img src={props.photo}/>
         </div>
         <div id='artist-stats'>
            <h2>#{props.rank} ~ {props.name} </h2>
            <h3>Genre: {props.genre}</h3>
            <h4>Grammy Nods: {props.gNods}</h4>
            <h4>Grammy Wins: {props.gWins}</h4>
            <h4 id='artist-sales'>Total Sales: {props.sales}</h4>
         </div>
      </div>
      </>

      )

   }

export default ArtistCard


