import React from 'react'
import GenreUpdate from './GenreUpdate.jsx'
import TitleBar from './TitleBar.jsx'

const HandleMenu = (props) => {

  console.log(`HandleMenu: ` +props)
  
  

  return (
    <div>
      <TitleBar
        genre={props}
      />
    </div>
  )
}

export default HandleMenu
