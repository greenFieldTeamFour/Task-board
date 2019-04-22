import React, { Component } from 'react';

// RHL only for front end development
import { hot } from 'react-hot-loader';
import AddTask from './components/AddTask';

//class constructor contains props and state
class App extends Component {



//renders data to the DOM
  render() {
    return (
      <div>
        <center>
          <AddTask />
        </center>
      </div>
    )
  }
};


// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
//module.exports = App;
