import React from 'react'
import App from '../App.jsx'
import artistMasterData from "../top51artists.json"
import ArtistCard from './ArtistCard.jsx'
import HandleMenu from './HandleMenu.jsx'


// receives props.genre & artistArray
// 1) Updates the current match count in title area
// 2) maps through array of matches and calls
//    ArtistCard.jsx for each

const UpdateDisplay = (props) => {

  const curGenre=props.genre;
  const workingList=props.workingList;

  console.log('Start of UpdateList component')
  console.log(curGenre + ` / ` + workingList.length)

  var listNum=("Count: " && (workingList.length))
  console.log(`UpdList2 - New html obj: ` + listNum)

  const curCount=document.getElementById("genre-matches")

  if (newCount != null) {
    console.log(`UpdList3: get elem valid count: `+curCount)
    console.log(`UpdList4: `+curCount.innerHTML)
  } else {
    console.log(`UpdList3: get elem INvalid`)
  }


  return (

    <>
    <script>
      curCount.innerHTML = listNum
    </script>

    <div id='artist-area'>
      {workingList.map((artist) => (
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

export default UpdateDisplay

