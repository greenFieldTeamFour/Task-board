import React, { Component } from 'react';

export default class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			list: []
		}
	}

	changeUserInput(input) {
		this.setState({
			userInput: input
		});
	}

	addTask(input){
		let taskArray = this.state.list;
		if (input === ''){
			alert("Please enter a task!")
		} else {
		taskArray.push(input);
		}
		this.setState({
			list: taskArray,
			userInput: ''
		})
	}

	render() {
		return (
			<div>
				<center>
					<h1>Task Board</h1>
					<div>
						<input
							placeholder = "Enter a new task"
							onChange={ (e)=>this.changeUserInput(e.target.value)}
							value={this.state.userInput}
							type="text"
							/>
							<button onClick={()=> this.addTask(this.state.userInput)}>Add Task</button>
							<ul>
								{this.state.list.map( (val)=> <li>{val}</li>)}
							</ul>
					</div>
				</center>
			</div>
		);
	}
}
