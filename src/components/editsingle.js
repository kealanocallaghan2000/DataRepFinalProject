import React, { Component } from 'react';
import axios from 'axios'

export class EditSingle extends Component {


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

    //traps id to pull from database
    componentDidMount(){
        console.log(this.props.match.params.id)

        //pulling information down
        axios.get('http://localhost:3100/singleData/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                singleName:response.data.singleName,
                singleDate:response.data.singleDate,
                singlePoster:response.data.singlePoster,
                Artist:response.data.Artist
            })
        })
        .catch((error)=>{
            console.log(error)
        })
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

        //const being used in the axios.put method
        const newTrack = {
            singleName: this.state.singleName,
            singleDate: this.state.singleDate,
            singlePoster: this.state.singlePoster,
            Artist: this.state.Artist
        }

        axios.put('http://localhost:3100/singleData/'+this.state._id, newTrack)
        .then(res => {
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
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
            {/* form for editing event info */}
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <b><label>Add Track Name</label></b>
                    <input type='text' className='form-control'
                        value={this.state.singleName}
                        onChange={this.onChangeSingleName}>
                    </input>
                </div>
                <div className="form-group">
                <label style={{ width: "100px" }}><b>Add Track Release Date</b></label>
                    <input type='text' className='form-control'
                        value={this.state.singleDate}
                        onChange={this.onChangeSingleDate}>
                    </input>
                </div>
                <div className="form-group">
                <b><label>Add Track Poster</label></b>
                    <textarea type='text' className='form-control'
                        value={this.state.singlePoster}
                        onChange={this.onChangeSinglePoster}>
                    </textarea>
                </div>
                <div className="form-group">
                <b><label>Add Track Artist</label></b>
                    <input type='text' className='form-control'
                        value={this.state.Artist}
                        onChange={this.onChangeArtist}>
                    </input>
                </div>


                <div className="form-group">
                    <br></br>
                    <input type='submit'
                        value='Edit Track'
                        className='btn btn-primary'
                        onSubmit={this.onSubmit}></input>
                </div>
            </form>
        </div>



        )
    }

}

