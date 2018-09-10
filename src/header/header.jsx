import React, { Component } from 'react';
import './header.css';
function List(props){
	return (
		<li>{props.value}{props.b}</li>
	)
}
class Header extends Component{
	render(){
		const number=[1,2,3,4,5];
		const p={
			a:"a",
			b:"b"
		};
		const items=number.map((v)=>
			<List key={v.toString()}
				  value={v} {...p}/>
		);
		return (
			<div className="myheader">
				<ul>{items}</ul>
			</div>
		)
	}
}
export default Header