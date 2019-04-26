import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTask from './components/AddTask';
import Archived from './components/Archive';
import ProgressBar from 'react-bootstrap/ProgressBar';

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

function HowTo() {
  return (
    <div>
      <center>
        <div>
					<h1>Kaizen<h6>Learn how to use the app below: <br/>(this section has no real functionality)</h6></h1>
						<label>Enter a new habit: </label>
						<input placeholder="Example habit" type="text"/>
						<button className="bHT">Add</button>
            <h6 className="HT">*The above section allows you to add habits that you <br/>would like to master to the list by pressing the add button.</h6>
				</div>
        <br/>
        <br/>
        <div className="App">
          <div>
            <div>Example habit to master
							<button className="del2" >
								Give up 
							</button>
							<div className="bar">
					  		<div className="bar"><p className="barx" >-</p></div> 
						  	<div className="bar"><ProgressBar className="barxz" striped animated variant="warning" now={60} label={'60%'}/></div>
								<div className="bar"><p className="barx" >+</p></div>
							</div>
							<button className="del2">
								Mastered!
							</button>
						</div>
					</div>
        </div>
        <br/>
        <h6 className="HT">**In the above section you can see the habit you created,<br/>a Give up button to erase habit,<br/>a bar to keep track of your progress by pressing - or + <br/>and a Mastered! button to send a habit to the Archive.</h6>
      </center>
    </div>
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
              <Link className="Links" to="/howto/">How To|</Link>
        </nav>

        <Route path="/" exact component={Root} />
        <Route path="/main/" component={Main} />
        <Route path="/archive/" component={Archive} />
        <Route path="/howto/" component={HowTo} />
      </div>
    </Router> 
    )
  }
};

export default App;