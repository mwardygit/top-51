import React from 'react'


// Renders the "About Us" page
// receives: props.onChange (button click)
// Only way off this page is to click button,
// which changes "curPage"

const About = (props) => {

    return (
    <>
        <h1>About</h1>
        <br></br>
        
        <button id="go-page1" value={1} onClick={(e) => props.onPage(e.target.value)}>Return to Home Page</button>
    </>
    )
}

export default About