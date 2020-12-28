import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export class GigItem extends Component {

    constructor(){
        super()

        this.DeleteGig = this.DeleteGig.bind(this)
    }

    DeleteGig(e){
        //deletes the component 
        axios.delete("http://localhost:3100/gigData/"+this.props.gig._id)
        .then(()=>{
            this.props.ReloadGig()
        })
        .catch()
    }

    render() {
        return (
            <div>
                {/* Card for displaying the events in a nice output */}
                <Card>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                                <img src={this.props.gig.Poster} width="200" height="200"></img>
                            <footer>
                                {this.props.gig.Date}
                            </footer>
                            <h3>{this.props.gig.Name}</h3>
                        </blockquote>
                    </Card.Body>
                    {/* Link used as button  */}
                    <Link to={"/editGig/"+ this.props.gig._id} className="btn btn-warning">Edit Event</Link>
                <Button variant="danger" onClick={this.DeleteGig}>Delete</Button> 
                </Card>
            </div>
        );
    }
}
