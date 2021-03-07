import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";

const Home = props => {

	const [openMenu, setOpenMenu] = useState(false)

	const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) classArr.push(`open-${num}`)
        return classArr.join(' ')
    }

	const pushToRoute = route => {
        props.history.push(route)
		setOpenMenu(false)
    }
	
	return <div className="home-container">
		<br/>
		<br/>
		<br/>
		<h1>What do you want to learn about today?</h1>
		<br/>
		<br/>

		<Link>
			<div className="menu">
			<h3 onClick={() => pushToRoute("/Capitals")}>Capitals</h3>
			<h5>Test your knowledge of states and their capitals.</h5>
			<br/>

			<h3 onClick={() => pushToRoute("/GeneralFacts")}>General Facts </h3>
			<h5>Learn information about each state including when it became a state, the state motto, state bird and more!</h5>
			<br/>

			<h3 onClick={() => pushToRoute("/SportsTeams")}>Sports Teams </h3>
			<h5>Find out which professional sports teams make their homes in each state.</h5>
			<br/>

			<h3 onClick={() => pushToRoute("/Politics")}>Government</h3>
			<h5>See who represents each state in Washington D.C., the local governor and how each state contributes to national elections.</h5>
			<br/>
			<br/>
			</div>
		</Link>

		<h1 className="happy">Happy Learning!</h1>
	</div>;
}

export default (withRouter(Home))