import React, { Component } from 'react';
import { Singles } from './Singles';
import axios from 'axios'

export class SingleRead extends Component {

    constructor(){
        super()

        this.ReloadSingle = this.ReloadSingle.bind(this)
    }

    state = {
        singles: []      
    };

    //single data
    componentDidMount() {
        axios.get('http://localhost:3100/singleData')
            .then(response => {
                this.setState({ singles: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //refreshs page
    ReloadSingle(){
        axios.get('http://localhost:3100/singleData')
        .then(response => {
            this.setState({ singles: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })

    }

    render() {
        return <div className="Singles-Read">
            <h1>Tracks</h1>
            <br></br>
            <Singles singles={this.state.singles} ReloadSingle={this.ReloadSingle}></Singles>
        </div>
    }
}