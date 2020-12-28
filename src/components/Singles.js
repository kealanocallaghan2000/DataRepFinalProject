import React, { Component } from 'react';
import { SingleItem } from './singleItem';

export class Singles extends Component {

    //renders the single item
    render() {
        return this.props.singles.map( (single)=>{
            return <SingleItem single={single} ReloadSingle={this.props.ReloadSingle}></SingleItem>
        })
    }
}