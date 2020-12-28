import React, { Component } from 'react';
import ReactPlayer from "react-player";

export class Home extends Component {

    //my home page which has some basic text and hyper links about my app
    //and some videos showing what my app is representing
    render() {
        return <div className="Home-Page">
        <h1> Home</h1>
        <br></br>
            <h5>There is an ever growing electronic music scene in ireland,</h5>
            <h5>and with this app you can share great music or any upcoming events </h5>
            <h5>that are happpening around the country, just check the <a href="/gigRead">events</a> page</h5>
            <h5>to see some events from 2020, the <a href="/singleRead">Tracks</a> page for some music </h5>
            <h5>recommendations, or the <a href="/createGig">add event</a> and <a href="/createSingle">add track</a></h5>
            <h5>to add your own recommendations to the list!</h5>
            <br></br>
            <br></br>
            <h6>See below some of the best highlights from the electronic music scene in Ireland from the last few years.</h6>
            <br></br>
            <br></br>
            
            <h3><a href="https://www.youtube.com/watch?v=9IsUxrwxO5M">FJAAK At Life 2019</a></h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=9IsUxrwxO5M"
            />
            </div>
            <br></br>
            <h3><a href="https://www.youtube.com/watch?v=aDWS6ktxtFU">I Hate Models At Intercell 2019</a></h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=aDWS6ktxtFU"
            />
            </div>
            <br></br>
            <h3><a href="https://www.youtube.com/watch?v=fY7M3pzXdUo">Bicep at Printworks 2020</a></h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=fY7M3pzXdUo"
            />
            </div>
        </div>





    }
}