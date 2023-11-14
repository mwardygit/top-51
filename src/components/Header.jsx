import React from 'react'
import DropMenu from './DropMenu'
import vinylPic from '../goldRecord.jpg'



// Creates the top portion of the main page
// receives: props.onChange (function)
//  props.onPage (function)
//  props.allGenres [array], props.currentMatches


const Header = (props) => {
   return (
      <div id='top-nav-bar'>
         <div id='main-title'>
            <img src={vinylPic}/>
            <h1>Top 51 Artists</h1>
         </div>

         {/* <button id="go-page2" value={2} onClick={(e) => props.onPage(e.target.value)}>ABOUT</button> */}
         
         <div id='genre-menu'>
            <h3>Genre
            <DropMenu
               onChange={props.onChange}
               allGenres={props.allGenres}
            /></h3>
            <h4>{props.currentMatches}</h4>
         </div>
      </div>
   )
}

export default Header