import React, {useState} from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { getPolitics } from '../redux/actions/PoliticsActions'

const link = {
	width: "5.5em",
	padding: "0.2em",
	justifyContent: "center",
	background: "#10375c",
	textDecoration: "none",
	color: "white",
	fontSize: "1.5em",
	boxShadow: "1px 2px 2px #175188",
	borderRadius: "1em",
	top: "0",
	alignItems: 'center'
};

const Nav = props => {

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
	
	return (
		<div className="Nav">
			<NavLink
				to="/"
				/* set exact so it knows to only set activeStyle when route is deeply equal to link */
				exact
				/* add styling to Navlink */
				style={link}
				/* add prop for activeStyle */
				activeStyle={{
					background: "#175188",
				}}
			>
				Home
			</NavLink>
			<div className="Menu">
            	<div className={"m-item m-logo"}
                	onClick={() => setOpenMenu(!openMenu)}>
                	Options
            	</div>
            	<div className={setClassNames(1)}
                	onClick={() => pushToRoute("/Capitals")}>
                	Capitals
            	</div>
           		<div className={setClassNames(2)}
                	onClick={() => pushToRoute("/GeneralFacts")}>
                	General
            	</div>
            	<div className={setClassNames(3)}
                	onClick={() => pushToRoute("/SportsTeams")}>
                	Sports
            	</div>
				<div className={setClassNames(4)}
                	onClick={() => pushToRoute("/Politics")}>
                	Government
            	</div>
        	</div>
			</div>
		);
	
}

// const mDTP = dispatch => {
// 	return {
// 		getPolitics: info => getPolitics(info)
// 	}
// }

export default (withRouter(Nav))