import React from 'react'

const TitleBar = (props) => {
   return (

   <div id='titleBar'>
      <h1>Top 51 Artists</h1>
      <button id='gButton'>{props.gButton}</button>
   </div> 

   )  

}

export default TitleBar
