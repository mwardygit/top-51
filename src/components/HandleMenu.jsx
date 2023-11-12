import React from 'react'
import App from '../App.jsx'
import TitleBar from './TitleBar.jsx'
// import artistGenres from '../top51genres.json'

const artistGenres = ["All", "Pop", "Rock", "Jazz / Swing", "Hip-hop / R&B", "Folk", "Country", "Reggae", "Soul", "K-Pop", "Alternative" ] 

const HandleMenu = (props) => {
  console.log('Start of HandleMenu component')
  var curGenre = "All"

  console.log(`HMenu: `+props)
  console.log(artistGenres)

  if (artistGenres.includes(props)) {
    curGenre = props
    console.log(`HandleMenu: valid props: `+curGenre)
  } else {
    curGenre = props.genre
    console.log(`HandleMenu: Invalid props: `+curGenre + `/` +props)
  }


  return (
    <div>
      <App
        genre={curGenre}
      />
    </div>
  )
}

export default HandleMenu
