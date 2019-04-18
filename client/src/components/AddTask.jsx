import React, { Component } from 'react';

export default class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}
	
	handleChange(e) {
		this.setState({value: event.target.value});
	}

	handleSubmit(e) {
		console.log(`A name was submitted: ${this.state.value}`);
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<center>
					<h1>Add Task</h1>
					<div>
						<form onSubmit = {this.handleSubmit}>
							<label>
								<input type="text" placeholder="New Task" value = {this.state.value} onChange = {this.handleChange} />
							</label>
							<input type="submit" value="Submit" />
						</form>
					</div>
					<div>
						
					</div>
				</center>
			</div>
		);
	}
}
