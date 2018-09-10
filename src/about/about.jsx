import React, { Component } from 'react';
export default class About extends Component{
constructor(props){
	super(props)
}
	render(){
	console.log(this.props)
		return(
			<div>蔡功达{this.props.match.params.id}</div>
		)
	}
}