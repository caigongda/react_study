import React, { Component } from 'react';
import { Table, Icon ,Modal} from 'antd';
import 'antd/dist/antd.css';
import AddModel from "../components/model"
export default class About extends Component{
constructor(props){
	super(props);
	this.state={
		data : [{
		  key: '1',
		  name: 'John Brown',
		  age: 32,
		  address: 'New York No. 1 Lake Park',
		}, {
		  key: '2',
		  name: 'Jim Green',
		  age: 42,
		  address: 'London No. 1 Lake Park',
		}, {
		  key: '3',
		  name: 'Joe Black',
		  age: 32,
		  address: 'Sidney No. 1 Lake Park',
		}],
		visible:false,
	}
}
edit(text,record){
	console.log(text,record)
}
delete(index){
let data=[...this.state.data];
data.splice(index,1);
	this.setState({
	data
	})
}
add(){
	this.setState({
		visible:true
	})
}
handleOk(){
	
}
handleCancel(){
	this.setState({
		visible:false
	})
}
	render(){
	const columns = [{
	  title: 'Name',
	  dataIndex: 'name',
	  key: 'name',
	  render: text => <a href="#">{text}</a>,
	}, {
	  title: 'Age',
	  dataIndex: 'age',
	  key: 'age',
	}, {
	  title: 'Address',
	  dataIndex: 'address',
	  key: 'address',
	}, {
	  title: 'Action',
	  key: 'action',
	  render: (text, record,index) => (
	    <span>
	      <a onClick={this.edit.bind(this,text,record)}>edit</a>
	      <span className="ant-divider" />
	      <a onClick={this.delete.bind(this,index)}>Delete</a>
	      <span className="ant-divider" />
	      <a onClick={this.add.bind(this)}>
	        add
	      </a>
	    </span>
	  ),
	}];
		return(
			<div>蔡功达{this.props.match.params.id}
				<Table columns={columns} dataSource={this.state.data} pagination={false}/>
				<AddModel title={"你你您"} visible={this.state.visible} handleOk={this.handleOk.bind(this)} handleCancel={this.handleCancel.bind(this)}>
					啊啊啊
				</AddModel>
			</div>
		)
	}
}