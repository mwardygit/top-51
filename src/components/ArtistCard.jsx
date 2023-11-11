import React from 'react'
import App from '../App.jsx'



const ArtistCard = (props) => {

   // console.log(currentList)
   console.log('anything?')
   console.log(props.key)

   return (

      <div className='artist-card'>
         <h2>{props.artistName} / {props.musicGenre}</h2>
      </div>

      )

   }

export default ArtistCard
