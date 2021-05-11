import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const Home = (props) => {
	return (
		<div className="home-container">
			<br />
			<br />
			<br />
			<h1>What do you want to learn about today?</h1>
			<br />
			<br />

			<div>
				<div className="menu">
					<h3>
						<Link to="/Capitals">Capitals</Link>
					</h3>
					<h5>Test your knowledge of states and their capitals.</h5>
					<br />

					<h3>
						<Link to="/GeneralFacts">General Facts</Link>
					</h3>
					<h5>
						Learn information about each state including when it became a state,
						the state motto, state bird and more!
					</h5>
					<br />

					<h3>
						<Link to="/SportsTeams">Sports Teams</Link>
					</h3>
					<h5>
						Find out which professional sports teams make their homes in each
						state.
					</h5>
					<br />

					<h3>
						<Link to="/Politics">Government</Link>
					</h3>
					<h5>
						See who represents each state in Washington D.C., the local governor
						and how each state contributes to national elections.
					</h5>
					<br />
					<br />
				</div>
			</div>

			<h1 className="happy">Happy Learning!</h1>
		</div>
	);
};

export default withRouter(Home);
