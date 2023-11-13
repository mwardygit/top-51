import React from 'react'
import App from '../App.jsx'


const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ] 

const HandleMenu = (props) => {
  console.log('Start of HandleMenu component')
  var curGenre = "All"

  console.log(`HMenu1: `+props)

  if (artistGenres.includes(props)) {
    curGenre = props
    console.log(`HMenu2: valid props: `+curGenre)
  } else {
    curGenre = props.genre
    console.log(`HMenu3: Invalid props: `+curGenre)
  }


  return (
    <div>
      <UpdateDisplay
        genre={curGenre}
      />
    </div>
  )
}

export default HandleMenu
