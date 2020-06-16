import React,{Component} from 'react';
import './UserOutput.css';

const UserOutput = (props) =>{
	return (
				<div className="userCard">
					<p><b>{props.username}</b>, Great things never come from comfort zones.Dream it. Wish it. Do it.</p>
					<p>Do something today that your future self will thank you for</p>
				</div>

		);
}

export default UserOutput;