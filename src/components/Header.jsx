import React from 'react'
import DropMenu from './DropMenu'

// Creates the top portion of the main page
// receives: props.onChange (function)
//    allGenres array, currentMatches


const Header = (props) => {
   return (
      <div id='top-nav-bar'>
      <div id='title-area'>
         <h1>Top 51 Artists</h1>
      </div>
      <div id='genre-menu'>
         <p>Filter by Genre:</p>
         <DropMenu
            onChange={props.onChange}
            allGenres={props.allGenres}
         />
         <div id='genre-matches'>
            Count: {props.currentMatches}
         </div>
      </div>
   </div>
   )
}

export default Header