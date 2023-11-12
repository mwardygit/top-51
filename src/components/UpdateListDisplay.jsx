import React from 'react'
import App from '../App.jsx'
import TitleBar from './TitleBar.jsx'
import GenreUpdate from './GenreUpdate.jsx'
import artistMasterData from "../top51artists.json"
import ArtistCard from './ArtistCard.jsx'


// receives props.genre & props.masterList

// maps through artistMasterData
// artists who match genre go to
// ArtistCard.jsx for display
// Then TitleBar updates record count?

const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ]

const UpdateListDisplay = (props) => {

  const workingList=[];

  console.log('Start of UpdateList component')
  var curGenre = "All"

  if (artistGenres.includes(props)) {
    curGenre = props
    console.log(`UpdList: valid props: `+props)
  } else {
    curGenre = props.genre
    console.log(`UpdList: Invalid props: `+props.genre)
  }

  // const currentGenre=(document.getElementById(`#dropdown`).value)

  console.log(`before UpdList update: ` + workingList.length)
  console.log(`genre: ` + curGenre)

   // create new array based on genre
    artistMasterData.forEach((artist) => {
      if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
  { 
    workingList.push(artist);
  }
  })

  console.log(`after UpdList update: ` + workingList.length)
  console.log(`genre: ` + curGenre)

  var listNum=("Count: " && (workingList.length))
  console.log(`UpdList - New div:` + listNum)

  const newCount=document.getElementById("record-count")

  if (newCount != null) {
    console.log(`UpdList1: get elem valid count: `+newCount)
    console.log(`UpdList2: `+newCount.innerHTML)
   } else {
    console.log(`UpdList3: get elem INvalid`)
  }


  return (

    <>
    <script>
      newCount.innerHTML = ("Count: " + {workingList.length})
    </script>
    <div className='artist-card'>
      {workingList.map((artist, index) => (
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
    </>
  )

}

export default UpdateListDisplay

