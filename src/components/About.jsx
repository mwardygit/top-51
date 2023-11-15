import '../About.css'
// import { useState } from 'react'
import React from 'react'
import vinylPic from '../goldRecord.jpg'

// Renders the "About Us" page
// receives: props.onChange (button click)
// Only way off this page is to click button,
// which changes "curPage".
// also passing onChange & curGenre, when we
// return to main page the list & # of matches
// should reset to what they were before coming here.
// For some reason the Genre menu isn't updating to
// show the current Genre, but whatevs.


const About = (props) => {
    
    // var OG=(props.curGenre)
    // console.log('Abt1: OG='+OG)
    
    const killAnims = () => {
        const anims = (document.getElementsByClassName("delayed"));
        for (let i = 0; i < anims.length; i++) {
            anims[i].style.animationDelay = "0s";
            }
        }

    // const refreshG = () => {
    //     console.log(`Abt2: CG reset to `+OG)
    //     props.onChange(OG);
    //     }
        
    return (
    <div id='about-page'>
        <div id='about-title'>
            <button id="delay-skip" 
                value={1} 
                onClick={(e) => {
                    killAnims();
                }}>
                <img src={vinylPic}/>
            </button>
            <h1>The 'Top-51'</h1>
        </div>
        <div className='about-text' id='about-text'>
            <h1 id='delay-a' className='delayed'>Welcome to the Top-51</h1>
            <br></br>
            <h2 id='delay-b'className='delayed'>The 51 top music acts ranked by total sales.</h2>
            
            <h2 id='delay-c' className='delayed'>Sales data includes records, CDs, and streaming, adjusted for era.</h2>

            <h2 id='delay-d' className='delayed'>Did your favorite band or singer make the list?</h2>

            <h2 id='delay-d2' className='delayed'>Is there a correlation between sales and Grammy awards?</h2>

            <h2 id='delay-e' className='delayed'>Use the 'Genre' menu to filter by music type.</h2>

            <h2 id='delay-f' className='delayed'>Feel free to explore the space!</h2>
            <br></br> <br></br>
        </div>
        <button className='delayed'
            id="go-page1"
            value={1}
            onClick={(e) => {
                // refreshG();
                props.onPage(e.currentTarget.value);
            }}>
            let's go to the list!
        </button>
    </div>
    )
}

export default About