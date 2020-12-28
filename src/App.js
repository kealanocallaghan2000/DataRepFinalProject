import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// importing navbar from bootstrap
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Importing the other pages
import { SingleRead } from './components/singleRead';
import { GigRead } from './components/gigRead';
import { CreateGig } from './components/createGig';
import { CreateSingle } from './components/createSingle';
import { Home } from './components/home';
import { EditGig } from './components/editGig';
import { EditSingle } from './components/editsingle';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          {/* Navigation bar throughout the whole app */}
          <Navbar bg="warning" variant="light">
            <Nav className="nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gigRead">Events</Nav.Link>
              <Nav.Link href="/singleRead">Tracks</Nav.Link>
              <Nav.Link href="/createGig">Add Event</Nav.Link>
              <Nav.Link href="/CreateSingle">Add Track</Nav.Link>
            </Nav>
          </Navbar>
          
          {/* //adds routes to the domain */}
          <Switch>
            <Route path='/' component={Home}  exact/>
            <Route path='/gigRead' component={GigRead}  />
            <Route path='/singleRead' component={SingleRead}  />
            <Route path='/createGig' component={CreateGig}  />
            <Route path='/createSingle' component={CreateSingle}  />
            <Route path='/editGig/:id' component={EditGig} />
            <Route path='/editSingle/:id' component={EditSingle} />
          </Switch>
        </div>

      </Router>

    );
  }
}
export default App;


