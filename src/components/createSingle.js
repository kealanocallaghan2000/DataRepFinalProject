import React, { Component } from 'react';
import axios from 'axios'

export class CreateSingle extends Component {
    
    constructor() {
        super()

        //Single binds
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeSingleName = this.onChangeSingleName.bind(this)
        this.onChangeSingleDate = this.onChangeSingleDate.bind(this)
        this.onChangeSinglePoster = this.onChangeSinglePoster.bind(this)
        this.onChangeArtist = this.onChangeArtist.bind(this)
        this.state = {
            singleName: '',
            singleDate: '',
            singlePoster: '',
            Artist: ''
        }

    }

    //when name is changed
    onChangeSingleName(e) {
        this.setState({
            singleName: e.target.value
        })
    }

    //when date is changed
    onChangeSingleDate(e) {
        this.setState({
            singleDate: e.target.value
        })
    }

    //when poster is changed
    onChangeSinglePoster(e) {
        this.setState({
            singlePoster: e.target.value
        })
    }

    //when artist is changed
    onChangeArtist(e) {
        this.setState({
            Artist: e.target.value
        })
    }

    //when button is submitted
    onSubmit(e) {
        e.preventDefault()
        alert("Track " + this.state.singleName + " added.")

        const newTrack = {
            singleName: this.state.singleName,
            singleDate: this.state.singleDate,
            singlePoster: this.state.singlePoster,
            Artist: this.state.Artist
        }
        axios.post('http://localhost:3100/singleData', newTrack) 
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

render() {
    return (
        <div className='App'>
            {/* Track Form */}
            <div>
                <h1>Add A Track</h1>
            </div>
            <br></br>
            {/* form for inputting the track information */}
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Add Track Name</label>
                    <input type='text' className='form-control'
                        value={this.state.singleName}
                        onChange={this.onChangeSingleName}>
                    </input>
                </div>
                <div className="form-group">
                    <label>Add Track Release Date</label>
                    <input type='text' className='form-control'
                        value={this.state.singleDate}
                        onChange={this.onChangeSingleDate}>
                    </input>
                </div>
                <div className="form-group">
                    <label>Add Track Poster</label>
                    <textarea type='text' className='form-control'
                        value={this.state.singlePoster}
                        onChange={this.onChangeSinglePoster}>
                    </textarea>
                </div>
                <div className="form-group">
                    <label>Add Track Artist</label>
                    <input type='text' className='form-control'
                        value={this.state.Artist}
                        onChange={this.onChangeArtist}>
                    </input>
                </div>


                <div className="form-group">
                    <br></br>
                    <input type='submit'
                        value='Add Track'
                        className='btn btn-primary'
                        onSubmit={this.onSubmit}></input>
                </div>
            </form>
        </div>



        )
    }

}

