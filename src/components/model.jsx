import React, { Component } from 'react';
import { Modal, Button} from 'antd';
import 'antd/dist/antd.css';
export default class Model extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Modal title={this.props.title} visible={this.props.visible}
	          onOk={this.props.handleOk} onCancel={this.props.handleCancel}
	        >
	        {this.props.children}
        </Modal>
		)
	}
}