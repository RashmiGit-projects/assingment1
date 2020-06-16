import React,{Component} from 'react';

const UserInput = (props) =>{
	return (
				<input type="text" value={props.username} onChange={props.changed}/>

		);
}

export default UserInput;