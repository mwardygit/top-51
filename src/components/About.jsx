import '../About.css'
import React from 'react'
import vinylPic from '../goldRecord.jpg'

// Renders the "About Us" page
// receives: props.onChange (button click)
// Only way off this page is to click button,
// which changes "curPage"

const About = (props) => {

    return (
    <div id='about-page'>
        <div id='about-title'>
            <img src={vinylPic}/>
            <h1>The 'Top-51'</h1>
        </div>
        <div className='about-text' id='about-text'>
            <h1 className='delay-a'>Welcome to the Top-51</h1>
            <br></br>
            <h2 className='delay-b'>Why 51? Why not Top 50 or Top 10?</h2>
            
            <h2 className='delay-c'>BORING!</h2>
                        
            <h2 className='delay-d'>You think aliens would visit an 'Area 50'??</h2>

            <h2 className='delay-d2'>51 is just more interesting.</h2>

            <h2 className='delay-e'>It's also divisible by 3.</h2>

            <h2 className='delay-f'>You're welcome.</h2>
            <br></br> <br></br>
        </div>
        <button className='delay-g' id="go-page1" value={1} onClick={(e) => props.onPage(e.target.value)}>let's go to the list!</button>
    </div>
    )
}

export default About