import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import $ from 'jquery';
import AddTask from './AddTask';


export default class ProgressMeter extends Component {
  constructor(props) {
		super(props);
		this.state = {
      now: 0
    }
    //this.getData2 = this.getData2.bind(this);

    this.increaseBar = this.increaseBar.bind(this);
    this.decreaseBar = this.decreaseBar.bind(this);
  }

  increaseBar() {
    let newNow = this.state.now
    if(this.state.now <=95){
      console.log(`Progress at: ${newNow+5}`)
      console.log(this.state.props);
      
      this.setState({
      now: newNow+5
      })
    }
  }

  decreaseBar() {
    let newNow = this.state.now
    if(this.state.now >=5){
      console.log(`Progress at: ${newNow-5}`)
      this.setState({
      now: newNow-5
      })
    }
  }
/*
  getData2(){
		$.ajax({
			url:'/tasks',
			method: 'GET',
			success:(data) => {
				this.setState({now:data[2].progress});
				console.log(`XD`, data);
			},
			error:(xhr, err) => {
			console.log('you have an err', err);
			}
		});
	}
	// initial getData
	componentDidMount(){
		console.log(':3');
		this.getData2();
	}
*/
  render() {

    return (
      <div className="bar">
          <div className="bar" ><p className="barx" onClick={this.decreaseBar}>-</p></div> 
          <div className="bar"><ProgressBar className="barxz"variant="info" now={this.state.now} label={`${this.state.now}%`}/></div>
          <div className="bar"><p className="barx"onClick={this.increaseBar}>+</p></div>
      </div>
    )
  }
};