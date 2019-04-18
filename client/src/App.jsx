import React, { Component } from 'react';
import $ from 'jquery';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import AddTask from './components/AddTask';

//class constructor contains props and state
class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        list : []
      }
      this.getData = this.getData.bind(this);
    };
//post method to send data to the server wich will be than transfered to the database
    addTask(task){
      $.ajax({
        method: 'POST',
        url: '/task',
        contentType: 'application/json',
        data: JSON.stringify({
          task:task
        })
      }).done(()=>{
        this.getData();
      });

    }
//gets data from the server that was retrieved from database
    getData(){
      $.ajax({
        url:'/tasks',
        method: 'GET',
        success:(data)=>{
          this.setState({list:data});
          console.log(data);
        },
        error:(xhr, err)=>{
        console.log('you have an err', err);
        }
      });
    }
    componentDidMount(){
  this.getData();
}
//renders data to the DOM
  render() {
<<<<<<< HEAD
    console.log(this.state.list);
    return (<div>Welcome to a Modern Minimal React Boilerplate</div>)
=======
    return (
      <div>
        {/* Render AddTask */}
        <AddTask />
      </div>
    )
>>>>>>> ad1a5e13fc812184c98475ec5bb2a60912fd6b4e
  }
};


// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
//module.exports = App;
