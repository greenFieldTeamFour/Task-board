import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTask from './components/AddTask';

function Root() {
  return (
  <div className="LoginMessage">
    <h2 >Welcome to Kaizen, please login</h2>
  </div>
  )
}

function Main () {
  return (
  <div>
    <center>
      <AddTask />
    </center>
  </div>
  )
}

function Archive() {
  return <h2>Archive</h2>;
}

class App extends Component {
//renders data to the DOM
  render() {
    return (
      <Router>
      <div className="LinksGroup">
        <nav>
              <Link className="Links" to="/">Login.</Link>
              <Link className="Links" to="/main/">Main.</Link>
              <Link className="Links" to="/archive/">Archive</Link>
        </nav>

        <Route path="/" exact component={Root} />
        <Route path="/main/" component={Main} />
        <Route path="/archive/" component={Archive} />
      </div>
    </Router> 
    )
  }
};

export default App;