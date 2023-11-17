import './App.css'
import { useState } from 'react'
import DropMenu from './components/DropMenu.jsx'
import SortMenu from './components/SortMenu.jsx'
import UpdateDisplay from './components/UpdateDisplay.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'

import artistMasterData from './top51artists.json';
const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ];
const sortOptions = ["Total Sales", "Name", "Grammy Nods - Most", "Grammy Nods - Least", "Grammy Wins - Most", "Grammy Wins - Least" ];


const App = () => {

  const [curGenre, setCurGenre]=useState("All");
  const [curPage, setCurPage]=useState(2);
  const [curSort, setCurSort]=useState("Total Sales");
  var workingList = [];
    

  // Put all matches into working array
  artistMasterData.forEach((artist) => {
    if ((artist.musicGenre.includes(curGenre)) || (curGenre == "All"))
  { 
    workingList.push(artist);
  }
  })

  // sort workingList by 'curSort'
  switch (curSort) {
    case "Total Sales":
      //  already sorted in this order
      break;

    case "Name":
      workingList.sort((a, b) => 
        (a.sortByName) > (b.sortByName) ? 1 : -1);

      break;
    case "Grammy Nods - Most":
      workingList.sort((a, b) => 
        (a.grammyNods) > (b.grammyNods) ? -1 : 1);
      break;

      case "Grammy Nods - Least":
        workingList.sort((a, b) => 
          (a.grammyNods) > (b.grammyNods) ? 1 : -1);
        break;

        case "Grammy Wins - Most":
        workingList.sort((a, b) => 
          (a.grammyWins) > (b.grammyWins) ? -1 : 1);
      break;

      case "Grammy Wins - Least":
        workingList.sort((a, b) => 
          (a.grammyWins) > (b.grammyWins) ? 1 : -1);
      break;

    default:
      break;
  }

  var currentMatches = workingList.length;

  if (curPage==1) {

    return (

    // Show the MAIN page
    <>
        <Header 
          onPage={setCurPage}
          onChange={setCurGenre}
          allGenres={artistGenres}
          currentMatches={currentMatches}
          sortOptions={sortOptions}
          onSort={setCurSort}
          currentSort={curSort}
        />

        <div id='flex-list'>
          <UpdateDisplay
            artists={workingList}
          />
        </div>
    </>
    )

} else {

  return (

    // Show the ABOUT page
    <>
      <About 
        onChange={setCurGenre}
        onPage={setCurPage}
        curGenre={curGenre}
      />
    </>

  )

}

}

export default App