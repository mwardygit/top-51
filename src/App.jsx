import './App.css'
import ArtistCard from './components/ArtistCard.jsx'
import GenreUpdate from './components/GenreUpdate.jsx'
import TitleBar from './components/TitleBar.jsx'
import UpdateListDisplay from './components/UpdateListDisplay.jsx'

import artistMasterData from "./top51artists.json"

const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ] 

var curGenre = artistGenres[0]
var workingList=[];


const App = (props) => {

  workingList.length = 0
  console.log(`App begins`)
  console.log(`Count: `+workingList.length)

  if (artistGenres.includes(props)) {
      curGenre = props
      console.log(`App: valid props: `+props)
    } else {
      curGenre = props.genre
      console.log(`App: Invalid props: `+props.genre)
    }
  
  
  artistMasterData.forEach((artist) => {
    if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
  { 
  workingList.push(artist);
  }
  })

  console.log(`App: `+curGenre);

  console.log(`App count: `+workingList.length)
  var currentDataSet = workingList.length

    return (
    <>
      <div id='top-nav-bar'>
        <div className='titleBar'>
          <h1>Top 51 Artists</h1>

        <div className='genreUI'>
          <p>Filter by Genre:</p>
          <TitleBar 
            genre={curGenre} 
          />

          <div className='record-count' id='record-count'>
            Count: {currentDataSet}
          </div>
        </div>

        </div> 
      </div>

      <div id='flex-list'>
        <UpdateListDisplay
          genre={curGenre}
        />
      </div>

      <div id='artist-list'>
        
      </div>

    </>
  )
}


export default App
