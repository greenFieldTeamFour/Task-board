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
                <p className="arch">{val.habit} <mark className="innerArch">mastered on:</mark> {val.fecha[5]}{val.fecha[6]}-{val.fecha[8]}{val.fecha[9]}-{val.fecha[0]}{val.fecha[1]}{val.fecha[2]}{val.fecha[3]}</p>
              </div>
            )
        })}
      </div>
    )
  }
}