import React from 'react'
import DropMenu from './DropMenu.jsx'
import SortMenu from './SortMenu.jsx'
import vinylPic from '../goldRecord.jpg'

// Creates the Title portion of the main page

// PROPS PASSED TO ME FROM APP.JSX
// onChange={setCurGenre} f() set new Genre
// onPage={setCurPage}  f() set new page #
// allGenres={artistGenres} array of Genres for menu
// currentMatches={currentMatches} # of matches
// sortOptions={sortOptions}  array of Sort options for menu
// currentSort={curSort}
// onSort={setCurSort}  f() set new Sort option



const Header = (props) => {

   return (
      <div id='top-nav-bar'>
         <div id='main-title'>
            <button id="go-page2" 
               value={2} 
               onClick={(e) => {
                  props.onPage(e.currentTarget.value);
               }}
               ><img src={vinylPic}/>
            </button>
            <h1>Top 51 Artists</h1>
         </div>
         <div id='pulldowns'>
            <div id='genre-menu'>
               <h3>filter by genre:
               <DropMenu
                  onChange={props.onChange}
                  allGenres={props.allGenres}
               /></h3>
               <h4>COUNT = {props.currentMatches}</h4>
            </div>
            <div id='sort-menu'>
               <h3>sort by:
               <SortMenu
                  onSort={props.onSort}
                  sortOptions={props.sortOptions}
               /></h3>
               <h4> </h4>
            </div>
         </div>
      </div>
   )
}

export default Header
