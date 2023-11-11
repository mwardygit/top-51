import React from 'react'

const TitleBar = (props) => {
   return (

   <div className='titleBar'>
      <h1>Top 51 Artists</h1>
      <div className='genreUI'>
         <p>Filter by Genre:</p>
         <button id='genreButton'>{props.currentGenre}</button>
      </div>
   </div> 

   )  

}

export default TitleBar
