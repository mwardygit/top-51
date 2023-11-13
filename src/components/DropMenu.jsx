import React from 'react'


// PURPOSE:
// Creates the pull-down menu in title bar
// Receives: props.onChange call-back function
//       also props.allGenres array

const DropMenu = (props) => {

   return (
      <div>
         <form>
            <select id="drop-down" onChange={(e) => props.onChange(e.target.value)}>
            {props.allGenres.map((genre) => <option value={genre} key={genre}>{genre}</option>)} 
            </select>
         </form>
      </div>
   )  

}

export default DropMenu
