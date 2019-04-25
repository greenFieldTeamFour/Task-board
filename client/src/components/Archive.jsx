import React, { Component } from 'react';
import $ from 'jquery';

export default class Archive extends Component {

  constructor(props) {
		super(props);
		this.state = {
			list: []
		}
		this.getData = this.getData.bind(this);
  }
  
  getData(){
		$.ajax({
			url:'/mastered',
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
	// initial getData
	componentDidMount(){
		console.log('Initial load of DB');
		this.getData();
  }
  
  render () {
    return (
      <div>
        <br/>
        <h2>This is the list of your accomplishments in<mark className="KaizenW">Kaizen</mark><h6>This are all of your mastered habits, keep it up!</h6></h2>
        <br/>
        {this.state.list.map((val, index) => {
						return (
              <div key={index}>
                <p>{val.habit} mastered on : 04/22/2019</p>
              </div>
            )
        })}
      </div>
    )
  }
}