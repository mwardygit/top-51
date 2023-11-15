import '../About.css'
import React from 'react'
import { useState } from 'react'
import vinylPic from '../goldRecord.jpg'

// Renders the "About Us" page
// receives: props.onChange (button click)
// Only way off this page is to click button,
// which changes "curPage".
// also passing onChange & gen(re), when we
// return to main page the list & # of matches
// should reset to what they were before coming here.
// For some reason the Genre menu isn't updating to
// show the current Genre, but whatevs.


const About = (props) => {
    
    var g=(props.gen)
    
    return (
    <div id='about-page'>
        <div id='about-title'>
            <button id="delay-skip" 
                value={1} 
                onClick={(e) => {
                    props.onChange(g);
                    props.onPage(e.currentTarget.value);
                }}>
                <img src={vinylPic}/>
            </button>
            <h1>The 'Top-51'</h1>
        </div>
        <div className='about-text' id='about-text'>
            <h1 className='delay-a'>Welcome to the Top-51</h1>
            <br></br>
            <h2 className='delay-b'>Why 51? Why not Top 50 or Top 10?</h2>
            
            <h2 className='delay-c'>BO-RING!</h2>

            <h2 className='delay-d'>You think aliens would visit an 'Area 50'??</h2>

            <h2 className='delay-d2'>51 is simply more interesting.</h2>

            <h2 className='delay-e'>It's divisible by 3 and 17 ... both prime numbers.</h2>

            <h2 className='delay-f'>You're welcome.</h2>
            <br></br> <br></br>
        </div>
        <button className='delay-g'
            id="go-page1"
            value={1}
            onClick={(e) => {
                props.onChange(g);
                props.onPage(e.currentTarget.value);
            }}>
            let's go to the list!
        </button>
    </div>
    )
}

export default About