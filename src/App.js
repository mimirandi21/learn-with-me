import React from "react";
import Nav from "./components/Nav";
import Capitals from "./containers/Capitals";
import GeneralFacts from "./containers/GeneralFacts";
import SportsTeams from "./containers/SportsTeams";
import Politics from "./containers/Politics";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/Capitals" component={Capitals} />
						<Route exact path="/GeneralFacts" component={GeneralFacts} />
						<Route exact path="/SportsTeams" component={SportsTeams} />
						<Route exact path="/Politics" component={Politics} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
