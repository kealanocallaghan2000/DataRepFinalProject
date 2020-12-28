import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export class SingleItem extends Component {

    constructor(){
        super()

        this.DeleteSingle = this.DeleteSingle.bind(this)
    }
    
    DeleteSingle(e){
        //e.preventDefualt(); //stops multiple deletes 
        //deletes the component 
        axios.delete("http://localhost:3100/singleData/"+this.props.single._id)
        .then(()=>{
            this.props.ReloadSingle()
        })
        .catch()
    }

    render() {
        return (
        <div>
            {/* Card for displaying the events in a nice output */}
            <Card>
                <br></br>
                <Card.Header><b>{this.props.single.singleName}</b></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                                <img src={this.props.single.singlePoster} width="200" height="200"></img>
                            <footer>
                                {this.props.single.singleDate}
                            </footer>
                                <h3>{this.props.single.Artist}</h3>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/editSingle/"+ this.props.single._id} className="btn btn-warning">Edit Event</Link>
                    <Button variant="danger" onClick={this.DeleteSingle}>Delete</Button>
            </Card>
        </div>
        );
    }
}