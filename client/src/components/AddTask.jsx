import React, { Component } from 'react';
import $ from 'jquery';

export default class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//Create a placeholder for the user to enter their input
			userInput: '',
			//place holder to save user input
			list: []
		}
		this.getData = this.getData.bind(this);
	}
	//handle user input
	changeUserInput(input) {
		this.setState({
			userInput: input
		});
	}
	
	addTask(input){
		//placeholder for what's being added
		let taskArray = this.state.list;
		// edge case for the user not to be able to enter an empty task
		if (input === ''){
			alert("Please enter a task!")
		} else {
			//  push the input into placeholder
			taskArray.push(input);
		}
		//reset the input box once sumbit is clicked on
		this.setState({
			list: taskArray,
			userInput: ''
		})
	}

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
	render() {
		return (
			<div>
				<center>
					<h1>Task Board</h1>
					<div>
						<input
							placeholder = "Enter a new task"
							// handle the user input 
							onChange={ (e)=>this.changeUserInput(e.target.value)}
							// set value to the userInput from state
							value={this.state.userInput}
							type="text"
						/>
						{/* onClick so when the submit button is clicked the input and be saved */}
						<button onClick={()=> this.addTask(this.state.userInput)}>Add Task</button>
						<ul>
							{/*iterate through list and return it so its displayed*/}
							{this.state.list.map( (val)=> <li>{val.task}</li>)}
						</ul>
					</div>
				</center>
			</div>
		);
	}
}
