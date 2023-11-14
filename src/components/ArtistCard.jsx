import React from 'react'
import App from '../App.jsx'
import shinyStar from '../goldStar.png'

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
            {/* <img src={shinyStar}/> */}
            <h2>#{props.rank}: {props.name} <br></br>
            Genre: {props.genre}</h2>
            -- <br></br>
            <h4>Grammy Nods: {props.gNods} <br></br>
            Grammy Wins: {props.gWins} <br></br>
            <br></br>
            Total Sales: {props.sales}</h4>
         </div>
      </div>
      </>

      )

   }

export default ArtistCard


