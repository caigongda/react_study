import React, { Component } from 'react';
import './header.css';
import About from "../about/about";
import { Link,Route,Switch } from 'react-router-dom';
function List(props){
	return (
		<li><Link to={`/${props.a}/${props.value}`}>{props.children}{props.value}</Link></li>
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
				  value={v} {...p}>儿子</List>
		);
		return (
			<div className="myheader">
				<ul>{items}</ul>
				<Link to="/b">aaaa</Link>
				<Switch>
					<Route path="/b" component={About}></Route>
					<Route path="/a/:id" component={About}></Route>
				</Switch>
			</div>
		)
	}
}
export default Header