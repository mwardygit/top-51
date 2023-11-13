import './App.css'
import DropMenu from './components/DropMenu.jsx'
import UpdateDisplay from './components/UpdateDisplay.jsx'

import artistMasterData from "./top51artists.json"

const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ] 

var curGenre = 'All'
var workingList=[];

// receives: props.genre (except maybe 1st pass)

const App = (props) => {

  workingList.length = 0
  console.log(`App- begins`)
  console.log(`Count- `+workingList.length)

  // determine current Genre 
  if (artistGenres.includes(props)) {
      curGenre = props
      console.log(`App- valid props: `+props)
    } else {
      curGenre = props.genre
      console.log(`App- Invalid props: `+props.genre)
    }
  
  // Put all matches into working array
  artistMasterData.forEach((artist) => {
    if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
  { 
  workingList.push(artist);
  }
  })

  console.log(`App- `+curGenre);
  console.log(`App count- `+workingList.length)

  var currentMatches = workingList.length

    return (
    <>

        <div id='top-nav-bar'>
            <div id='title-area'>
                <h1>Top 51 Artists</h1>
            </div>
            <div id='genre-menu'>
              <p>Filter by Genre:</p>
              <DropMenu/>
              <div id='genre-matches'>
                Count: {currentMatches}
              </div>
            </div>
        </div>

        <div id='flex-list'>
          <UpdateDisplay
            genre={curGenre}
            artists={workingList}
          />
        </div>

    </>
    )
}


export default App
