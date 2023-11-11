import './App.css'
import ArtistCard from './components/ArtistCard.jsx'
import PickGenre from './components/PickGenre.jsx'
import PickGenre from './components/PickGenre.jsx'
import TitleBar from './components/TitleBar.jsx'
import UpdateCurrentList from './components/UpdateCurrentList.jsx'
import artistMasterData from "./top51artists.json"

const genreIndex = 0
const genreFilter = 'All'
const currentList = []

const App = () => {




<PickGenre genreFilter={genreFilter} />


  return (
    <>
      <div className='top-nav-bar'>
        <TitleBar currentGenre={genreFilter} />
      </div>

      <div className='list-update'>
        <UpdateCurrentList
          genre={genreFilter}
          masterList={artistMasterData}
          newList={currentList}
        />
      </div>

      <div className='artist-list'>
        {/* <p>{currentList.length}</p>
        {currentList.map((artist, index) => ( */}
          {/* <ArtistCard
            key={index}
            artist={artist} */}
          {/* />   */}
        
        
      </div>

    </>
  )
}


export default App
