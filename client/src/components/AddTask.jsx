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
	//post method to send data to the server wich will be than transfered to the database
	addTask(task){
		console.log(task);
		$.ajax({
			method: 'POST',
			url: '/tasks',
			contentType: 'application/json',
			data: JSON.stringify({
				task:task
			})
		}).done(() => {
			this.getData();
			this.setState({
				userInput: ''
			})
		});
	}
	//gets data from the server that was retrieved from database
	getData(){
		$.ajax({
			url:'/tasks',
			method: 'GET',
			success:(data) => {
				this.setState({list:data});
				console.log(`This is what currently is listed in Database:`, data);
			},
			error:(xhr, err) => {
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
				<input
					placeholder = "Enter a new task"
					// handle the user input 
					onChange={(e) => this.changeUserInput(e.target.value)}
					// set value to the userInput from state
					value={this.state.userInput}
					type="text"
					onKeyDown={e => {if (e.key === 'Enter') {
						console.log('task submitted');
						this.addTask(this.state.userInput);
					}}}
				/>
				{/* onClick so when the submit button is clicked the input and be saved */}
				<button onClick={() => this.addTask(this.state.userInput)}>Add Task</button>
				<ul>
					{/*iterate through list and return it so its displayed*/}
					{this.state.list.map((val, index)=> <li key={index}>{val.task}</li>)}
				</ul>
			</div>
		);
	}
}
