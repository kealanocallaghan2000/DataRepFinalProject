import React, { Component } from 'react';
import { Gigs } from './gigs';
import axios from 'axios'

export class GigRead extends Component {

    constructor(){
        super()

        this.ReloadGig = this.ReloadGig.bind(this)
    }

    state = {
        gigs: []
    };

    //gig data
    //axios goes and reads from my server
    componentDidMount() {
        axios.get('http://localhost:3100/gigData')
            .then(response => {
                this.setState({ gigs: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //refreshes page
    ReloadGig(){
        axios.get('http://localhost:3100/gigData')
        .then(response => {
            this.setState({ gigs: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })

    }

    render() {
        return <div className="Gigs-Page">
            <h1>Events</h1>
            <br></br>
            <Gigs gigs={this.state.gigs} ReloadGig={this.ReloadGig}></Gigs>
        </div>
    }
}