import React from 'react'


// PURPOSE:
// Creates the GERNRE menu in title bar
// Receives: props.onChange call-back function
//           props.allGenres array

const DropMenu = (props) => {

return (
      <div>
         <form>
            <select id="genre-drop" onChange={(e) => props.onChange(e.target.value)}>
            {props.allGenres.map((genre) => <option value={genre} key={genre}>{genre}</option>)} 
            </select>
         </form>
      </div>
   )  
}

export default DropMenu
