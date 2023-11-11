import React from 'react'
import App from '../App.jsx'


const UpdateCurrentList = (props) => {

// console.log(`before: ` + props.newList.length)

props.masterList.forEach((artist) => {
    if ((artist.musicGenre.includes(props.genre)) || (props.genre == "All"))
  { 
    props.newList.push(artist);
  }
})

// console.log(`after: ` + props.newList.length)


  return (

  <div id='upd-cur-list'>
    <p>Updated Current List</p>
    <p>1st Entry: {props.newList[0].artistName}</p>
    <p>Array size: {props.newList.length}</p>
  </div>

)

}

export default UpdateCurrentList