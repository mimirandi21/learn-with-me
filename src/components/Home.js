import React from "react";
import { withRouter } from "react-router-dom";

export default class Home extends React.Component {
	render() {
		return <div className="home-container">
			<h1>What do you want to learn about today?</h1>
			<ul>
				<li>Capitals
					<p>Test your knowledge of states and their capitals.</p>
				</li>
				<li>General Facts 
					<p>Learn information about each state including when it became a state, the state motto, state bird and more!</p>
				</li>
				<li>Sports Teams 
					<p>Find out which professional sports teams make their homes in each state.</p>
				</li>
				<li>Government
					<p>See who represents each state in Washington D.C., the local governor and how each state contributes to national elections.</p>
				</li>
			</ul>
			<h3>Happy Learning!</h3>
		</div>;
	}
}
