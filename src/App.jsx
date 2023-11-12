import './App.css'
import ArtistCard from './components/ArtistCard.jsx'
import GenreUpdate from './components/GenreUpdate.jsx'
import TitleBar from './components/TitleBar.jsx'
import UpdateListDisplay from './components/UpdateListDisplay.jsx'

import artistMasterData from "./top51artists.json"

var curGenre = "All"

const App = (props) => {

  if (props == null) {
      curGenre = "props was null"
    } else {
      curGenre = {props}
    }
  
  console.log(`App: `+curGenre);

  

    return (
    <>
      <div id='top-nav-bar'>
        <TitleBar 
          genre={curGenre} 
        />
      </div>

      <div className='list-update'>
        <UpdateListDisplay
          genre={curGenre}
        />
      </div>

      <div className='artist-list'>
        
      </div>

    </>
  )
}


export default App
