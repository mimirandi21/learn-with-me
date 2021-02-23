import React from "react";
import Nav from "./components/Nav";
import Map from "./components/Map";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Nav />
					<Switch>
						<Route exact path="/" component={Map} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
