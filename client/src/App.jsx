import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTask from './components/AddTask';
import Archived from './components/Archive';

function Root() {
  return (
  <div className="LoginMessage">
    <center>
      <br/>
      <h2 >Welcome to <mark className="KaizenW">Kaizen</mark><br/><h6>Where Improvement is one click away!</h6></h2>
      <br/>
      <input placeholder="Enter User Name" type="text"/>
      <input placeholder="Password" type="password" id="pass" name="password"/>
      <button><Link className="LinksPW" to="/main/">Login</Link></button>
    </center>
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
  return (
    <center>
      <Archived/>
    </center>
  )
}

class App extends Component {
//renders data to the DOM
  render() {
    return (
      <Router>
      <div className="LinksGroup">
        <nav>
              <Link className="Links" to="/">Login|</Link>
              <Link className="Links" to="/main/">Main|</Link>
              <Link className="Links" to="/archive/">Archive|</Link>
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