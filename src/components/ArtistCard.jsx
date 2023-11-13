import React from 'react'
import App from '../App.jsx'

// Parent = UpdateListDisplay
// This creates each artist 'card' for display
// props: rank, type, genre, name, sales, 
// photo, gNods, gWins

const ArtistCard = (props) => {

   // console.log('anything?')
   // console.log(props.key)

   return (
      
      <div id='artist-card'>
         <img src={props.photo}/>
         <h2>{props.name}</h2>
         <h2>#{props.rank} / {props.genre} / {props.type}</h2>
         <h4>Grammy Nods: {props.gNods} / Wins: 
         {props.gWins} / Total Sales: {props.sales}</h4>
         <br></br>
      </div>
      

      )

   }

export default ArtistCard
