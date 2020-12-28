import React, { Component } from 'react';
import axios from 'axios'

export class CreateGig extends Component {

    constructor() {
        super()

        //event binds
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangePoster = this.onChangePoster.bind(this)
        this.state = {
            Name: '',
            Date: '',
            Poster: ''
        }

    }

    //when name is changed
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        })
    }

    //when date is changed
    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        })
    }

    //when poster is changed
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    //when button is submitted
    onSubmit(e) {
        e.preventDefault()
        alert("Event " + this.state.Name + " added.")

        const newEvent = {
            Name: this.state.Name,
            Date: this.state.Date,
            Poster: this.state.Poster
        }
        axios.post('http://localhost:3100/gigData', newEvent) //being sent up
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
                {/* Event Form */}
                <div>
                    <h1>Add An Event</h1>
                </div>
                <br></br>
                {/* form for inputting the event information */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Event Title</label>
                        <input type='text' className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Add Event Date</label>
                        <input type='text' className='form-control'
                            value={this.state.Date}
                            onChange={this.onChangeDate}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Add Event Poster</label>
                        <textarea type='text' className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>


                        <div className="form-group">
                            <br></br>
                            <input type='submit'
                                value='Add Event'
                                className='btn btn-primary'
                                onSubmit={this.onSubmit}></input>
                        </div>
                </form>

                <br></br>

            </div>

            
        )
    }
}