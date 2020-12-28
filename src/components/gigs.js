import React, { Component } from 'react';
import { GigItem } from './gigItem';

export class Gigs extends Component {


    //render the gigitem
    render() {
        return this.props.gigs.map( (gig)=>{
            return <GigItem gig={gig} ReloadGig={this.props.ReloadGig}></GigItem>
        })
    }
}