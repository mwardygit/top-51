import React from 'react'
import ArtistCard from './ArtistCard.jsx'


// receives props.artists
// 1) maps through array of artists and calls
//    ArtistCard.jsx for each

const UpdateDisplay = (props) => {


  return (

    <div id='artist-area'>
      {props.artists.map((artist) => (
        <ArtistCard
          key={artist.rank}
          rank={artist.rank}
          type={artist.artistType}
          genre={artist.musicGenre}
          name={artist.artistName}
          sales={artist.totalSales}
          photo={artist.picture}
          gNods={artist.grammyNods}
          gWins={artist.grammyWins}
        />
      ))}
    </div>

  )

}

export default UpdateDisplay

