import React from 'react'
import DropMenu from './DropMenu'
import vinylPic from '../goldRecord.jpg'



// Creates the top portion of the main page
// receives: props.onChange (function)
//    allGenres array, currentMatches


const Header = (props) => {
   return (
      <div id='top-nav-bar'>
         <div id='main-title'>
            <img src={vinylPic}/>
            <h1>Top 51 Artists</h1>
         </div>
         <div id='genre-menu'>
            <h3>Genre
            <DropMenu
               onChange={props.onChange}
               allGenres={props.allGenres}
            /></h3>
            <p>{'[ ' + props.currentMatches + ' ]'}</p>
         </div>
      </div>
   )
}

export default Header